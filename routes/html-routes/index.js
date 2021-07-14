const router = require("express").Router()
const path = require("path")


router.get("/userpage", (req, res) => {
    console.log(path)
    console.log(__dirname)
    res.sendFile(__dirname + "/public/user.html", (err)=> {
        if(err)console.log(err)
    })
})


module.exports = router

