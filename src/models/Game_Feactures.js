const { Schema, model } = require('mongoose');

const GameFeacturesSchema = new Schema(
    {
        type: { 
            type: String,
            required: true
        },
        items: {
            type: Array
        }
    },
    { 
        collection : 'game_feactures' 
    }
);

module.exports = model('Game_Feactures', GameFeacturesSchema);