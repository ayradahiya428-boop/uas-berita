import React from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import newsData from '../services/newsData.json';

const Home = () => {
  const { kategori } = useParams();
  
  // Filter news based on category if specified
  let filteredNews = newsData;
  let title = 'Berita Terbaru';
  
  if (kategori) {
    filteredNews = newsData.filter(news => 
      news.category.toLowerCase() === kategori.toLowerCase()
    );
    title = `Berita ${kategori.charAt(0).toUpperCase() + kategori.slice(1)}`;
  }

  return (
    <div>
      <h1 className="mb-4">{title}</h1>
      <NewsList newsItems={filteredNews} />
      {filteredNews.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">Tidak ada berita dalam kategori ini</h3>
          <p> Silakan pilih kategori lain</p>
        </div>
      )}
    </div>
  );
};

export default Home;