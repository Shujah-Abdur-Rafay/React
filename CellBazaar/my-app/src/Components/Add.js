import React, { useState } from 'react';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    variant: '',
    color: '',
    price: '',
    description: '',
  });

  const mainTextCenter = {
    textAlign: 'center',
  };

  const formContainer = {
    backgroundColor: '#ffeecc',
    padding: '20px',
    borderRadius: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const inputStyle = {
    height: '30px',
  };

  const getRandomMobileInfo = () => {
    // You can implement logic to fetch random mobile data here
    // For simplicity, let's generate random values for now
    setFormData({
      name: 'Random Phone',
      variant: 'Variant A',
      color: 'Black',
      price: '$999',
      description: 'Lorem ipsum description',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  };

  return (
    <div style={formContainer}>
      <h2 style={mainTextCenter}>Entry Details</h2>
      <form onSubmit={handleFormSubmit}> {/* Add onSubmit handler to prevent form submission */}
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Phone Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            style={inputStyle}
            value={formData.name}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="variant" className="form-label">
            Variant:
          </label>
          <input
            type="text"
            className="form-control"
            id="variant"
            name="variant"
            style={inputStyle}
            value={formData.variant}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="color" className="form-label">
            Color:
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            style={inputStyle}
            value={formData.color}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            style={inputStyle}
            value={formData.price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            style={inputStyle}
            value={formData.description}
          />
        </div>

        <div className="col text-center">
          <button
            style={{
              backgroundColor: '#FFA500',
              color: 'white',
              borderRadius: '20px',
              fontSize: '18px',
              padding: '8px 30px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={getRandomMobileInfo}
          >
            Confirm Entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
