const mongoose=require('mongoose')
require('dotenv').config()

module.exports.ConnectDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to Database successfully"))
    .catch((err)=>console.log(err))
}

