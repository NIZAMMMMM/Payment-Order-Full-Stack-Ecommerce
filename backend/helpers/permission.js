const userModel = require("../models/userModel")

const uploadProductPermission = async(userID) => {
    const user = await userModel.findById(userID)
console.log(user)
    if(user.role === "ADMIN"){
        return false
    }

    return false

}


module.exports = uploadProductPermission