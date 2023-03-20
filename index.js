
const express = require('express');
const db=require('./db/connect');
const bodyParser = require('body-parser');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const routes = require("./routes/index");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/SecondByte',
    collection: 'UserCollection'
  });

  store.on('error', function(error) {
    console.log(error);
  });

  app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true
  }));


app.use(bodyParser.json());

app.use('/',routes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);