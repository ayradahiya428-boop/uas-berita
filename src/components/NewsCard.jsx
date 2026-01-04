import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <Card>
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text className="text-muted small">{news.date} | {news.category}</Card.Text>
        <Card.Text>{news.summary}</Card.Text>
        <Link to={`/berita/${news.id}`} className="btn btn-primary">Baca Selengkapnya</Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;