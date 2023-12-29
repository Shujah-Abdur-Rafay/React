import React, { useState, useContext } from "react";
import Admnu from "./Admnu";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import View from "./View";
import { type } from "../App";
import Menubar from "./Navbr";

function Admin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [authenticated, setAuthenticated] = useState(false);
  const adminType = useContext(type);

  const handleLogin = () => {
    // Check if the entered credentials are correct
    if (credentials.username === "admin" && credentials.password === "sar123") {
      setAuthenticated(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  const getViewComponent = () => {
    switch (adminType) {
      case "add":
        return <Add />;
      case "view":
        return <View />;
      case "update":
        return <Update />;
      case "delete":
        return <Delete />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <Menubar />
      {!authenticated ? (
        // Show login form if not authenticated
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <h2>.</h2>
            {/* Login to Admin Panel */}
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        // Show admin panel if authenticated
        <div className="row">
          <div className="col-md-3 d-flex flex-column">
            <Admnu />
          </div>
          <div className="col-md-9" style={{ marginTop: '6em', marginLeft: '-2rem' }}>
            {getViewComponent()}
            <button type="button" className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
  