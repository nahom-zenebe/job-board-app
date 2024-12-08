const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT||5000
const {ConnectDB}=require('../libs/Mongodb')
const AuthRoutes=require('../Routers/AuthRoutes')
const CookiePareser=require('cookie-parser')





app.use(express.json())
app.use(cors())
app.use('/api/auth',AuthRoutes)
app.use(CookiePareser())








app.listen(PORT,()=>{
 console.log(`The port is running at port ${PORT}`)
 ConnectDB()
})