import React, { useState } from 'react';
import { sendMessageViaAxios } from '../Services/api';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    id:"",
    image: '',
    price: '',
    description: '',
  });

  const mainTextCenter = {
    textAlign: 'center',
  };
  const onChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
    
  }

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

  const getRandomMobileInfo =async () => {
    
    // setFormData({
    //   name: 'Random Phone',
    //   variant: 'Variant A',
    //   color: 'Black',
    //   price: '$999',
    //   description: 'Lorem ipsum description',
    // });
    
    await sendMessageViaAxios(formData);
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div style={formContainer}>
      <h2 style={mainTextCenter}>Entry Details</h2>
      <form onSubmit={handleFormSubmit}> 
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Phone Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            style={inputStyle}
            value={formData.name}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Phone id:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="id"
            onChange={onChange}
            style={inputStyle}
            value={formData.id}
          />
        </div>
      
        <div className="mb-1">
          <label htmlFor="color" className="form-label">
            Image:
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="image"
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
