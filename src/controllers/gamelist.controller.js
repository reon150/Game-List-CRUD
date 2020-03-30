const gamesCtrl = {};
const Game = require('../models/Game');
const Game_Feactures = require('../models/Game_Feactures');
const path = require('path');
const fs = require('fs-extra');

gamesCtrl.renderGames = async (req, res) => {
    const games = await Game.find();
    res.render('games/all-games', { games });
};

gamesCtrl.renderNewGameForm = async (req, res) => {
    const perspectives = await getFeactures('Perspective');
    const genres = await getFeactures('Genre');
    const platforms = await getFeactures('Platform');
    const themes = await getFeactures('Theme');
    const modes = await getFeactures('Mode');

    res.render('games/new-game',{perspectives, genres, platforms, themes, modes});
};

gamesCtrl.renderEditForm = async (req, res) => {
    const perspectives = await getFeactures('Perspective');
    const genres = await getFeactures('Genre');
    const platforms = await getFeactures('Platform');
    const themes = await getFeactures('Theme');
    const modes = await getFeactures('Mode');
    const game = await Game.findById(req.params.id);

    res.render('games/edit-game',{game, perspectives, genres, platforms, themes, modes});
};

gamesCtrl.renderInfoGame = async (req, res) => {
    const game = await Game.findById(req.params.id);
    res.render("games/info-game", {game});
};

gamesCtrl.createNewGame = async (req, res) => {
    const {title, description, realase_date, platforms, genres, themes, perspectives, modes} = req.body;
    const feactures = {platforms, genres, themes, perspectives, modes}

    if(req.file) {
        //Getting image path
        const imageTempPath = req.file.path;
        const randomName = Date.now()+Math.floor(Math.random() * 100);
        const ext = path.extname(req.file.originalname).toLowerCase();

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {

            //Changing image name
            const image_path = '/img/games_imgs/'+ req.file.filename +randomName + ext;
            const targetPath = path.resolve(imageTempPath+randomName+ext);
            await fs.rename(imageTempPath, targetPath);

            const newGame = new Game({title, description, realase_date, feactures, image_path});
            await newGame.save();
        } else {
            await fs.unlink(imageTempPath);
            req.flash('error_msg', 'Only image files are allowed')
            res.redirect('/games/add');
        }
    } else {
        const newGame = new Game({title, description, realase_date, feactures});
        await newGame.save();
    }

    req.flash("success_msg", "Game Added Successfully");
    res.redirect('/games');
};

gamesCtrl.updateGame = async (req, res) => {
    const {title, description, realase_date, platforms, genres, themes, perspectives, modes} = req.body;
    const feactures = {platforms, genres, themes, perspectives, modes};

    if(req.file) {
        //Getting image path
        const imageTempPath = req.file.path;
        const randomName = Date.now()+title+Math.floor(Math.random() * 100);
        const ext = path.extname(req.file.originalname).toLowerCase();

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {

            //Changing image name
            const image_path = '/img/games_imgs/'+ req.file.filename +randomName + ext;
            const targetPath = path.resolve(imageTempPath+randomName+ext);
            await fs.rename(imageTempPath, targetPath);

            await Game.findByIdAndUpdate(req.params.id, {title, description, realase_date, feactures, image_path});
        } else {
            await fs.unlink(imageTempPath);
            req.flash('error_msg', 'Only image files are allowed')
            res.redirect('/games/add');
        }
    } else {
        await Game.findByIdAndUpdate(req.params.id, {title, description, realase_date, feactures});
    }

    req.flash('success_msg', 'Game Update Succesfully')
    res.redirect('/games');
};

gamesCtrl.deleteGame = async (req, res) => {
    const {image_path} = await Game.findById(req.params.id);
    if(image_path) {
        await fs.unlink(path.resolve('./src/public/' + image_path)); 
    }
    await Game.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Game Deleted Succesfully')
    res.redirect('/games');
};

function getFeactures(type) {
    return Game_Feactures.findOne({type})
}

module.exports = gamesCtrl;
