import React from 'react';

function SidebarMenu() {
  const cardStyle = {
    backgroundColor: '#ffeecc', // Set a very light orange background color
  };

  return (
    <div className="card mt-5" style={{ width: "18rem", ...cardStyle }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">
          <button className="btn btn-warning">Enter New Mobile</button>
        </li>
        <li className="list-group-item text-center">
          <button className="btn btn-warning">Update Registries</button>
        </li>
        <li className="list-group-item text-center">
          <button className="btn btn-warning">Delete Sold Entity</button>
        </li>
        <li className="list-group-item text-center">
          <button className="btn btn-warning">View Data</button>
        </li>
        <li className="list-group-item text-center">
          <button className="btn btn-warning">Track Record</button>
        </li>
        <li className="list-group-item text-center">
          <button className="btn btn-warning">View Sold Record</button>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
