const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./routes/api'));
app.use(require('./routes/client'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
  sequelize.sync({ force: false });
});
