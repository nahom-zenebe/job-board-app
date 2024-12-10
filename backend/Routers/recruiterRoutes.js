const express=require('express')
const router=express.Router()
const {createRecruiterProfile,getRecruiterProfile,deleteRecruiterProfile}=require('../controller/recruiterController')
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');

router.post('/create', authmiddleware,recruitermiddleware, createRecruiterProfile);
router.get('/:userId', authmiddleware,recruitermiddleware, getRecruiterProfile);
router.delete('/:userId', authmiddleware,recruitermiddleware, deleteRecruiterProfile);



module.exports=router