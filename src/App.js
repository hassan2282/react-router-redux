import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        asdfasdfas
        <Route path="/products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
