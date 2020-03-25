const gamesCtrl = {};

prueba = ['Numero1', 'numero2', 'numero3', 'numero4']

gamesCtrl.renderGames = (req, res) => {
    res.render('all-games')
};

gamesCtrl.renderNewGameForm = (req, res) => {
    res.render('new-game');
};

gamesCtrl.renderEditForm = (req, res) => {
    res.render('edit-game');
};

gamesCtrl.createNewGame = (req, res) => {
    res.redirect('/games');
};

gamesCtrl.updateGame = (req, res) => {
    res.redirect('/games');
};

gamesCtrl.deleteGame = (req, res) => {
    res.redirect('/games');
};

module.exports = gamesCtrl;


/*
<select class="selectpicker" multiple data-live-search="true">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
*/
