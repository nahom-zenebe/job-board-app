const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT||5000
const {ConnectDB}=require('../libs/Mongodb')
const AuthRoutes=require('../Routers/AuthRoutes')
const Jobposting=require('../Routers/JobpostRoutes')
const cookieParser = require('cookie-parser');




app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use('/api/auth',AuthRoutes)
app.use('/api/job',Jobposting)









app.listen(PORT,()=>{
 console.log(`The port is running at port ${PORT}`)
 ConnectDB()
})