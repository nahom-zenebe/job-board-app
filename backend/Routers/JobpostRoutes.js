const express = require('express');
const router = express.Router();
const { authmiddleware,recruitermiddleware} = require('../middleware/Authmiddleware');
const {createjobposting, getallpostedjob,getEarlypostedjob} = require('../controller/jobcontroller');

router.post('/posts-job',authmiddleware,recruitermiddleware,createjobposting)
router.get('/alljobposting',authmiddleware,getallpostedjob)
router.get('/recent-job',authmiddleware,getEarlypostedjob)



module.exports=router