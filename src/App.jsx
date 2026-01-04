import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewsDetailPage from './pages/NewsDetailPage'; // Separate page for direct access
import './App.css';

// Wrapper component to handle the route parameter
function HomeWrapper() {
  const location = useLocation();
  const kategori = location.pathname.includes('/kategori/') ? 
    location.pathname.split('/kategori/')[1] : null;
  
  return <Home kategori={kategori} />;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/kategori/:kategori" element={<HomeWrapper />} />
          <Route path="/berita/:id" element={<NewsDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
