const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT||5000
const {ConnectDB}=require('../libs/Mongodb')
const AuthRoutes=require('../Routers/AuthRoutes')
const recruiterRoutes=require('../Routers/recruiterRoutes')
const applicationRoutes=require('../Routers/applicationRoute')
const Jobposting=require('../Routers/JobpostRoutes')
const cookieParser = require('cookie-parser');



app.use(express.json({ limit: '50mb' })); 
app.use(cookieParser())


app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
  }));
  
app.use('/api/auth',AuthRoutes)
app.use('/api/recruiter',recruiterRoutes)
app.use('/api/job',Jobposting)
app.use('/api/applications', applicationRoutes);










app.listen(PORT,()=>{
 console.log(`The port is running at port ${PORT}`)
 ConnectDB()
})