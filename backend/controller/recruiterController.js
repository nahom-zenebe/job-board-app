const RecruiterProfile=require('../models/recruitermodel')


module.exports.createRecruiterProfile=async(req,res)=>{
    try {

        const {user, companyName}=req.body

        const newProfile = new RecruiterProfile({
            user,
            companyName,
            ProfilePic
          });
         const savedProfile = await newProfile.save();
         res.status(201).json({message:"Profile created successfully",savedProfile});
        
    } catch (error) {
        res.status(500).json({ message: 'Error creating recruiter profile', error: err });
    }
}


module.exports.getRecruiterProfile = async (req, res) => {
 
        try {
            const profile = await RecruiterProfile.findOne({ user: req.params.userId })
              .populate('user') 
              .populate('postedJobs'); 
            if (!profile) {
              return res.status(404).json({ message: 'Recruiter profile not found' });
            }
            res.status(200).json(profile);
          } catch (err) {
            res.status(500).json({ message: 'Error fetching recruiter profile', error: err });
          }
    
}


exports.deleteRecruiterProfile = async (req, res) => {
    try {
      const deletedProfile = await RecruiterProfile.findOneAndDelete({ user: req.params.userId });
      if (!deletedProfile) {
        return res.status(404).json({ message: 'Recruiter profile not found' });
      }
      res.status(200).json({ message: 'Recruiter profile deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting recruiter profile', error: err });
    }
  };