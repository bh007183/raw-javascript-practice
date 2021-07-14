const router = require("express").Router()
const db = require("../../models")

router.route("/createAccount")
.post(async (req, res) => {
    console.log(req.body)
    try{
        let data = await db.User.create(req.body)
        res.status(200).json(data)

    }catch(err){
        console.log(err)
        res.status(404)
    }
    
    
    
})
.get((req, res) => {
    res.send("hey!!!!")
})

module.exports = router