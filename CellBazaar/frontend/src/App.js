import React, { createContext } from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Add this line
import Admin from './Components/Admin';
import LandingPage from './Components/LandingPage';
import Product from './Components/CardS';
import Logins from './Components/Login';
import SignUp from './Components/Signup';
import AboutUs from './Components/AboutUs';
import Reviews from './Components/Reviews';
import FAQs from './Components/FAQs';

axios.defaults.withCredentials = true;

export const type = createContext();

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Admin" element={<Admin type="none" />} />
          <Route path="" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Login" element={<Logins />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add" element={<type.Provider value={'add'}><Admin /></type.Provider>} />
          <Route path="/delete" element={<type.Provider value={'delete'}><Admin /></type.Provider>} />
          <Route path="/update" element={<type.Provider value={'update'}><Admin /></type.Provider>} />
          <Route path="/view" element={<type.Provider value={'view'}><Admin /></type.Provider>} />
          <Route path="/Product" element={<Product />} />
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

