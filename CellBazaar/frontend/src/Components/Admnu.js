import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaHome, FaPlus, FaTrashAlt, FaEye, FaEdit } from 'react-icons/fa';

const Admnu = () => {
  return (
    <Navbar expand="lg" style={{ marginLeft: '-12px', backgroundColor: '#000', width: '220px', height: '100vh', position: 'fixed', borderRight: '1px solid #dee2e6' }}>
      <Container className="d-flex flex-column justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Link to="/" className="nav-link text-white text-center mb-2">
              <FaHome className="me-3" />
              <span className="fs-4 text-center">Home</span>
            </Link>

            <Link to="/add" className="nav-link text-white text-center mb-2">
              <FaPlus className="me-3" />
              <span className="fs-4 text-center">Add</span>
            </Link>

            <Link to="/delete" className="nav-link text-white text-center mb-2">
              <FaTrashAlt className="me-3" />
              <span className="fs-4 text-center">Delete</span>
            </Link>

            <Link to="/view" className="nav-link text-white text-center mb-2">
              <FaEye className="me-3" />
              <span className="fs-4 text-center">View</span>
            </Link>

            <Link to="/update" className="nav-link text-white text-center mb-2">
              <FaEdit className="me-3" />
              <span className="fs-4 text-center">Update</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Admnu;
