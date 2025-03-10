var express=require("express")

var app=express();

var PORT=8080 ;

app.use(express.json())
require('./db')
const productModel = require("./model/product");
app.post("/",(req,res)=>{
    try{
        productModel(req.body).save();
        res.send("data added succesfully !")
    }catch(error){
        res.send(error);


    }})
    app.get('/',async(req,res)=>{
    
        try {
          var data = await productModel.find();
         res.send(data);
     
         
        } catch (error) {
         
        }
    })
    app.delete('/remove/:id',async(req,res)=>{
        console.log(req.params);
        try{
        await productModel.findByIdAndDelete(req.params.id);
        res.send("deleted succesfully")
        }catch(error){
         res.send(error)
        }

    })

    app.put("/edit/:id",async(req,res)=>{
        try {
            var data= await productModel.findByIdAndUpdate(req.params.id,req.body);
            res.send({message:"updated succesfully",data});
        } catch (error) {
            res.send(error);
            
        }
    })

app.listen(PORT,(req,res)=>{
    console.log(`server is listening in port ${PORT}`);
});

