import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
import Admin from './Components/Admin';
import { createContext } from 'react';
import LandingPage from './Components/LandingPage';
import Product from './Components/CardS';
import Logins from './Components/Login';
import SignUp from './Components/Signup';
import AboutUs from './Components/AboutUs';
import Reviews from './Components/Reviews';
import FAQs from './Components/FAQs';



 export const type=createContext();


 function App() {
   return (

     <>


     
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
   />

   <div>

  


     <Routes>
      

 <Route path="/Admin" element={<Admin type="none"/>}/>
 <Route path="" element={<LandingPage />}/>
 <Route path="/about" element={<AboutUs />}/>
 <Route path="/Reviews" element={<Reviews />}/>
 <Route path="/Login" element={<Logins />}/>
 <Route path="/FAQs" element={<FAQs />}/>
 <Route path="/signup" element={<SignUp />}/>
 <Route path="/add" element={<type.Provider value={"add"}><Admin/></type.Provider>}/>
 <Route path="/delete" element={<type.Provider value={"delete"}><Admin/></type.Provider>}/>
 <Route path="/update" element={<type.Provider value={"update"}><Admin/></type.Provider>}/>
 <Route path="/view" element={<type.Provider value={"view"}><Admin/></type.Provider>}/>
 <Route path="/Product" element={<Product/>}/>

     </Routes> 

     
     
 </div>
     </>



   );
 }

 export default App;




// import React from 'react'
// import {Routes, Route} from "react-router-dom";
// import Test from "./Test";

// export default function App() {
//   return (
//     <div>
//       <Test/>
//     </div>
//   )
// }

