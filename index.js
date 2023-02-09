const express = require('express');
const port = 9058;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportstrtegy =require('./config/passportauth');
const passportlocalstretgy = require('./config/passport-local-strtegy');

app.use(session({
    name : 'sumit',
    secret : " red and white",
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60*24
    }
}));

app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(passport.setAuthentication);
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routes'));






app.listen(port,(err)=>{
    if(err){
        console.log("Server not start");
        return false;
    }
    console.log("Server is start on port :- "+port);
})