
const  Job=require('../models/JobPostingsmodel')




const createjobposting=async(req,res)=>{
    try {
        const{ title,company,description, Salary, location,experienceLevel,recruiter,role} =req.body
        if (!title || !company || !description|| !Salary || !location || !experienceLevel||!recruiter||!role) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newjobPosting=new Job({title,company,description, Salary, location, role,experienceLevel,recruiter})
        
        await newjobPosting.save()
        res.status(201).json({ message: "Job posting created successfully", job: newjobPosting })

    } catch (error) {

console.log("Error  creating job posting Controller",error.message)
    res.status(500).json({message:"Internal Server Error"})

    }

}






const getallpostedjob=async(req,res)=>{
try {
    const alljobposting=await Job.find({})

    if(!alljobposting){
        return res.status(404).json({message:"There is no post found"})
    }
    res.status(200).json(alljobposting)
    
} catch (error) {

     console.log("Error get job posting Controller",error.message)
    res.status(500).json({message:"Internal Server Error"})
}
}

const getjobbasedonfilter=async(req,res)=>{
    try {
        const {jobtitle,experienceLevel}=req.query;
        const query={}
        if(jobtitle) query.title={$regex: jobtitle,$options: 'i'}
        if (experienceLevel)query.experienceLevel=experienceLevel

        const filterjob=await Job.find(query)
      
        res.status(200).json({ success: true, filterjob });
       
        
    } catch (error) {
    
         console.log("Error get job Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
    }
    


const getEarlypostedjob=async(req,res)=>{
    try {
      
        const oneDayAgo=new Date()
        oneDayAgo.setDate(oneDayAgo.getDate()-1)
     const newJobposting=await Job.find({  
          createdAt:{$gte: oneDayAgo}
     })


     res.status(200).json(newJobposting)




        
    } catch (error) {
        console.log("Error get job posting Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
    }


const UpdateJobPosting=async(req,res)=>{
       const {jobId}=req.params
       const {updateJob}=req.body
    try {
        const updatedJob=await  Job.findByIdAndUpdate(jobId,updateJob,{ new: true, runValidators: true })

        if (!updatedJob) {
            return res.status(404).json({ error: 'Job not found' });
          }


          res.status(200).json({ message: 'Job updated successfully', updatedJob });
        } catch (error) {
          console.error('Error updating job:', error);
          res.status(500).json({ error: 'An error occurred while updating the job' });
        }
            
}
const pindata=async(req,res)=>{
    const {jobId}=req.params
    try {
        const job=await Job.findById(jobId)
        if(!job){
            return res.status(404).json({ message: 'Job not found' });
            
        }
    
        job.pinned=!job.pinned
        await job.save()

        res.json({ 
            message: Job.pinned ? 'Job pinned successfully' : 'Job unpinned successfully', 
            pinned: Job.pinned,
            job 
          });
        
    } catch (error) {
        res.status(500).json({ message: 'Error pinning/unpinning job', error: error.message });
        
    }

}
const getpindata=async(req,res)=>{
    try {
        
        const pinnedData=await Job.find({pinned:true})
       
        if (!pinnedData || pinnedData.length === 0) {
            return res.status(404).json({ message: 'No pinned jobs found' });
        }
        return res.json({ pinnedData });


    } catch (error) {
        console.error('Error fetching pinned jobs:', error);
        return res.status(500).json({ message: 'Error fetching pinned jobs', error: error.message });
   
        
    }
}
    module.exports={createjobposting,pindata,getallpostedjob,getEarlypostedjob,UpdateJobPosting,getpindata,getjobbasedonfilter}
