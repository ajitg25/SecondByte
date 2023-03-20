const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/SecondByte");

const db=mongoose.connection

db.on('error',console.error.bind(console,"Error while connecting to DB"));

db.once('open',function(){
    var myobj = { name: "AJit ", email: "ajitg131@gmail.com",password:"1234" };
    db.collection("UserCollection").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
    console.log('Connection with DB is Successfull');
})

module.exports=db;