import mongoose from "mongoose";

const productSchema = new mongoose.Schema({



  productId: Number,
  image: String,
  price: Number,
  name: String,
  description: String,
  lastUpdated: String,


  
});

const productModel = mongoose.model("phone", productSchema);

export default productModel;

