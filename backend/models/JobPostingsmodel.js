const mongoose=require('mongoose')





const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true,

    },
    descritpion:{
        type:String,
        required:true
      
    },
    
    Salary:{
        type:String,
        required:true

   

    },
    loaction:{
        type:String, 
        required:true
    },
    role:{
        type:String,
        enum:['seeker','recruiter'],
        required:true

          
    },
    experienceLevel:{
        type:String, 
        enum:['Entry','Mid','Senior'],
        required:true
    },
    postedAt:{
        type:Date,
        default:Date.now(),
        
    },
    recruiter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
        
    }
})

const Job=mongoose.model('Job',jobSchema)

module.exports=User