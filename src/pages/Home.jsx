import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  // Static news data
  const newsItems = [
    {
      id: 1,
      title: 'Pemilu Serentak 2026 Diumumkan Aman dan Transparan',
      summary: 'Komisi Pemilihan Umum menyatakan bahwa pelaksanaan Pemilu Serentak 2026 berjalan dengan aman dan transparan sesuai standar internasional.',
      date: '4 Januari 2026',
      category: 'Politik',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Indonesia Raih Penghargaan Internasional untuk Inovasi Teknologi',
      summary: 'Startup asal Indonesia berhasil meraih penghargaan dalam ajang teknologi internasional berkat inovasi dalam bidang kecerdasan buatan.',
      date: '3 Januari 2026',
      category: 'Teknologi',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Pemerintah Luncurkan Program Baru untuk UMKM',
      summary: 'Program pendanaan dan pelatihan digital untuk UMKM di seluruh Indonesia resmi diluncurkan dengan target 1 juta pelaku usaha.',
      date: '2 Januari 2026',
      category: 'Ekonomi',
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div>
      <h1 className="mb-4">Berita Terbaru</h1>
      <div className="row">
        {newsItems.map((news) => (
          <div className="col-md-4 mb-4" key={news.id}>
            <Card>
              <Card.Img variant="top" src={news.imageUrl} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text className="text-muted small">{news.date} | {news.category}</Card.Text>
                <Card.Text>{news.summary}</Card.Text>
                <Button variant="primary">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;