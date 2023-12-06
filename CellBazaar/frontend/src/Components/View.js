import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { getViaAxios } from '../Services/api';

const ProductView = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getViaAxios();
        const selectedProduct = res.data.find((p) => p.productId === productId);

        if (selectedProduct) {
          setProduct(selectedProduct);
        }
        else{alert("Not Found")}
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>
      {/* No product found for the given ID. */}
      </div>;
  }

  const cardTextStyle = {
    fontSize: '16px',
  };

  const cardTitleStyle = {
    fontSize: '18px',
  };

  return (
    <div style={{ paddingLeft: '31%', paddingRight: '31.6%', paddingTop: '3%' }}>
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

  const handleViewButtonClick = () => {
    setIsViewing(true);
  };

  const handleCancelClick = () => {
    setIsViewing(false);
    setViewProductId(''); // Reset the input field when canceling
  };

  return (
    <div>
      <div
        style={{
          display: 'block',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h2>View Record</h2>
        <p style={{ fontSize: '18px' }}>Enter Model Number:</p>
        <input
          type="text"
          style={{ width: '222px', height: '40px', fontSize: '16px' }}
          value={viewProductId}
          onChange={(e) => setViewProductId(e.target.value)}
        />

        <br />
        <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleCancelClick}>
          Cancel
        </button>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
          }}
          onClick={handleViewButtonClick}
        >
          View Record
        </button>
      </div>
      {isViewing && <ProductView productId={viewProductId} />}
    </div>
  );
};

export default View;
