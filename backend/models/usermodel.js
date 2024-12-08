const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true
    },
    
    ProfilePic:{
        type:String
   

    },
    resume:{
        type:String
    },
    role:{
        type:String,
        enum:['seeker','recruiter'],
        required:true

          
    }
})

const User=mongoose.model('User',userSchema)

module.exports=User
