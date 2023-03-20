const express = require('express');



const donee=require('../controllers/donee_controller');
const router = express.Router();

router.get('/login',donee.login);
router.post('/register',donee.register);

module.exports=router;