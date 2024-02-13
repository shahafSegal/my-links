const {Router}=require('express')
const router=Router()
const {LinkModel}=require("../models/links.models")

const USERID='1'

router.get('/',async (req,res)=>{
    try {
        const data= await LinkModel.find({})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
    
})
router.post('/',async (req,res)=>{
    const body=req.body;
    try {
        const newData = new LinkModel({...body,userID:USERID});
        await newData.save();
        res.send({message:"posted succesfully"});
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
})
router.delete('/:id',async (req,res)=>{
    const eveID=req.params.id;
    try{
        const deletMes= await LinkModel.findByIdAndDelete(eveID)
        res.send({message:deletMes?'deleted succesfully':'not found'})
    }catch(err){
        console.log(err)
        res.status(400).send("error accured")
    }
})

router.patch('/:id',(req,res)=>{
    const eveID=req.params.id;
    const body=req.body;
    res.send({message:isChanged?'patched succesfully':'not found'})
})

module.exports=router;