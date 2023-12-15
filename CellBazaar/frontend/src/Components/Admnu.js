import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Admnu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFD700',height:"36.4rem",marginTop:"50px",marginRight:"50px",marginLeft:"-11px" }} className="d-flex flex-column">
      <Container>
        {/* <Navbar.Brand href="/home" style={{ fontWeight: 'bold', fontSize: '24px', color: '#333333' }}>
          <span style={{ color: "#333333", fontWeight: "bold" }}>Admin</span>
          <span style={{ color: "#F47542", fontWeight: "bold" }}>Panel</span>
        </Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column">
            <Link to="../" className="my-4">
              {/* <button
                style={{
                  backgroundColor: '#FFA500',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '18px',
                  padding: '8px 30px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              <>
                HOME
              > */}
            </Link>

            <Link to="/add" className="my-4">
              <button
                style={{
                  marginLeft:'60px',
                  backgroundColor: '#FFA500',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '18px',
                  padding: '8px 30px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
            </Link>

            <Link to="/delete" className="my-4">
              <button
                style={{
                  marginLeft:'60px',
                  backgroundColor: '#FFA500',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '18px',
                  padding: '8px 30px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </Link>

            <Link to="/view" className="my-4">
              <button
                style={{
                  marginLeft:'60px',
                  backgroundColor: '#FFA500',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '18px',
                  padding: '8px 30px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                View
              </button>
            </Link>

            <Link to="/update" className="my-4">
              <button
                style={{
                  marginLeft:'60px',
                  backgroundColor: '#FFA500',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '18px',
                  padding: '8px 30px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Admnu;
