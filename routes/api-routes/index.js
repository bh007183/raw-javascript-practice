const router = require("express").Router()
const db = require("../../models")
const {sign, headerCheck, verify} = require("../../auth")


router.route("/createAccount")
.post(async (req, res) => {
    try{
        let {username, id} = await db.User.create(req.body)
        let signed = sign({username, id})
        res.status(200).json(signed)
    }catch(err){
        
        res.status(404)
    }
})
router.route("/test")
.get(async(req, res) => {

    let token = await headerCheck(req)
    if(!token){
        res.redirect("/error")
    }else{
    let valid = await verify(token)
    if(!valid){
        console.log("not valid")
        res.status(404).send("Session Expired, Please Login")
    }else{
        res.status(404)
    }

    }
    
    
})

module.exports = router