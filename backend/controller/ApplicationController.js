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


module.exports.getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    let query = {};


    if (jobId !== "allapplications") {
     
      if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: 'Invalid job ID' });
      }
      query.job = jobId;
    }

    
    const applications = await Application.find(query)
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
};


module.exports.getNumberOfApplicantsForJob = async (req,res) => {
  const {jobId} =req.body
  try {
   
    const applicantCount = await Application.countDocuments({ jobId });

    return applicantCount;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching applications for number applicate for specific job', error: error.message });
  
  }
};



module.exports.getApplicationsPostedByRecruiter = async (req, res) => {
  try {
    const { recruiterId } = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(recruiterId)) {
      return res.status(400).json({ message: 'Invalid recruiter ID' });
    }

    
    const jobs = await Job.find({ recruiter: recruiterId });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: 'No jobs found for this recruiter' });
    }

  
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching jobs for this recruiter', error: error.message });
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
