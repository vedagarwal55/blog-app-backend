const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
//middileware 
app.use(express.json());
//routes import 
const blogApp = require("./routes/blog");
//mount
app.use('/api/v1', blogApp);
//connect with Databse
const dbConnect=require("./config/database");
dbConnect();
app.listen(port,()=>{
    console.log("Server started successfully");
})
app.get("/",(req,res)=>{
    res.send(`<h1>This is my first homepage</h1>`)
})
