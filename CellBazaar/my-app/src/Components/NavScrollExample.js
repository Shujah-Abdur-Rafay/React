import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menubar() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#">CellBazaar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Sell</Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Samsung</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Apple</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Oppo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Vivo </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.google.com/maps/place/Jadoon+Plaza+Phase+2/@34.1897549,73.2354551,20.68z/data=!4m6!3m5!1s0x38de3050d3f2d077:0xc60029e9e1da82aa!8m2!3d34.1895787!4d73.2355318!16s%2Fg%2F11d_7ysgcr?entry=ttu" >
              Location
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;