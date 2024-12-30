const mongoose = require('mongoose');
const Application=require('../models/applicationmodel')
const  Job=require('../models/JobPostingsmodel')


module.exports.applicationForm = async (req, res) => {
  try {
    const { seeker, phone, location, coverLetter, Education } = req.body;
    const { jobId } = req.params;

    if (!jobId || !seeker || !coverLetter || !phone || !Education) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = await Job.findById(jobId);
    console.log('Received jobId:', jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    

    const newApplicationForm = new Application({
      job,
      seeker,
      location,
      phone,
      coverLetter,
      Education,
    });

  

    const savedApplication = await newApplicationForm.save();
    res.status(201).json({ message: "Application created successfully", savedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating application form", error: error.message });
  }
};


module.exports.getApplicationsByJob=async(req,res)=>{

    try {
        const {jobId} = req.params;
    
        const applications = await Application.find({ job: jobId })
          .populate('job')
          .populate('seeker');
    
        if (applications.length === 0) {
          return res.status(404).json({ message: 'No applications found for this job' });
        }
    
        res.status(200).json(applications);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching applications for this job', error: error.message });
      }

}

module.exports.getApplicationsBySeeker = async (req, res) => {
    try {
      const { seekerId } = req.params;

      if (!seekerId || !mongoose.Types.ObjectId.isValid(seekerId)) {
        return res.status(400).json({ message: 'Invalid seekerId' });
      }
  
      const applications = await Application.find({seeker:seekerId })
        .populate('job')
        .populate('seeker')

  
      if (applications.length === 0) {
        return res.status(404).json({ message: 'No applications found for this seeker' });
      }
  
      res.status(200).json(applications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching applications for this seeker', error: error.message });
    }
  };

  module.exports.getAllApplicationsForRecruiter = async (req, res) => {
    try {
        
        const jobs = await Job.find({ postedBy: req.user._id });
        const applications = await Application.find({ job: { $in: jobs.map(job => job._id) } })
            .populate('job')
            .populate('seeker');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
};


module.exports.updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(req.params.applicationId, { status }, { new: true });
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update application status' });
    }
};
  
module.exports.RemoveApplication = async (req, res) => {
  const { applicationId } = req.params; 

  try {
  
    if (!applicationId) {
      return res.status(400).json({ error: 'Application ID is required' });
    }
    const deletedApplication = await Application.findByIdAndDelete(applicationId);


    if (!deletedApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

   
    res.status(200).json({ message: 'Application removed successfully', deletedApplication });
  } catch (error) {
   
    console.error('Error removing application:', error);
    res.status(500).json({ error: 'An error occurred while removing the application' });
  }
};
