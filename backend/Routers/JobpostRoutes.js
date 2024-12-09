const express = require('express');
const router = express.Router();
const { authmiddleware} = require('../middleware/Authmiddleware'); 
const { recruitermiddleware} = require('../middleware/Authmiddleware');



router.get('/recruiter-route',authmiddleware,recruitermiddleware)



module.exports=router