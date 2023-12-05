import mongoose from "mongoose";

const productSchema = new mongoose.Schema({



  productId: String,
  image: String,
  price: String,
  name: String,
  description: String,
  lastUpdated: String,

  
});

const productModel = mongoose.model("phone", productSchema);

export default productModel;

