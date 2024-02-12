const {app}=require('./app')

const PORT=process.env.PORT||5334

app.listen(PORT,()=>{
    console.log(`server running: PORT ${PORT}`)
    }
)