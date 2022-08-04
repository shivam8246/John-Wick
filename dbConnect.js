const mongoose = require("mongoose")
const URL = "mongodb+srv://shivamsharma:Sukhoi%4030@cluster0.ubzpp.mongodb.net/buildResume"
mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
const connection = mongoose.connection
connection.on("connected", () => {
    console.log("Mongo DB connection sucessfull")
})
connection.on("error", (error)=>{
console.log(error)
})
