import React from 'react';
import login from "./Login.css"
import Menubar from './Navbr';
const AboutUs = () => {
  const aboutUsStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f8f8f8',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div >
        <Menubar/>
      <div className="container " style={{marginTop:"7rem"}}>
        <h1 style={headingStyle} className="d-flex justify-content-center">About Us</h1>
        <p style={textStyle}>
          Welcome to CellBazaar, your ultimate destination for the latest and trendiest cell phones!
          <br />
          Established a decade ago, we take pride in offering a wide range of smartphones, including the
          latest iPhones, Android devices, and more.
        </p>
        <p style={textStyle}>
          Our journey began with a passion for technology and a commitment to providing our customers
          with top-notch mobile devices. Over the years, we've evolved to become a trusted name in the
          industry, known for our fashionable and high-quality smartphones.
        </p>
        <p style={textStyle}>
          At CellBazaar, we believe in staying ahead of the curve. Our collection is curated to meet the
          demands of the modern, tech-savvy individual. Whether you're looking for cutting-edge features,
          sleek designs, or the latest innovations, we've got you covered.
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

