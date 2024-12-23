const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {createjobposting, getallpostedjob,getEarlypostedjob,UpdateJobPosting,pindata} = require('../controller/jobcontroller');

router.post('/postsjob',createjobposting)
router.get('/alljobposting',getallpostedjob)
router.get('/recentjob',authmiddleware,getEarlypostedjob)
router.post('/pindata/:jobId',authmiddleware,pindata)
router.put('/updatejob/:Id',authmiddleware,recruitermiddleware,UpdateJobPosting)



module.exports=router