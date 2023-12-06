
import React, { useState } from 'react';
import { deleteViaAxios, getViaAxios } from '../Services/api';

function Delete() {
 const [view,setView]=useState({
  id:"",
 });

 const onChange=(e)=>{
setView({id:e.target.value});

 }
 const onClick=async()=>{
  const res=await getViaAxios();
  let rep=res.data.filter((itm)=>itm.productId===view.id);
  alert(JSON.stringify(rep));
  deleteViaAxios(rep[0]._id)
 }


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