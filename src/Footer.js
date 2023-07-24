import React from 'react';
import './footer.css';

const Footer = ({length}) => {
  return (
    <footer>
      <p>{length} List {length === 1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer