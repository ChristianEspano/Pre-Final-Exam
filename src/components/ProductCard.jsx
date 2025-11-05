import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Subtotal: ${product.price * product.quantity}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;