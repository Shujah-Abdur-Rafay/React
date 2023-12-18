import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [view, setView] = useState({
    id: "",
  });

  const onChange = (e) => {
    setView({ id: e.target.value });
  };

  const onClick = async () => {
    try {
      // Set up Axios configuration
      axios.defaults.withCredentials = true;

      // Use Axios post instead of get, and send data in the request body
      const res = await axios.post('https://deploy-mern-api.vercel.app/register', {
        name: view.name,
        email: view.email,
        password: view.password
      });

      // Log the result
      console.log(res);

      // Rest of the code remains the same
      const rep = res.data.filter((itm) => itm.productId === view.id);

      if (rep.length === 0) {
        alert("Product not found for the given ID");
      } else {
        alert("DELETED");
        await axios.delete(`https://cellbazaar-api.vercel.app/api/products/${rep[0]._id}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };

  return (
    <div
      style={{
        marginLeft: '100px',
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
      <button
        onClick={onClick}
        style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', fontSize: '16px' }}
      >
        Confirm Delete
      </button>
    </div>
  );
}

export default Delete;
