const express=require('express')
const router=express.Router()
const {createRecruiterProfile,getRecruiterProfile,deleteRecruiterProfile}=require('../controller/recruiterController')

router.post('/create', createRecruiterProfile);
router.get('/:userId', getRecruiterProfile);
router.delete('/:userId', deleteRecruiterProfile);



module.exports=router