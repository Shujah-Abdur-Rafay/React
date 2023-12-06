
import React, { useState } from 'react';
import { deleteViaAxios, getViaAxios } from '../Services/api';

function Delete() {
 const [view,setView]=useState({
  id:"",
 });

 const onChange=(e)=>{
setView({id:e.target.value});

 }





 const onClick = async () => {
  try {
    const res = await getViaAxios();
    const rep = res.data.filter((itm) => itm.productId === view.id);

    if (rep.length === 0) {
      alert("Product not found for the given ID");
    } else {
      alert("DELETED");
      await deleteViaAxios(rep[0]._id);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    alert('Error deleting product. Please try again.');
  }
};



  return (
    <div
    style={{
      display: 'block',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '40px',
      borderRadius: '8px',
      textAlign: 'center',
    }}
  >
    <h2>Confirm Deletion</h2>
    <p style={{ fontSize: '18px' }}>Enter Model Number:</p>
    <input
      type="text"
      onChange={onChange}
      style={{ width: '243px', height: '40px', fontSize: '16px' }} 

    />
    
    <br />
    <button style={{ padding: '10px 20px', fontSize: '16px' }}>Cancel</button>
    <button onClick={onClick}
      style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '16px' }}
    >
      Confirm Delete
    </button>
  </div>

  
);
    }

    export default Delete;