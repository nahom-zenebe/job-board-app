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
    description:{
        type:String,
        required:true
      
    },
    
    Salary:{
        type: Number,
        required:true

   

    },
    location:{
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
        
        
    },
    pinned:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
  })

const Job=mongoose.model('Job',jobSchema)

module.exports= Job