import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Admnu() {
  return (

    <Navbar expand="lg">
      <Container>

  <Navbar.Brand href="/home" style={{ fontWeight: 'bold', fontSize: '24px' }}>
  ADMIN-PORTAL
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">





  <Nav.Link href="/add">
  <button
  style={{
    backgroundColor: '#FFA500', // Dark Orange color
    color: 'white', // Pure white text
    borderRadius: '20px', // Rounded edges
    fontSize: '18px', // Adjust the font size
    padding: '8px 30px', // Adjust the padding for button size
    border: 'none', // Remove border
    cursor: 'pointer', // Add pointer cursor on hover
  }}
>

  Add

</button>
 </Nav.Link>







 <Nav.Link href="/delete">
  <button
  style={{
    backgroundColor: '#FFA500', // Dark Orange color
    color: 'white', // Pure white text
    borderRadius: '20px', // Rounded edges
    fontSize: '18px', // Adjust the font size
    padding: '8px 30px', // Adjust the padding for button size
    border: 'none', // Remove border
    cursor: 'pointer', // Add pointer cursor on hover
  }}
>

Delete

</button>
 </Nav.Link>






 <Nav.Link href="/view">
  <button
  style={{
    backgroundColor: '#FFA500', // Dark Orange color
    color: 'white', // Pure white text
    borderRadius: '20px', // Rounded edges
    fontSize: '18px', // Adjust the font size
    padding: '8px 30px', // Adjust the padding for button size
    border: 'none', // Remove border
    cursor: 'pointer', // Add pointer cursor on hover
  }}
>

  View

</button>
 </Nav.Link>



 <Nav.Link href="/update">
  <button
  style={{
    backgroundColor: '#FFA500', // Dark Orange color
    color: 'white', // Pure white text
    borderRadius: '20px', // Rounded edges
    fontSize: '18px', // Adjust the font size
    padding: '8px 30px', // Adjust the padding for button size
    border: 'none', // Remove border
    cursor: 'pointer', // Add pointer cursor on hover
  }}
>

  Update

</button>
 </Nav.Link>




  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Admnu;