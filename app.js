const express= require('express')
const mongoose=require("mongoose")
const mongoUrl="mongodb://localhost:27017/my-links"
const linkRouter=require('./routes/links.routes')
const userRouter=require('./routes/users.routes')
const cors=require('cors')

mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log(error)
    })

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/links',linkRouter)
app.use('/api/v1/users',userRouter)


module.exports={app};