const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "Super secret secret, I love dog's but I'm also allergic",
    cookie: {
        expires: 60000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.get('/session', function (req, res, next) {
    if (req.session.views) {
        req.session.views++;
        res.write('<p> Session expires after 1 min of in activity: ' + (req.session.cookie.expires) + '</p>');
        res.end();
    } else {
        req.session.views = 1;
        window.alert("You've been idle for a while, we went ahead and logged you out. Safety first!");
        res.end('New session is started');
    }
})

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
