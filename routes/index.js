const express = require('express');
const productRoutes = require('./products');

const donorRoute = require('./donor');
const doneeRoute = require('./donee');

const router = express.Router();

router.use('/products',productRoutes);

router.use('/home/donor/',donorRoute);
router.use('/home/donee/',doneeRoute);

module.exports=router;