const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const adminregister = require('../models/RegisterModel');


passport.use(new GoogleStrategy({
    clientID:"661390817274-7j8gm7qog79djnd6lnpkggncmsd84m7u.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:9058/login/loginData/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.checkUserLogin = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
        
    }
    return res.redirect('/admin/');
}

passport.setAuthentication = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.locals.user = req.user; 
    }
    next();
}

module.exports = passport;