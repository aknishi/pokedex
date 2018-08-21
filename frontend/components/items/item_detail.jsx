
import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li><h3>{item.name}</h3></li>
    <li>HAPPINESS: {item.happiness}</li>
    <li>PRICE: {item.price}</li>
  </ul>
);

export default ItemDetail;
