const mongoose =require("mongoose");

const productSchema = mongoose.Schema({
    productName:String,
    productCat:String,
    productPrize:Number,
    productQuantity:Number,
});
const productModel= mongoose.model("product",productSchema);
module.exports=productModel;