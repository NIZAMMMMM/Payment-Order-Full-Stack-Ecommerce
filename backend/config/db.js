const mongoose = require("mongoose")


 async function connectDB() {
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log(" connect to MongoDB")
        console.log("DB connection established");
        
    }catch(err){
        console.log(err)
    }
}
 module.exports = connectDB