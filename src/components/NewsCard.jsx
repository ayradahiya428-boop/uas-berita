import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <Card className="news-card h-100">
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={news.imageUrl} className="news-image" />
        <div className="category-badge">{news.category}</div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{news.title}</Card.Title>
        <Card.Text className="text-muted small">{news.date} | {news.category}</Card.Text>
        <Card.Text className="flex-grow-1">{news.summary}</Card.Text>
        <Link to={`/berita/${news.id}`} className="btn btn-primary mt-auto">Baca Selengkapnya</Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;