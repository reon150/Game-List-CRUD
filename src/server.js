const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const multer = require('multer')

// Helpers
const {moment} = require('handlebars-helpers')();
const {ifIn} = require('./helpers/Handlebars')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {moment, ifIn}
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecrectkey',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(multer({dest: path.join(__dirname, './public/img/games_imgs')}).single('imageGame'));

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/gamelist.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;