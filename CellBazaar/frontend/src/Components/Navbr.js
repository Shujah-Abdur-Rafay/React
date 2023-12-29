import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

function Navbr() {
  const logoStyle = {
    borderRadius: '50%',
    padding: '5px', // Add padding of 10px on each side
  };

  const navbarStyle = {
    paddingTop: '0px', // Increase or decrease this value to adjust the top padding
    paddingBottom: '0px', // Increase or decrease this value to adjust the bottom padding
    fontSize: '26px', // Adjust font size as needed
    lineHeight: '1', // Adjust line height as needed
    height: '80px', // Increased height
    backgroundColor: '#FFD700', // Adjust background color as needed
  };

  const brname = {
    fontSize: '40px',
    fontWeight: 'bold', // Make the text bold
    color: '#000', // Adjust text color as needed
    textDecoration: 'none',
    marginLeft: '15px', // Adjust margin as needed
  };

  const linkStyle = {
    fontSize: '20px', // Increase font size
    fontWeight: 'bold', // Make the text bold
    color: '#000', // Adjust text color as needed
    textDecoration: 'none',
    marginRight: '15px', // Adjust margin as needed
  };

  const adminIconStyle = {
    fontSize: '24px', // Adjust icon size as needed
    color: '#000', // Adjust icon color as needed
    marginLeft: '15px', // Adjust margin as needed
  };

  return (
    <Navbar expand="lg" className="fixed-top" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={brname}>
          <img
            src="/images/logo.png"
            alt="CellBazaar Logo"
            height="65" // Adjust the height to make it smaller
            style={logoStyle}
          />
          CellBazaar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Login" style={linkStyle}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs" style={linkStyle}>
              FAQs
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews" style={linkStyle}>
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About Us
            </Nav.Link>
            <Nav.Link href="https://www.google.com/maps/place/Jadoon+Plaza+Phase+2/@34.1897549,73.2354551,20.68z/data=!4m6!3m5!1s0x38de3050d3f2d077:0xc60029e9e1da82aa!8m2!3d34.1895787!4d73.2355318!16s%2Fg%2F11d_7ysgcr?entry=ttu" style={linkStyle}>
              Location
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
              style={{
                height: '40px', // Adjust the height to your preference
                fontSize: '16px', // Adjust the font size to your preference
              }}
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link as={Link} to="/admin" style={adminIconStyle}>
              <FaUserShield />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;
