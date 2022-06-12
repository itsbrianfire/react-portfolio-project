import React from 'react';
// import { Card, Button, Container, Row, Col, Text, Image } from '@nextui-org/react';
// import './pages/images/legos.jpg'
import '../styles/Footer.css';

const styles = {
    footerStyle: {
      background: '#f1faee',
      justifycontent: 'center'
    },
    footingStyle: {
      fontSize: '17.5px',
    },
  };

function Footer() {

  return (
    <footer className="footer footer-wrap mt-auto">
        <p style={styles.footingStyle}>© 2022, Garcia Media LLC</p>
    </footer>
  );
}

export default Footer;