import Carousel from 'react-bootstrap/Carousel';

function Carosal() {
  const carouselStyle = {
    maxHeight: '300px', // Adjust the maximum height as needed
  };

  const imageStyle = {
    width: '100%',      // Set the width to 100% to fill the Carousel
    height: 'auto',     // Allows the image to scale proportionally
  };

  return (
    <Carousel slide={false} style={carouselStyle}>
      <Carousel.Item>
        <img
          src="/images/img1.jpg" // first image
          alt="First slide"
          className="img-fluid"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'red' }}>Instant Disposal</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/img2.jpg" // second image
          alt="Second slide"
          className="img-fluid"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'red' }} >Home Services</h3>
               </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/img3.jpg" // third image
          alt="Third slide"
          className="img-fluid"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'red' }}>Reasonable Upgrades</h3>
                  </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;
