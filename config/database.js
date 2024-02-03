const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Databse connected")})
    .catch((error)=>{
        console.log("database facing connection")
        console.log(error)
        process.exit(1);
    })
}
module.exports = dbConnect;