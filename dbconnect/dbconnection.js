const mongoose = require("mongoose");


const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING,{
                userNewUrlPaser:true,
                useUnifiedTopolgy:true,
                useCreateIndex: true,
                serverSelectionTimeoutMS: 5000
            });
        console.log("database connected")

        
    } 
    catch  {
        console.log(Error.message)
        
    }

}

module.exports = connectdb;


