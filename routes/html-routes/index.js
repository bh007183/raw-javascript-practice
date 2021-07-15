const router = require("express").Router()
const path = require("path")
const {verify, headerCheck} = require("../../auth")

router.get("/",  (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
})

router.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/user.html"))
})
router.get("/error", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../../public/noAccess.html"))

})




module.exports = router

