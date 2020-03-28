const { Schema, model } = require('mongoose');

const GameSchema = new Schema(
    {
        title: { 
            type: String, 
            required: true
        },
        description: { 
            type: String,
            requited: true 
        },
        realase_date: {
            type: Date
        },
        image_path: {
            type: String,
        },
        feactures: {
            platforms: Array,
            modes: Array,
            perspectives: Array,
            genres: Array,
            themes: Array
        }
    }, 
    { 
        timestamps: true
    }
);

module.exports = model('Game', GameSchema);