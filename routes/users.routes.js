const express=require('express')
const router=express.Router();
const {UsersModel}=require('../models/users.model');
const { encryptWithNewSalt,saltEncrypt } = require('../controllers/users/encryption');
const { registerUser } = require('../controllers/users/register');
const { loginUser } = require('../controllers/users/login');
const { changePassword } = require('../controllers/users');


router.post("/register",registerUser)

router.post('/login',loginUser)

router.patch('/password/:id',changePassword)


router.delete('/:id',async (req,res)=>{
    const ID=req.params.id;
    try{
        const deletMes= await UsersModel.findByIdAndDelete(ID)
        res.send({message:deletMes?'deleted succesfully':'not found'})
    }catch(err){
        console.log(err)
        res.status(400).send("error accured")
    }
}
)


module.exports=router;