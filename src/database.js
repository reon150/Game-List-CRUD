const mongooge = require('mongoose');

const { GameList_APP_MONGODB_HOST, GameList_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${GameList_APP_MONGODB_HOST}/${GameList_APP_MONGODB_DATABASE}`

mongooge.connect(MONGODB_URI , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));


