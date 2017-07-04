const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
const massive = require('massive');
const masterRoutes = require('./server/masterRoutes.js');
const session = require('express-session');
const passport = require('passport');
const  LocalStrategy = require('passport-local').Strategy;
const config = require('./server/config.js');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static(__dirname + '/public'));
massive(config.postgres).then(dbInstance=>{
  app.set('db', dbInstance)
});
masterRoutes(app);



app.listen(port, function(){
  console.log('Ground control to Major Tom');
});
