import React from 'react'
import Menubar from './Navbr'
import Carosal from './Carosal'
import Ftr from './Ftr'
import Products from './CardS'
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      



<div ><Menubar /></div>  
<div ><Carosal/></div>



<div className="container" style={{ marginTop: '400px' }}>
  <div className="text-center my-5">
    <h2 style={{ fontSize: '80px', color: 'darkgreen', fontFamily: 'Brush Script MT, cursive' }}>
      Buy Certified Phones
    </h2>
  </div>
</div>




<div>  <Products/> </div>




<div style={{ margin: '20px 0', textAlign: 'center' }}>
    <Link to="/Product">
      <button
        style={{
          padding: '10px 30px',
          borderRadius: '50px',
          fontSize: '25px',
          backgroundColor: 'orange',
          color: 'white',
        }}
      >
        VIEW MORE COLLECTION
      </button>
    </Link>
  </div>




<div>
<Ftr/>
    </div>
    </div>
  )
}
