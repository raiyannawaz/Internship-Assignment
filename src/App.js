import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import { useState } from 'react';
import Cart from './Components/Cart';

function App() {

  let [products, setProducts] = useState([]);

  const getProducts = async () => {
    let apiData = (await fetch('https://dummyjson.com/products'))

    let jsData = await apiData.json();

    return jsData.products
  }

  let loadProducts = getProducts();

  return (
    <Router>
      <Navbar loadProducts={loadProducts} products={products} setProducts={setProducts} />
      <Routes>
        <Route path='/' element={<Home loadProducts={loadProducts} products={products} setProducts={setProducts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
