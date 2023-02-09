const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const adminregister = require('../models/RegisterModel');

passport.use(new passportLocal({
    usernameField : "email",  
},(email,password,done)=>{
    adminregister.findOne({email : email},(err,user)=>{
        if(err)
        {
            console.log("Something wrong");
            return done(null,false);
            
        }

        if(!user || user.password != password)
        {
            console.log("Email and password not metch");
            return done(null,false);
            
        }
        return done(null,user);
  });
}));


passport.serializeUser((user,done)=>{
    return done(null,user.id);
});


passport.deserializeUser((id,done)=>{
    adminregister.findById(id,(err,user)=>{
        if(err)
        {
            console.log("error");
            return done(null,false);
        }
        return done(null,user);
    });
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