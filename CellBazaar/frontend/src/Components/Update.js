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
        marginLeft:'100px',
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
      <h2>Updation Process</h2>
      <p style={{ fontSize: '18px' }}>Enter Model Number:</p>
      <input
        type="text"
        value={modelNumber}
        onChange={handleModelNumberChange}
        style={{ width: '248px', height: '40px', fontSize: '16px' }}
      />
      <br />
      <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleFetchProductInfo}>
        Fetch Product Info
      </button>
      <br />
      {productInfo && (
        <>
          <p>Name: {productInfo.name}</p>
          <p>Price: {productInfo.price}</p>
          {/* Include other product details as needed */}
        </>
      )}
      <br />
      <button style={{ backgroundColor: 'Yellow', color: 'black', padding: '10px 20px', fontSize: '16px' }} onClick={handleConfirmUpdate}>
        Confirm Update
      </button>
    </div>
  );
}

export default Update;
