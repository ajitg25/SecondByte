const User = require('../models/user');

module.exports.register = async function(req, res){
    try {
    // check if the user exists
    console.log("HIIII");
    const user = await User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      
      return res.status(200).json(user);
    }
   catch (error) {
    res.status(400).json({ error });
  }
}
  
// render the sign in page
module.exports.login = async function(req, res){
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
};