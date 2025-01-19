const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {applicationForm,getApplicationsByJob,getApplicationsPostedByRecruiter,getAllApplicationsForRecruiter, updateApplicationStatus,RemoveApplication}=require('../controller/ApplicationController')


router.post('/applicationForm/:jobId',applicationForm)
router.get('/:jobId',authmiddleware, getApplicationsByJob);
router.post('/Recruiter/postedjob', getApplicationsPostedByRecruiter);
router.get('/allapplications',authmiddleware, getAllApplicationsForRecruiter);
router.put('/:applicationId/status', authmiddleware, recruitermiddleware, updateApplicationStatus);
router.delete('/Removeapplications/:Id', authmiddleware, recruitermiddleware,RemoveApplication)



module.exports=router

