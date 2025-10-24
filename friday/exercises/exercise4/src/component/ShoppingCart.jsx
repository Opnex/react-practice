import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Jollof Rice', price: 1500, quantity: 2 },
    { id: 2, name: 'Plantain', price: 500, quantity: 1 },
    { id: 3, name: 'Eba', price: 500, quantity: 2 },
    { id: 4, name: 'Amala', price: 500, quantity: 3 },
    { id: 5, name: 'Ogunfe', price: 2500, quantity: 2 }
  ]);

  
  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    ).filter(item => item.quantity > 0));
  };

  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  
  const clearCart = () => {
    setCartItems([]);
  };



  
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p className="hint"></p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    {formatCurrency(item.price)} x {item.quantity} = {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
                
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      className="btn btn-decrease"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="btn btn-increase"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className="btn btn-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total-price">
              Total: <strong>{formatCurrency(totalPrice)}</strong>
            </div>
            
            <button 
              className="btn btn-clear"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;