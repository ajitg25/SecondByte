const products = require('../models/products');

//Controller for creating and pushing the product inside the database
exports.createProduct = (req,res)=>{
    products.create(req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"Data Insertion Unsuccessful",
                err:err
            })
        }
        if(data){
            res.status(200).json({
                message:"Data Successfully Inserted",
                data:data
            })
        }
    })
}


//Controller for getting all the products listed in the Database
exports.getAllProducts = (req,res)=>{
    products.find().then((data)=>{
        res.status(200).json({
            message:"Successfull Fetch",
            data:data
        })
    })
}

//Controller for Updating the product with the given ID
exports.updateProductByProductId = (req,res)=>{
    const updateableValue = Object.keys(req.body).slice(1).reduce((result, key) => {
        result[key] = req.body[key];
        return result;
    }, {});
    products.updateOne({prod_id:req.body.prod_id},[{"$set":updateableValue}]).then((data)=>{
        res.status(200).json({
            message:"Successfully Updated",
            data:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Updation Error",
            err:err
        })
    })
}

//Controller for Deleting the product with the given ID
exports.deleteProductByProductId = (req,res)=>{
    products.deleteOne(req.body).then((data)=>{
        res.status(200).json({
            message:"Product Deleted Successfully",
            data:data
        })
    })
    .catch((err)=>[
        res.status(500).json({
            message:"Deletion Error",
            err:err
        })
    ])
}