import React from 'react';

function Add() {



    const mainTextCenter = {
      textAlign: 'center',
    };
  
    const formContainer = {
      backgroundColor: '#ffeecc',
      padding: '20px',
      borderRadius: '10px',
    };
  
    const labelStyle = {
      fontWeight: 'bold', // Make the label text bold
      fontSize: '20px', // Adjust the font size to make it larger
    };
  
    const inputStyle = {
      height: '30px', // Adjust the height to make the textboxes smaller
    };
  
  
    return (
      <div style={formContainer}>
      <h2 style={mainTextCenter}>Entry Details</h2>
      <form>
        <div className="mb-1">
          <label htmlFor="name" className="form-label" >
            Phone Name:
          </label>
          <input type="text" className="form-control" id="name" name="name" style={inputStyle} />
        </div>
        <div className="mb-1">
          <label htmlFor="variant" className="form-label">
            Variant:
          </label>
          <input type="text" className="form-control" id="variant" name="variant" style={inputStyle} />
        </div>
        <div className="mb-1">
          <label htmlFor="color" className="form-label">
            Color:
          </label>
          <input type="text" className="form-control" id="color" name="color" style={inputStyle} />
        </div>
        <div className="mb-1">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input type="text" className="form-control" id="price" name="price" style={inputStyle} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea className="form-control" id="description" name="description" style={inputStyle} />
        </div>



   <div className="col text-center">
   <button
  style={{
    backgroundColor: '#FFA500', // Dark Orange color
    color: 'white', // Pure white text
    borderRadius: '20px', // Rounded edges
    fontSize: '18px', // Adjust the font size
    padding: '8px 30px', // Adjust the padding for button size
    border: 'none', // Remove border
    cursor: 'pointer', // Add pointer cursor on hover
  }}>
Confirm  Entery 
</button>
</div>
        

      </form>
    </div>
);

}
export default Add;