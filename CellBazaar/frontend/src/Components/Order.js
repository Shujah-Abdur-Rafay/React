import React from 'react';

function Order() {
  const inputStyle = {
    fontWeight: 'bold', // Make the input text bold
  };

  const countries = ["Select Country", "USA", "Canada", "UK", "Australia", "Germany"];

  const formStyle = {
    backgroundColor: '#ffeecc', // Very light background color
    padding: '20px', // Add some padding for spacing
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
  };

  return (
    <div style={formStyle}>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="phoneModel" className="form-label">
            Phone Model:
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneModel"
            style={inputStyle}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">
            Payment Method:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            style={inputStyle}
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Varient:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            style={inputStyle}
          />
        </div>
        <div className="col-12">
          <label htmlFor="placeOfContact" className="form-label">
            Address of Delivery:
          </label>
          <input
            type="text"
            className="form-control"
            id="placeOfContact"
            style={inputStyle}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            style={inputStyle}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State:
          </label>
          <select id="inputState" className="form-select" style={inputStyle}>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
           Phone number:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            style={inputStyle}
          />
        </div>

        <div className="col-12" style={buttonContainerStyle}>
          <button type="submit" className="btn btn-warning">
            Order Now 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order;
