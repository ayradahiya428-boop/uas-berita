import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import newsData from '../services/newsData.json';

const NewsDetail = () => {
  const { id } = useParams();
  
  // Get news data from JSON file
  const news = newsData.find(item => parseInt(item.id) === parseInt(id));
  
  if (!news) {
    return (
      <div>
        <h1 className="mb-4">Berita Tidak Ditemukan</h1>
        <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
      </div>
    );
  }
  
  return (
    <div>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Beranda</Link>
      <Card>
        <Card.Img variant="top" src={news.imageUrl} style={{ height: '400px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title className="mb-3">{news.title}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">{news.date} | {news.category}</Card.Subtitle>
          <Card.Text className="news-detail-content">{news.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetail;