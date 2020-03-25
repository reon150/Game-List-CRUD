const { Router } = require('express');
const router = Router();

const { 
    renderNewGameForm, 
    createNewGame, 
    renderGames, 
    renderEditForm, 
    updateGame, 
    deleteGame 
} = require('../controllers/gamelist.controller');

// New Game
router.get('/games/add', renderNewGameForm);
router.post('/games/new-game', createNewGame);

// Get All Games
router.get('/games', renderGames);

// Edit Game
router.get('/games/edit/', renderEditForm);
//router.put('/games/edit/:id', updateGame);

// Delete Game
router.delete('/games/delete/:id', deleteGame);

module.exports = router;