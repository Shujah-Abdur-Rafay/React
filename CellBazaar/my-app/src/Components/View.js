import React from 'react';

function View() {


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
      <h2>View Record</h2>
      <p style={{ fontSize: '18px' }}>Enter Model Number:</p>
      <input
        type="text"
        style={{ width: '222px', height: '40px', fontSize: '16px' }} 

      />
      
      <br />
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>Cancel</button>
      <button
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '16px' }}
      >
        View Record
      </button>
    </div>


);

}
export default View;