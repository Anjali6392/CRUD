const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/vishank")
.then(()=>{
    console.log("DataBase is Connected");
})
.catch((error)=>{
    console.log(error)
})