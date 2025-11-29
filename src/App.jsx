import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Menu/Menu'
import React, { useEffect, useState } from 'react';


function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (count = 1) => {
    setCartCount(prev => Number(prev) + Number(count));
  };


  return (
    <>
      <Header currPage='Menu' quantityOfGoods={cartCount}/>
      <Menu onAddToCart={handleAddToCart}/>
      <Footer/>
    </>
  );
}

export default App;
