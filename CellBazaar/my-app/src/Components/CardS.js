import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'; 

function Products() {
  const cells = [
    {
      "image": "/images/ad1.jpg",
      "price": "RS. 10,000",
      "name": "Iphone 6s",
      "description": "Official PTA Approved / Silver",
      "lastUpdated": "Last updated 3 mins ago"
    },
    {
      "image": "/images/ad2.jpg",
      "price": "RS. 60,000",
      "name": "Iphone 8-plus",
      "description": "Official PTA Approved / Black",
      "lastUpdated": "Last updated 1 day ago"
    },
    {
      "image": "/images/ad3.jpg",
      "price": "RS. 35,000",
      "name": "Iphone 8-plus",
      "description": "Non-PTA / Red",
      "lastUpdated": "Last updated 4 hours ago"
    },
    {
      "image": "/images/ad4.jpg",
      "price": "RS. 40,000",
      "name": "Iphone XR",
      "description": "Non-PTA / Non-Active / Black",
      "lastUpdated": "Last updated 46 mins ago"
    },
    {
      "image": "/images/ad5.jpg",
      "price": "RS. 70,000",
      "name": "Iphone 11",
      "description": "JV / Black",
      "lastUpdated": "Last updated half an hour ago"
    },
    {
      "image": "/images/ad6.jpg",
      "price": "RS. 185,000",
      "name": "Iphone 13 pro max",
      "description": "Non-PTA  / White",
      "lastUpdated": "Last updated 4 days ago"
    },
    {
      "image": "/images/ad7.jpg",
      "price": "RS. 110,000",
      "name": "Iphone 11 pro max",
      "description": "Official PTA Approved / Grey",
      "lastUpdated": "Last updated 2 weeks ago"
    },
    {
      "image": "/images/ad8.jpg",
      "price": "RS. 135,000",
      "name": "Iphone 13 pro",
      "description": "Non-PTA / White",
      "lastUpdated": "Last updated 7 hours ago"
    },
    {
      "image": "/images/ad9.jpg",
      "price": "RS. 85,000",
      "name": "Iphone XS",
      "description": "Official PTA Approved / Black",
      "lastUpdated": "Last updated 46 mins ago"
    },
    {
      "image": "/images/ad10.jpg",
      "price": "RS. 42,000",
      "name": "Iphone X",
      "description": "JV / White",
      "lastUpdated": "Last updated half an hour ago"
    },
    {
      "image": "/images/ad11.jpg",
      "price": "RS. 110,000",
      "name": "Iphone 11",
      "description": "Official PTA Approved / White",
      "lastUpdated": "Last updated one day ago"
    },
    {
  
      "image": "/images/ad12.jpg",
      "price": "RS. 125,000",
      "name": "Iphone 11 pro max ",
      "description": "JV / Silverish Grey",
      "lastUpdated": "Last updated three hour ago"
    },
  ];

  const groupedCells = [];
  for (let i = 0; i < cells.length; i += 3) {
    groupedCells.push(cells.slice(i, i + 3));
  }

  const cardTextStyle = {
    fontSize: '22px', //  font size 
  };

  const cardTitleStyle = {
    fontSize: '30px', //font size of card title
  };
 
  return (
    <div className="mx-3">
      {groupedCells.map((group, groupIndex) => (
        <CardGroup key={groupIndex} className="mb-3">
          {group.map((product, index) => (
            <Card key={index} className="mb-4 mx-4" style={{ borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={product.image} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{product.price}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  {product.name}<br />
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted" style={{ fontSize: '18px' }}>{product.lastUpdated}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      ))}
    </div>
  );
  
  
}

export default Products;