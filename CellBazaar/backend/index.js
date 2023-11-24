import mongoose from "mongoose";
{
const url ="mongodb+srv://Shujah:shujah239@cluster0.qs1ln9x.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then(() => console.log("connected to db"))
.catch(() => console.log("NOT connected")) ;

}


























// import http from  'http';

// const server = http.createServer((req , res) => {

//     if(req.url === "/"){
//         res.write('Home Page');
//         res.end();
//     }

//     if(req.url === "/products"){
//         res.write('going to products page');
//         res.end();
//     }

//     if(req.url === "/services"){
//         res.write('going to services page');
//         res.end();
//     }

// });

// server.listen (5000);