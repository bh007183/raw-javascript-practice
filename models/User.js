const bcrypt = require("bcrypt")
const salt = 10
module.exports = function(sequelize, DataTypes){
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            set: function(value){
                const hash = bcrypt.hashSync(value, salt)
                this.setDataValue("password", hash)
            }
        }
    })
    User.associate = function(models){
        User.hasMany(models.Image)
    }
    User.prototype.checkPassord = async function(password){
        return await bcrypt.compare(password, this.getDataValue('password'))
    }
    return User

}

