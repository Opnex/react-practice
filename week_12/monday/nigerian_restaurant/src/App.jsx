import { useState } from 'react';
import MenuList from './MenuList';
import Cart from './Cart';
import './RestaurantApp.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    { id: 1, name: 'Jollof Rice', price: 1500 },
    { id: 2, name: 'Fried Rice', price: 1200 },
    { id: 3, name: 'Pounded Yam & Egusi', price: 2000 },
    { id: 4, name: 'Suya', price: 1000 },
    { id: 5, name: 'Plantain', price: 500 }
  ];

  function handleAddToCart(item) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(itemId) {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  }

  function handleUpdateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems(prev => prev.map(i =>
      i.id === itemId ? { ...i, quantity: newQuantity } : i
    ));
  }

  return (
    <div className="restaurant-app">
      <h1>🍽️ Naija Restaurant</h1>
      <div className="container">
        <MenuList
          items={menuItems}
          onAddToCart={handleAddToCart}
        />
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
    </div>
  );
}

export default App;