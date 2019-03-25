import React from 'react';
import '../../style.css';

function Header (props){
  const styles = {
    padding:40,
  }
  return (
    <header>
      <h1 style={styles}>{props.title}</h1>
    </header>
  )
}

export default Header;
