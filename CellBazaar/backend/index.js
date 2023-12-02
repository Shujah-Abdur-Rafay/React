import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";


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

app.use("/",(req , res)=>{
  console.log("apka msg backend py ping kr gya hai");
});
