const router = require("express").Router()
const db = require("../../models")
const {sign} = require("../../auth")

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
.get((req, res) => {
    res.send("hey!!!!")
})

module.exports = router