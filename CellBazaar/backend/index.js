import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import productModel from "./models/productmodel.js";
// import SignUpModel from "./sign.js";
import { GoogleOAuthProvider } from '@react-oauth/google';





const app = express();

 app.use(cors({
   origin: ["https://cellbazaar-user.vercel.app"],
   methods: ["POST", "GET","PUT","DELETE"],
 }));

// app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(express.json());



const url="mongodb+srv://shujah:sar123@cluster0.edpwzne.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
  console.log("connected to mongodb ");
}).catch((e)=>{
  console.log(e);
});

app.listen(5000);

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.post("/cellBazaar", async (req, res) => {
  try {
    const post = new productModel({
      productId: req.body.id,
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      lastUpdated: Date(),
    });

    console.log("Data Entered");
    await post.save();
    
    res.status(200).json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/cellBazaar",async (req , res)=>{
const phones=await productModel.find();
res.json(phones);

  });
app.get("/",async (req , res)=>{
  
  });

app.post("/cellBazaardel/:id",async (req , res)=>{
  
         const id=req.params.id.slice(1);
         await productModel.findByIdAndDelete(id);
           });


      app.post("/cellBazaarsignup", async (req, res) => {
        try {
          const post = new SignUpModel({
            username: req.body.username,
            password: req.body.password,
            phoneNo: req.body.phoneNo,
          });
      
          await post.save();
          res.json(post);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      });



      app.put("/cellBazaar/update/:id", async (req, res) => {
        const productId = req.params.id;
      
        try {
          const updatedProduct = await productModel.findByIdAndUpdate(
            productId,
            { $set: req.body }, // Update with the data sent in the request body
            { new: true, useFindAndModify: false }
          );
      
          if (updatedProduct) {
            console.log('Product updated successfully:', updatedProduct);
            res.json(updatedProduct);
          } else {
            console.log('Product not found');
            res.status(404).json({ message: 'Product not found' });
          }
        } catch (error) {
          console.error('Error updating product:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      });
      
// ...




// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import express from "express";
// import productModel from "./models/productmodel.js";
// import SignUpModel from "./models/signupmodel.js";

// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// app.use(express.json());

// const url = "mongodb+srv://shujah:sar123@cluster0.edpwzne.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(url).then(() => {
//   console.log("connected to mongodb ");
// }).catch(() => {
//   console.log("kuch ghalt hogya hai");
// });

// app.listen(5000);

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/cellBazaar", async (req, res) => {
//   const post = new productModel({
//     productId: req.body.id,
//     name: req.body.name,
//     image: req.body.image,
//     price: req.body.price,
//     description: req.body.description,
//     lastUpdated: Date(),
//   });

//   console.log("Data Entered");
//   await post.save();
// });

// app.get("/cellBazaar", async (req, res) => {
//   const phones = await productModel.find();
//   res.json(phones);
//   console.log(phones);
// });

// app.post("/cellBazaardel/:id", async (req, res) => {
//   const id = req.params.id.slice(1);
//   await productModel.findByIdAndDelete(id);
// });

// app.post("/cellBazaarsignup", async (req, res) => {
//   try {
//     const post = new SignUpModel({
//       username: req.body.username,
//       password: req.body.password,
//       phoneNo: req.body.phoneNo,
//     });

//     await post.save();
//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// app.put("/cellBazaar/update/:id", async (req, res) => {
//   const productId = req.params.id;

//   try {
//     const updatedProduct = await productModel.findByIdAndUpdate(
//       productId,
//       { $set: req.body },
//       { new: true, useFindAndModify: false }
//     );

//     if (updatedProduct) {
//       console.log('Product updated successfully:', updatedProduct);
//       res.json(updatedProduct);
//     } else {
//       console.log('Product not found');
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

