import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita/:id" element={<NewsDetail />} />
          <Route path="/kategori/:kategori" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
