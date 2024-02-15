const {Router}=require('express')
const router=Router()
const {LinkModel}=require("../models/links.models")
const {postCont, getCont, deletCont } = require('../controllers/links.controller')
const { auth } = require('../middlewares/auth')

const USERID='1'

router.get('/',getCont)
router.post('/',auth,postCont)
router.delete('/:id',auth,deletCont)

router.patch('/:id',(req,res)=>{
    const eveID=req.params.id;
    const body=req.body;
    res.send({message:isChanged?'patched succesfully':'not found'})
})

module.exports=router;