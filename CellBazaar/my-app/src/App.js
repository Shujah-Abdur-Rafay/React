import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menubar from './Components/NavScrollExample';
import Carosal from './Components/Carosal';
import Cardi from './Components/Cardi';
import Cardii from './Components/Cardii';



function App() {
  return (
    <>
   
  <div ><Menubar /></div>  
  <div ><Carosal/></div>

  <div style={{ color: 'black', marginTop: '100px', marginBottom: '-280px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <h1>Buy Certified Phones</h1>
</div>


<div>  <Cardi/> </div>
<div> 
   <Cardii/> 
   
   <button style={{ backgroundColor: 'orange', color: 'white', fontSize: '1.5rem', padding: '8px 50px', border: 'none', borderRadius: '5px', marginTop: '20px',marginLeft:'575px' }}>View More</button>
</div>

    </>
  );
}

export default App;
