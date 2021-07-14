module.exports = function(sequelize, DataTypes){
    const Image = sequelize.define("Image", {
        url:{
            type:DataTypes.STRING,
        } ,
        title:{
            type: DataTypes.STRING,
        } ,
        description:{
            type: DataTypes.STRING
        } 
    })
    Image.associate = function(models){
        Image.belongsTo(models.User)
    }
    return Image
}

