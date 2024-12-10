const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {applicationForm,getApplicationsByJob,getApplicationsBySeeker,getAllApplicationsForRecruiter, updateApplicationStatus}=require('../controller/ApplicationController')


router.post('/applicationForm',authmiddleware,applicationForm)
router.get('/applications/:jobId',authmiddleware, getApplicationsByJob);
router.get('/applications/seeker/:seekerId',authmiddleware,getApplicationsBySeeker);

router.get('/applications', authmiddleware, recruitermiddleware, getAllApplicationsForRecruiter);
router.put('/applications/:applicationId/status', authmiddleware, recruitermiddleware, updateApplicationStatus);



module.exports=router

