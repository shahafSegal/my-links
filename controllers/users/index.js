const { UsersModel } = require("../../models/users.model");
const { encryptWithNewSalt } = require("./encryption");

const changePassword=async (req,res)=>{
    const ID=req.params.id;
    try {
        const{password}=req.body;
        const {salt,newPassword}=encryptWithNewSalt(password)
        const newUser= await UsersModel.findByIdAndUpdate(ID,{salt,password:newPassword},{new:true})
        res.status(200).send(newUser)
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"error accured"})
    }
}


module.exports={changePassword}