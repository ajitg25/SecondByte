const express = require('express');



const donor=require('../controllers/donor_controller');
const router = express.Router();

router.get('/login',donor.login);
router.post('/register',donor.register);

module.exports=router;