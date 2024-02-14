const {Router}=require('express')
const router=Router()
const {LinkModel}=require("../models/links.models")
const {postCont, getCont, deletCont } = require('../controllers/links.controller')

const USERID='1'

router.get('/',getCont)
router.post('/',postCont)
router.delete('/:id',deletCont)

router.patch('/:id',(req,res)=>{
    const eveID=req.params.id;
    const body=req.body;
    res.send({message:isChanged?'patched succesfully':'not found'})
})

module.exports=router;