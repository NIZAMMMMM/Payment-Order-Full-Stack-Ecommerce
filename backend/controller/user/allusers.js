const userModel = require("../../models/userModel")

async function allusers(req,res){
    try{
        console.log("userid all Users",req.userId)

        const allusers = await userModel.find()

        res.json({
            message : "All User",
            success : true,
            error : false,
            data : allusers
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allusers