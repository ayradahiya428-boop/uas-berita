import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import newsData from '../services/newsData.json';

const Home = ({ kategori }) => {
  const [selectedKategori, setSelectedKategori] = useState(null);
  
  useEffect(() => {
    setSelectedKategori(kategori);
  }, [kategori]);
  
  // Filter news based on category if specified
  let allNews = newsData;
  let title = 'Berita Terbaru';
  
  if (selectedKategori) {
    allNews = newsData.filter(news => 
      news.category.toLowerCase() === selectedKategori.toLowerCase()
    );
    title = `Berita ${selectedKategori.charAt(0).toUpperCase() + selectedKategori.slice(1)}`;
  }
  
  // Determine which news to feature as hero, popular, and latest
  const heroNews = allNews.length > 0 ? allNews[0] : null;
  const popularNews = allNews.slice(1, 4); // Next 3 items as popular
  const latestNews = allNews.slice(4); // Remaining as latest

  return (
    <div>
      <h1 className="mb-4 page-title">{title}</h1>
      
      {/* Hero Section - Large Headline */}
      {heroNews && (
        <div className="hero-section mb-5">
          <Card className="hero-card">
            <div className="row g-0">
              <div className="col-md-6">
                <Card.Img 
                  src={heroNews.imageUrl} 
                  className="hero-image img-fluid" 
                  alt={heroNews.title}
                />
              </div>
              <div className="col-md-6">
                <Card.Body className="d-flex flex-column">
                  <div className="hero-badge">UTAMA</div>
                  <Card.Title className="hero-title">{heroNews.title}</Card.Title>
                  <Card.Text className="hero-meta text-muted small">{heroNews.date} | {heroNews.category}</Card.Text>
                  <Card.Text className="hero-summary">{heroNews.summary}</Card.Text>
                  <Link to={`/berita/${heroNews.id}`} className="btn btn-primary mt-auto hero-btn">Baca Selengkapnya</Link>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Popular News Grid */}
      <div className="popular-section mb-5">
        <h2 className="section-title mb-4">Berita Populer</h2>
        <div className="row g-4">
          {popularNews.map((news) => (
            <div className="col-md-4" key={news.id}>
              <Card className="popular-card h-100">
                <Card.Img variant="top" src={news.imageUrl} className="popular-image" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="popular-title">{news.title}</Card.Title>
                  <Card.Text className="text-muted small">{news.date} | {news.category}</Card.Text>
                  <Card.Text className="flex-grow-1">{news.summary}</Card.Text>
                  <Link to={`/berita/${news.id}`} className="btn btn-outline-primary mt-auto">Baca Selengkapnya</Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Latest News List */}
      <div className="latest-section">
        <h2 className="section-title mb-4">Berita Terbaru</h2>
        <div className="latest-news-list">
          {latestNews.map((news) => (
            <div className="latest-news-item p-3 mb-3 border rounded" key={news.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="latest-image img-fluid rounded"
                  />
                </div>
                <div className="col-md-9">
                  <div className="latest-content ps-md-3">
                    <h5 className="latest-title">{news.title}</h5>
                    <p className="text-muted small mb-1">{news.date} | {news.category}</p>
                    <p className="latest-summary">{news.summary}</p>
                    <Link to={`/berita/${news.id}`} className="btn btn-sm btn-link p-0 text-primary">Baca Selengkapnya</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {allNews.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">Tidak ada berita dalam kategori ini</h3>
          <p> Silakan pilih kategori lain</p>
        </div>
      )}
    </div>
  );
};

export default Home;