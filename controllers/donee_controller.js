const User = require('../models/user');

exports.register = async function(req, res){
    try {
        // check if the user exists
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
          console.log("Successfull");
          return res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ error });
        console.log("UnSuccessfull");
      }
  }

exports.login = async function(req, res){    
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
}

