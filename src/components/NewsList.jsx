import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ newsItems, onNewsSelect, selectedNewsId }) => {
  // Define different styles for different news items
  const getCardStyle = (index) => {
    const styles = ['default', 'hero', 'compact', 'featured'];
    // For demo purposes, we'll use different styles for different positions
    if (index === 0) return 'hero';
    if (index === 1) return 'featured';
    if (index % 4 === 0) return 'compact';
    return 'default';
  };

  return (
    <div className="news-list-container">
      {newsItems.map((news, index) => (
        <div 
          key={news.id} 
          className={`news-item ${selectedNewsId === news.id ? 'selected' : ''}`}
          onClick={() => onNewsSelect(news)}
        >
          <NewsCard news={news} styleType={getCardStyle(index)} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;