const {LinkModel}=require("../models/links.models")

const USERID='1'
const getCont= async(req,res)=>{
    try {
        const data= await LinkModel.find({})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
}

const postCont=async (req,res)=>{
    const body=req.body;
    try {
        const newData = new LinkModel({...body,userID:USERID});
        await newData.save();
        res.send(newData);
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}
const deletCont=async (req,res)=>{
    const eveID=req.params.id;
    try{
        const deletMes= await LinkModel.findByIdAndDelete(eveID)
        res.send({message:deletMes?'deleted succesfully':'not found'})
    }catch(err){
        console.log(err)
        res.status(400).send("error accured")
    }
}

module.exports={getCont,postCont,deletCont}