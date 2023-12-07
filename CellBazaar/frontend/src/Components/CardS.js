import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { getViaAxios } from '../Services/api';

function Products() {
  const [groupedCells, setGroupedCells] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getViaAxios();
        setCells(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Group the cells
    const groupedCells = [];
    for (let i = 0; i < cells.length; i += 3) {
      groupedCells.push(cells.slice(i, i + 3));
    }

    setGroupedCells(groupedCells);

    // Update the counter every 5 seconds
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 5);
    }, 5000);

    return () => clearInterval(interval);
  }, [cells]); // Only re-run the effect if `cells` changes

  const cardTextStyle = {
    fontSize: '18px',
  };

  const cardTitleStyle = {
    fontSize: '20px',
  };

  const cardImageStyle = {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    width: '100%', // Set image width to 100% within the card
    height: '200px', // Adjust the height to your preferred size
    objectFit: 'cover', // Ensure the image covers the designated area
  };

  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    width: '250px', // Adjust the width of the cards
    height: '380px', // Set a fixed height for the cards
  };

  return (
    <div className="mx-5">
      {groupedCells.map((group, groupIndex) => (
        <CardGroup key={groupIndex} className="mb-5">
          {group.map((product, index) => (
            <Card
              key={index}
              className="mb-4 mx-4"
              style={cardStyle}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={cardImageStyle}
              />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{product.price}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  {product.name}
                  <br />
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted" style={{ fontSize: '12px' }}>
                  {product.lastUpdated}
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      ))}
    </div>
  );
}

export default Products;
