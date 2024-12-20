
const  Job=require('../models/JobPostingsmodel')




const createjobposting=async(req,res)=>{
    try {
        const{ title,company,description, Salary, location,experienceLevel,recruiter,role} =req.body
        if (!title || !company || !description|| !Salary || !location || !experienceLevel||! recruiter||!role) {
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


const getEarlypostedjob=async(req,res)=>{
    try {
      //make it -1 becaue we want to make it for the last 24hr
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

    module.exports={createjobposting, getallpostedjob,getEarlypostedjob,UpdateJobPosting}
