const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const db = require("./models")


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(require("./routes"))


db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, ()=> {
        console.log("http://localhost:8080")
    })

})

    


