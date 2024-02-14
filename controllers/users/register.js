const { UsersModel } = require("../../models/users.model");
const { encryptWithNewSalt } = require("./encryption");

const registerUser= async(req,res)=>{
    const body=req.body;
    try{
        const knownUser=await UsersModel.findOne({email:body.email})
        if(knownUser)return res.send("email already in use")
        if (body.password.length<7)return res.send("invalid password")
        const {salt,password}=encryptWithNewSalt(body.password)
        const user=new UsersModel({...body,salt,password})
        await user.save();
        res.status(200).send(user)
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }

}

module.exports= {registerUser}