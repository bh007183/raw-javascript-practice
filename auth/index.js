const jwt = require("jsonwebtoken")

module.exports = {
    sign: function(data){
        return jwt.sign(data, "secret", {expiresIn: "1h"})
    },
    verify: function(token){
        let data = jwt.verify(token, "secret", function(err, {username, id}){
            if(err){
                return false
            }else{
                return {username, id}
            }
        })
        return data
    },
    // header === req.header
    headerCheck: function(req){
        let token = false
        if(!req.headers){
            token = false
        }else if(!req.headers.authorization){
            token = false
        }else{
            token = req.headers.authorization.split(" ")[1]
        }
        if(!token || token === "null"){

            console.log(false)
            return false
        }else{
            return token
        }

    }

}