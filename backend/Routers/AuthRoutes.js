const express = require('express');
const router = express.Router();
const { signup,login,logout,UpdateProfile } = require('../controller/Authcontroller'); 
const {authmiddleware}=require('../middleware/Authmiddleware')

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout',logout)
router.post('/Update-Profile',authmiddleware,UpdateProfile)
module.exports = router;


module.exports=router