import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { getViaAxios } from '../Services/api';

const ProductView = ({ product }) => {
  const cardTextStyle = {
    fontSize: '16px',
  };

  const cardTitleStyle = {
    fontSize: '18px',
  };

  return (
    <div style={{ margin: '20px' }}>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              width: '500px',
              
            }}
          />
          <Card.Body>
            <Card.Title style={cardTitleStyle}>{product.price}</Card.Title>
            <Card.Text style={cardTextStyle}>
              {product.name}
              <br />
              {product.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

const View = () => {
  const [viewProductId, setViewProductId] = useState('');
  const [isViewing, setIsViewing] = useState(false);
  const [product, setProduct] = useState(null);

  const handleViewButtonClick = async () => {
    try {
      const res = await getViaAxios();

      const selectedProduct = res.data.find((p) => p.productId === viewProductId);

      if (selectedProduct) {
        setProduct(selectedProduct);
        setIsViewing(true);
      } else {
        console.error('Product not found');
        alert('Not Found');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
      alert('Error fetching product data');
    }
  };

  const handleCancelClick = () => {
    setIsViewing(false);
    setViewProductId('');
    setProduct(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:'-80px' }}>
      <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px' }}>
        <h2 style={{ color: '#198754', marginBottom: '20px' }}>View Product</h2>
        <input
          type="text"
          style={{ width: '100%', height: '40px', fontSize: '16px', marginBottom: '20px', padding: '8px' }}
          placeholder="Enter Model Number"
          value={viewProductId}
          onChange={(e) => setViewProductId(e.target.value)}
        />

        <Button
          variant="secondary"
          style={{ fontSize: '16px', marginRight: '10px', padding: '10px 20px' }}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          variant="success"
          style={{ fontSize: '16px', padding: '10px 20px' }}
          onClick={handleViewButtonClick}
        >
          View Product
        </Button>

        {isViewing && product && <ProductView product={product} />}
      </div>
    </div>
  );
};

export default View;
