const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {applicationForm,getApplicationsByJob,getNumberOfApplicantsForJob ,getApplicationsPostedByRecruiter,getAllApplicationsForRecruiter, updateApplicationStatus,RemoveApplication,getapplicationsuserSubmit}=require('../controller/ApplicationController')


router.post('/applicationForm/:jobId',applicationForm)
router.get('/:jobId', getApplicationsByJob);
router.get('/numberapplication',getNumberOfApplicantsForJob );
router.get('/appliedJobs/:userId',authmiddleware,getapplicationsuserSubmit);


router.get('/Recruiter/postedjob', getApplicationsPostedByRecruiter);
router.get('/allapplications',getAllApplicationsForRecruiter);
router.put('/applicationsSubmit/status', updateApplicationStatus);
router.delete('/Removeapplications',RemoveApplication)




module.exports=router

