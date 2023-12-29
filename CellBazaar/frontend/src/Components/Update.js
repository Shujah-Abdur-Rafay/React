import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [modelNumber, setModelNumber] = useState('');
  const [productInfo, setProductInfo] = useState(null);

  const handleModelNumberChange = (e) => {
    setModelNumber(e.target.value);
  };

  const handleFetchProductInfo = async () => {
    try {
      // Fetch product information based on the entered model number
      const response = await axios.get(`http://localhost:5000/cellBazaar/${modelNumber}`);
      
      console.log('Response from server:', response);

      // Check if the response contains data
      if (response.data && response.data.length > 0) {
        // Set the product information in the state
        setProductInfo(response.data[0]); // Assuming the response is an array with one item
      } else {
        // Product not found
        setProductInfo(null);
        console.log('Product not found.');
      }
    } catch (error) {
      console.error('Error fetching product info:', error);
    }
  };

  const handleConfirmUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/cellBazaar/update/${modelNumber}`, {
        // Include the updated product details here
        // For example, if you want to update the name and price
        name: 'New Name',
        price: 'New Price',
        // Add other fields as needed
      });
  
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Error updating model:', error);
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
        background: '#f8f9fa',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
      }}
    >
      <h2 style={{ color: '#FFA500', marginBottom: '20px', fontSize: '24px' }}>Product Updation</h2>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>Enter Model Number:</p>
      <input
        type="text"
        value={modelNumber}
        onChange={handleModelNumberChange}
        style={{ width: '100%', height: '40px', fontSize: '16px', marginBottom: '20px', padding: '8px' }}
      />
      <br />
      <button style={{ background: '#007BFF', color: 'white', padding: '10px 20px', fontSize: '16px', marginBottom: '20px' }} onClick={handleFetchProductInfo}>
        Fetch Product Info
      </button>
      <br />
      {productInfo && (
        <>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>Name: {productInfo.name}</p>
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>Price: {productInfo.price}</p>
          {/* Include other product details as needed */}
        </>
      )}
      <br />
      <button
        style={{
          backgroundColor: '#FFD700',
          color: 'black',
          padding: '10px 20px',
          fontSize: '16px',
        }}
        onClick={handleConfirmUpdate}
      >
        Confirm Update
      </button>
    </div>
  );
}

export default Update;
