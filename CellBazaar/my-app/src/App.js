import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menubar from './Components/Navbr';
import Carosal from './Components/Carosal';
// import Cardi from './Components/Cardi';
// import Cardii from './Components/Cardii';
import Ftr from './Components/Ftr';
import {Routes, Route} from "react-router-dom";
import Admin from './Components/Admin';
import Products from './Components/CardS';


function App() {
  return (
    <>
  <div>

  <Routes>
    <Route path="/Admin" element={<Admin/>}/>
  </Routes> 

  </div>



  <div ><Menubar /></div>  
  <div ><Carosal/></div>



  <div className="container" style={{ marginTop: '750px' }}>
  <div className="text-center my-5">
    <h2 style={{ fontSize: '70px',color: 'darkgreen' }}>Buy Certified Phones </h2> 
  </div>
</div>




<div>  <Products/> </div>




<div style={{ margin: '20px 0', textAlign: 'center' }}>
  <button
    style={{
      padding: '20px 50px', 
      borderRadius: '50px', 
      fontSize: '35px', 
      backgroundColor: 'orange', 
      color: 'white', 
    }}
  >
    VIEW MORE COLLECTION
    
  </button>
</div>




<div>
  <Ftr/>
</div>
    </>
  );
}

export default App;
