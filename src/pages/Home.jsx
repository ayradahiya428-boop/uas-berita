import React from 'react';
import NewsList from '../components/NewsList';
import newsData from '../services/newsData.json';

const Home = () => {
  // Get news data from JSON file
  const newsItems = newsData;

  return (
    <div>
      <h1 className="mb-4">Berita Terbaru</h1>
      <NewsList newsItems={newsItems} />
    </div>
  );
};

export default Home;