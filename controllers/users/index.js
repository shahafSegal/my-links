const { UsersModel } = require("../../models/users.model");
const { encryptWithNewSalt } = require("./encryption");

const changePassword=async (req,res)=>{
    const ID=req.params.id;
    try {
        const newPassword=req.body.password;
        const [salt,password]=encryptWithNewSalt(newPassword)
        console.log(password)
        const newUser= await UsersModel.findByIdAndUpdate(ID,{salt,password},{new:true})
        res.status(200).send(newUser)
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"error accured"})
    }
}


module.exports={changePassword}