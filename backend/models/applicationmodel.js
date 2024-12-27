const mongoose=require('mongoose')




const applicationSchema=new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  seeker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  phone:{type:Number,required:true},
  location:{type:String,required:true},
  coverLetter: { type: String },
  Education: { type: String, enum: ['highschool', 'bachelor_degree', 'master_degree','doctorate'], default: 'bachelor_degree' },
  appliedAt: { type: Date, default: Date.now },
  
  
},{
  timestamps:true
})

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;