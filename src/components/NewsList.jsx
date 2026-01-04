import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ newsItems }) => {
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
    <div className="row">
      {newsItems.map((news, index) => (
        <div className="col-md-4 mb-4" key={news.id}>
          <NewsCard news={news} styleType={getCardStyle(index)} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;