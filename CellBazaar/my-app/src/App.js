import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Routes, Route} from "react-router-dom";
import Admin from './Components/Admin';
import {createContext} from "react";
import LandingPage from './Components/LandingPage';
import Product from './Components/CardS';


export const type=createContext();
function App() {
  return (
    <>
  <div>

   
    <Routes>
      
<Route path="/Admin" element={<Admin type="none"/>}/>
<Route path="" element={<LandingPage />}/>
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
