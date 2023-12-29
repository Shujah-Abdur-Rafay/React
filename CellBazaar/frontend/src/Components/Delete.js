import React, { useState } from 'react';
import { deleteViaAxios, getViaAxios } from '../Services/api';
import Button from 'react-bootstrap/Button';

function Delete() {
  const [productId, setProductId] = useState('');

  const onChange = (e) => {
    setProductId(e.target.value);
  };

  const handleCancel = () => {
    setProductId('');
  };

  const handleDelete = async () => {
    try {
      const response = await getViaAxios();
      const productToDelete = response.data.find((item) => item.productId === productId);

      if (productToDelete) {
        await deleteViaAxios(productToDelete._id);
        alert('Product Deleted Successfully');
      } else {
        alert('Product not found for the given ID');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          background: '#f8f9fa',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          marginTop:'-120px',
        }}
      >
        <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>Confirm Deletion</h2>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>Enter Product ID:</p>
        <input
          type="text"
          onChange={onChange}
          value={productId}
          style={{ width: '100%', height: '40px', fontSize: '16px', marginBottom: '20px', padding: '8px' }}
        />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="secondary" style={{ fontSize: '16px', marginRight: '10px', padding: '10px 20px' }} onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="danger"
            style={{ fontSize: '16px', padding: '10px 20px' }}
            onClick={handleDelete}
          >
            Confirm Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
