import React, { useState } from 'react';
import '../styles/cart.css';

function Cart({ cart, updateQuantity, handleCheckout }) {
  const [removing, setRemoving] = useState(false); 

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const handleClear = () => {
    if (cart.length === 0) return;
    setRemoving(true);
    setTimeout(() => {
      updateQuantity(null, 'clear'); 
      setRemoving(true);
    }, 300); 
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className={`cart-item ${removing ? 'removing' : ''}`}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <div className="cart-actions">
            <button className="clear-btn" onClick={handleClear}>
              Clear Cart
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
