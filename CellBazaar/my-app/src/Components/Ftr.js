import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Ftr() {
  const linkStyle = {
    fontSize: '23px',
    color: 'black',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  return (
    <Card className="text-center" bg="warning">
      <Card.Header style={{ fontSize: '26px', fontWeight: 'bold' }}>CONTACT US !</Card.Header>
      <Card.Body>
        <Card.Text style={{ fontSize: '20px' }}>
          Email: cellbazaar@gmail.com <br /> Contact: +92-317-5804969
        </Card.Text>
        <Card.Title style={{ fontSize: '23px' }}>THANKS FOR VISITING !</Card.Title>
        <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'black'}>
          <Card.Title style={linkStyle}>About Us</Card.Title>
        </Link>
        <Link to="/reviews" style={linkStyle} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'black'}>
          <Card.Title style={linkStyle}>Reviews</Card.Title>
        </Link>
        <Link to="/faqs" style={linkStyle} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'black'}>
          <Card.Title style={linkStyle}>FAQs</Card.Title>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted" style={{ fontSize: '18px' }}>
        Copyright © CellBazaar.pk
      </Card.Footer>
    </Card>
  );
}

export default Ftr;

