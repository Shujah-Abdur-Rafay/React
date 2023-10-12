import React from 'react';

function HeaderAdmin() {
  const cardStyle = {
    border: 'none', // Remove the border
    backgroundColor: 'lightblue', // Set the background color to light blue
  };

  const titleStyle = {
    color: 'white', // Set the text color to white
    fontWeight: 'bold', // Make the text bold
  };

  return (
    <div className="card text-center" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Administrator</h5>
        <div className="text-center">
          <img
            src="admin.png"
            className="rounded"
            alt="..."
            style={{ width: '90px', height: '55px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
