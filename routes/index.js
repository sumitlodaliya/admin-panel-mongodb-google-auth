const express = require("express");

const routes = express.Router();

const passport = require('passport');

console.log("index route is start");

routes.use('/register',require('./register'));
routes.use('/login',require('./login'));
routes.use('/admin',passport.checkUserLogin,require('./admin'));

module.exports = routes;