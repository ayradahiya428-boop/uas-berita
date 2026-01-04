import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ newsItems }) => {
  return (
    <div className="row">
      {newsItems.map((news) => (
        <div className="col-md-4 mb-4" key={news.id}>
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;