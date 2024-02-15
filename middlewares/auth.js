const { verifyToken } = require("../utils/jwt");

const auth=(req,res,next)=>{
    const UsrToken=req.headers["authorization"];
    if(!UsrToken)return res.status(401).send("unauthorized")
    const token=UsrToken.split(" ")[1]
    const payload=verifyToken(token)
    if(!payload)return res.status(401).send("unauthorized")
    next()   
}

module.exports={auth}