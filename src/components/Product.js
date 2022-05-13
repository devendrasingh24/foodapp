import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}  style={{border:"3px solid coral"}}/>
      <h3 style={{color:"blue"}}>{product.name}</h3>
      <div style={{color:"green", text:"bold"}}><strong> Price: {product.price} Rs</strong></div>
      <div>
        <button onClick={() => onAdd(product)} style={{ marginBottom:'20px'}}>Add To Cart</button>
      </div>
    </div>
  );
}
