import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import productModel from "./models/productmodel.js";


const app = express();

const url="mongodb+srv://shujah:sar123@cluster0.edpwzne.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
  console.log("connected to mongodb ");
}).catch(()=>{
  console.log("kuch ghalt hogya hai");
});


app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.post("/cellBazaar",async (req , res)=>{
  
const post=new productModel({
  productId: req.body.id,
  name:req.body.name,
  image:req.body.image,
  price:req.body.price,
  description:req.body.description,
  lastUpdated:Date(),
});
console.log("Data Entered");
await post.save();
});

app.get("/cellBazaar",async (req , res)=>{
  
const phones=await productModel.find();
res.json(phones);
console.log(phones);
  });

  app.post("/cellBazaardel/:id",async (req , res)=>{
  
    const id=req.params.id.slice(1);
    await productModel.findByIdAndDelete(id);
      });
