const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://bibin:bibin@cluster0.tavpr.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>(console.log("connected to db"))).catch((err)=>(console.log(err)))