const mongoose=require('mongoose')


const recruiterProfileSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    companyName:{
        type:String,
        required:true

    },
    
    postedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],

},{
    timestamps:true
  })

const RecruiterProfile = mongoose.model('RecruiterProfile', recruiterProfileSchema);
module.exports = RecruiterProfile;