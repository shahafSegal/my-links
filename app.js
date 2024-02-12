const express= require('express')
const mongoose=require("mongoose")
const mongoUrl="mongodb://localhost:27017/my-links"

mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log(error)
    })

const app=express()
app.use(express.json())

app.use('/api/v1/events',eventRouter)
app.use('/api/v1/users',userRouter)



module.exports={app};