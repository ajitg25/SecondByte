const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    prod_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    food_name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    shelf_life:{
        type:Date,
        required:true
    },
    
})

module.exports = mongoose.model('Products',productsSchema);