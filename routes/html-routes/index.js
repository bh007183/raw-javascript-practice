const router = require("express").Router()
const path = require("path")
const {verify, headerCheck} = require("../../auth")

router.get("/",  (req, res) => {
    
    res.sendFile(path.join(__dirname, "../../public/index.html"))

})

router.get("/userdata", async (req, res) => {
    let token = await headerCheck(req)
    if(!token){
        console.log("no token")
        res.status(404).send("Unauthorized Request")
    }
    let valid = await verify(token)
    if(!valid){
        console.log("not valid")
        res.status(404).send("Session Expired, Please Login")
    }
   
    res.sendFile(path.join(__dirname, "../../public/user.html"))

})




module.exports = router

