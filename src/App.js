import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import Content from './components/Content';
import Comments from './components/Comments';

function App(){
  return (
    <Router>
      <Content />
        <Routes>
          <Route path="/"/>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
    </Router>
  );
}

export default App;