import React from 'react';
import Menubar from './Navbr';

const AboutUs = () => {
  const aboutUsStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#FFEFD5', // Very light orange shade
    marginTop: '75px',
    marginBottom: '-50px',
    
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    textTransform: 'uppercase',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '8px',
    marginTop: '8px',
  };

  return (
    <div>
      <Menubar />
      <div className="container" style={aboutUsStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={textStyle}>
          Welcome to CellBazaar, your ultimate destination for the latest and trendiest cell phones!
        </p>
        <p style={textStyle}>
          Established a decade ago, we take pride in offering a wide range of smartphones, including
          the latest iPhones, Android devices, and more.
        </p>
        <p style={textStyle}>
          Our journey began with a passion for technology and a commitment to providing our customers
          with top-notch mobile devices.
        </p>
        <p style={textStyle}>
          Over the years, we've evolved to become a trusted name in the industry, known for our
          fashionable and high-quality smartphones.
        </p>
        <p style={textStyle}>
          At CellBazaar, we believe in staying ahead of the curve. Our collection is curated to meet
          the demands of the modern, tech-savvy individual.
        </p>
        <p style={textStyle}>
          Whether you're looking for cutting-edge features, sleek designs, or the latest innovations,
          we've got you covered.
        </p>
        <p style={textStyle}>
          Join us on this journey as we continue to redefine the mobile shopping experience. Thank you
          for being a part of the CellBazaar family!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
