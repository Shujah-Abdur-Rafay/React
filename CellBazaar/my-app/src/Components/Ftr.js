
import Card from 'react-bootstrap/Card';

function Ftr() {
 return (
  <Card className="text-center" bg="warning">
    <Card.Header style={{ fontSize: '26px',fontWeight: 'bold' }}>CONTACT US !</Card.Header>
    <Card.Body>
      <Card.Text style={{ fontSize: '20px' }}>
        Email: cellbazaar@gmail.com <br /> Contact: +92-317-5804969
      </Card.Text>
      <Card.Title style={{ fontSize: '23px' }}>THANKS FOR VISITING !</Card.Title>
    </Card.Body>
    <Card.Footer className="text-muted" style={{ fontSize: '18px' }}>
      Copyright © CellBazaar.pk
    </Card.Footer>
  </Card>
);

}

export default Ftr;