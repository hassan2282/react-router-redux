import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Products from './components/Products';
import Content from './components/Content';
import Comments from './components/Comments';
import ProductDetail from './components/ProductDetail';

function App(){
  return (
    <Router>
      <Content />
        <Routes>
          <Route path="/"/>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/product/:id" Component={ProductDetail} />
        </Routes>
    </Router>
  );
}

export default App;