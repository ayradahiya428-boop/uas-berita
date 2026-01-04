import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, styleType = 'default' }) => {
  const renderCardContent = () => {
    switch(styleType) {
      case 'hero':
        return (
          <div className="hero-card">
            <div className="hero-image-container">
              <Card.Img variant="top" src={news.imageUrl} className="hero-image" />
              <div className="hero-category-badge">{news.category}</div>
            </div>
            <Card.Body className="hero-body">
              <Card.Title className="hero-title">{news.title}</Card.Title>
              <Card.Text className="hero-meta text-muted small">{news.date}</Card.Text>
              <Card.Text className="hero-summary">{news.summary}</Card.Text>
              <Link to={`/berita/${news.id}`} className="btn btn-primary hero-btn">Baca Selengkapnya</Link>
            </Card.Body>
          </div>
        );
      case 'compact':
        return (
          <div className="compact-card">
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <Card.Img variant="top" src={news.imageUrl} className="compact-image" />
              </div>
              <div className="flex-grow-1">
                <Card.Title className="compact-title">{news.title}</Card.Title>
                <Card.Text className="text-muted small">{news.date} | {news.category}</Card.Text>
                <Card.Text className="compact-summary">{news.summary}</Card.Text>
                <Link to={`/berita/${news.id}`} className="btn btn-sm btn-outline-primary">Baca</Link>
              </div>
            </div>
          </div>
        );
      case 'featured':
        return (
          <div className="featured-card">
            <Card.Img variant="top" src={news.imageUrl} className="featured-image" />
            <div className="featured-badge">{news.category}</div>
            <Card.Body>
              <Card.Title className="featured-title">{news.title}</Card.Title>
              <Card.Text className="text-muted small">{news.date}</Card.Text>
              <Card.Text className="featured-summary">{news.summary}</Card.Text>
              <Link to={`/berita/${news.id}`} className="btn btn-primary">Lihat Detail</Link>
            </Card.Body>
          </div>
        );
      default: // default style
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <Card className={`news-card h-100 ${styleType}-style`}>
      {renderCardContent()}
    </Card>
  );
};

export default NewsCard;