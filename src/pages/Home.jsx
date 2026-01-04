import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import NewsDetail from './NewsDetail';
import newsData from '../services/newsData.json';

const Home = ({ kategori }) => {
  const [selectedKategori, setSelectedKategori] = useState(null);
  
  useEffect(() => {
    setSelectedKategori(kategori);
  }, [kategori]);
  const [selectedNews, setSelectedNews] = useState(null);
  
  // Filter news based on category if specified
  let filteredNews = newsData;
  let title = 'Berita Terbaru';
  
  if (selectedKategori) {
    filteredNews = newsData.filter(news => 
      news.category.toLowerCase() === selectedKategori.toLowerCase()
    );
    title = `Berita ${selectedKategori.charAt(0).toUpperCase() + selectedKategori.slice(1)}`;
  }

  const handleNewsSelect = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="split-view">
      <div className="split-left">
        <h1 className="mb-4 page-title">{title}</h1>
        <NewsList newsItems={filteredNews} onNewsSelect={handleNewsSelect} selectedNewsId={selectedNews?.id} />
        {filteredNews.length === 0 && (
          <div className="text-center py-5">
            <h3 className="text-muted">Tidak ada berita dalam kategori ini</h3>
            <p> Silakan pilih kategori lain</p>
          </div>
        )}
      </div>
      <div className="split-right">
        {selectedNews ? (
          <NewsDetail news={selectedNews} />
        ) : (
          <div className="no-selection">
            <h3 className="text-muted text-center mt-5">Pilih berita untuk melihat detail</h3>
            <p className="text-center text-muted">Klik pada salah satu berita di sebelah kiri untuk melihat detailnya</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;