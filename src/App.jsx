import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import './styles/addProduct.css';
import './styles/cart.css';
import './styles/header.css';
import './styles/productCard.css';
import './styles/productDetail.css';
import './styles/productList.css';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://tse1.mm.bing.net/th/id/OIP.isLHB8E2VAZW2vuKxVEtQAHaE8?pid=Api&P=0&h=220',
      name: 'McLaren 720s Spider',
      category: 'Supercars',
      description: 'The McLaren 720S Spider is a breathtaking open-top supercar that combines lightweight carbon construction, extreme performance, and elegant design. Its retractable hardtop lets you enjoy supercar thrills with open-air freedom.',
      spec: '4.0 L twin-turbo V8 • 710 hp (720 PS) • 770 Nm torque • 7-speed dual-clutch • RWD • 0–100 km/h ≈ 2.9 s • Top speed ≈ 341 km/h',
      rating: 4.8,
      price: 19300000,
      quantity: 15,
    },
    {
      id: 2,
      image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2024/04/lamborghini-urus-se-studio-quarter-front.jpg',
      name: 'Lamborghini Urus',
      category: 'SUVs',
      description: 'The Lamborghini Urus is a high-performance luxury SUV that blends supercar power with everyday usability. It features exotic styling, a premium interior and sport-scar dynamics while seating four to five passengers.',
      spec: '4.0 L twin-turbo V8 • ~641 hp • ~850 Nm torque • 8-speed automatic • AWD • 0–100 km/h ≈ 3.6 s • Top speed ≈ 305 km/h',
      rating: 4.7,
      price:  20828280,
      quantity: 13,
    },
    {
      id: 3,
      image: 'https://www.topgear.com/sites/default/files/2022/12/MANHART-MH4-GTR-II-G82-Website-1.jpg',
      name: 'The Manhart MH4 GTR II',
      category: 'Sportscars',
      description: 'The Manhart MH4 GTR II is an extreme, track-focused evolution of the BMW M4 CSL (G82). Tuned by Manhart Performance, it delivers 702 PS and 880 Nm from the 3.0-liter twin-turbo inline-six, paired with a full carbon aero kit, 20-inch forged wheels, and race-ready suspension for ultimate performance and presence.',
      spec: '3.0L twin-turbo inline-6 • 702 PS / 880 Nm • 8-speed M Steptronic • RWD • 0-100 km/h ≈ 3.2 s • Top Speed > 300 km/h (est.)',
      rating: 4.9,
      price: 20067700,
      quantity: 10,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');

  const addProduct = (newProduct) => {
    const id = products.length + 1;
    setProducts([...products, { ...newProduct, id }]);
  };

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ).filter((item) => item.quantity > 0));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} filter={filter} setFilter={setFilter} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;