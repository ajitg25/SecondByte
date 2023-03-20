const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.use(new LocalStrategy(
    {
        usernameField:'email',
        passReqToCallback:true
    },
    function(req,email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("Error in Auth -->Passport");
                return done(err,false);
            }
            if(!user || password!=user.password){
                req.flash('error','invalid username or password')
                return done(null,false);
            }

            return done(null,user);
        })
    }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err){
            console.log("Error in Auth -->Passport");
            return done(err,false);
        }
        if(!user){
            return done(null,false);
        }
        return done(null,user);
    })
})

passport.checkAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/login');
}

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user; 
    }
    return next();
}

passport.signInSignOutAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/kuchto');
    }
    return next();
}

module.exports=passport;