import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
// import NavBar from './components/NavBar';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
