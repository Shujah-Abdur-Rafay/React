import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaHome, FaPlus, FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';
import { useState } from 'react';
const Admnu = (props) => {
  
  const handleLogout = () => {
    props.setAuthenticated(false);
  };

  return (
    <Navbar expand="lg" style={{ marginLeft: '-12px', backgroundColor: '#000', width: '220px', height: '100vh', position: 'fixed', borderRight: '1px solid #dee2e6' }}>
      <Container className="d-flex flex-column justify-content-cente r">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column my-5">
         
            <Link to="/" className="nav-link text-white text-center mt-2">
              <FaHome className="me-3" />
              <span className="fs-4 text-center">Home</span>
            </Link>

            <Link to="/add" className="nav-link text-white text-center mt-2">
              <FaPlus className="me-3" />
              <span className="fs-4 text-center">Add</span>
            </Link>

            <Link to="/delete" className="nav-link text-white text-center mt-2">
              <FaTrashAlt className="me-3" />
              <span className="fs-4 text-center">Delete</span>
            </Link>

            <Link to="/view" className="nav-link text-white text-center mt-2">
              <FaEye className="me-3" />
              <span className="fs-4 text-center">View</span>
            </Link>

            <Link to="/update" className="nav-link text-white text-center mt-2">
              <FaEdit className="me-3" />
              <span className="fs-4 text-center">Update</span>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
        <button type="button" className="btn btn-danger my-3" onClick={handleLogout}>
              Logout
            </button>
      </Container>
    </Navbar>
  );
};

export default Admnu;
