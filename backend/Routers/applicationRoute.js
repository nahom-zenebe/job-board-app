const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {applicationForm,getApplicationsByJob,getNumberOfApplicantsForJob ,getApplicationsPostedByRecruiter,getAllApplicationsForRecruiter, updateApplicationStatus,RemoveApplication,getapplicationsuserSubmit}=require('../controller/ApplicationController')


router.post('/applicationForm/:jobId',applicationForm)
router.get('/:jobId', getApplicationsByJob);
router.get('/numberapplication',getNumberOfApplicantsForJob );
router.get('/appliedJobs',authmiddleware,getapplicationsuserSubmit);


router.post('/Recruiter/postedjob', getApplicationsPostedByRecruiter);
router.get('/allapplications',getAllApplicationsForRecruiter);
router.put('/:applicationId/status',  recruitermiddleware, updateApplicationStatus);
router.delete('/Removeapplications/:Id', authmiddleware, recruitermiddleware,RemoveApplication)



module.exports=router

