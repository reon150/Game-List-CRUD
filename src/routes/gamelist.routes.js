const { Router } = require('express');
const router = Router();

const { 
    renderNewGameForm,
    renderEditForm, 
    renderInfoGame, 
    createNewGame, 
    renderGames, 
    updateGame, 
    deleteGame 
} = require('../controllers/gamelist.controller');

// New Game
router.get('/games/add', renderNewGameForm);
router.post('/games/new-game', createNewGame);

// Get All Games
router.get('/games', renderGames);

// Get One Game
router.get('/games/info/:id', renderInfoGame);

// Edit Game
router.get('/games/edit/:id', renderEditForm);
router.put('/games/edit/:id', updateGame);

// Delete Game
router.get('/games/delete/:id', deleteGame);

module.exports = router;