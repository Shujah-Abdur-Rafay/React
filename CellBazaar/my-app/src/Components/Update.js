import React from 'react';

function Update() {


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
      <h2> Updation Process </h2>
      <p style={{ fontSize: '18px' }}>Enter Model Number:</p>
      <input
        type="text"
        style={{ width: '248px', height: '40px', fontSize: '16px' }} 

      />
      
      <br />
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>Cancel</button>
      <button
        style={{ backgroundColor: 'Yellow', color: 'black', padding: '10px 20px', fontSize: '16px' }}
      >
         Confirm Update
      </button>
    </div>

    
);

}
export default Update;