import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
      background: '#f1faee',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };
    
  function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Brian's React Portfolio</h1>
      </header>
    );
  }
  
  export default Header;