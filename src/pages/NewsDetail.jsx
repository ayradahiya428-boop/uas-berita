import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  
  // Static news data (same as in Home page)
  const newsItems = [
    {
      id: 1,
      title: 'Pemilu Serentak 2026 Diumumkan Aman dan Transparan',
      summary: 'Komisi Pemilihan Umum menyatakan bahwa pelaksanaan Pemilu Serentak 2026 berjalan dengan aman dan transparan sesuai standar internasional.',
      date: '4 Januari 2026',
      category: 'Politik',
      imageUrl: 'https://via.placeholder.com/300x200',
      content: 'Pelaksanaan Pemilu Serentak 2026 di Indonesia dinyatakan berjalan dengan aman dan transparan. Komisi Pemilihan Umum (KPU) menyatakan bahwa seluruh tahapan pemilu telah dilaksanakan sesuai dengan standar internasional. Partisipasi masyarakat dalam pemilu juga mencapai angka yang tinggi, menunjukkan tingginya kesadaran demokrasi masyarakat Indonesia.\n\nBeberapa lembaga pemantau internasional turut hadir sebagai observer dan memberikan apresiasi terhadap pelaksanaan pemilu yang kondusif dan bebas dari kecurangan.\n\nPresiden Joko Widodo dalam pidato terbarunya menyampaikan rasa syukur atas pelaksanaan pemilu yang damai dan menegaskan komitmen pemerintah untuk terus memperkuat sistem demokrasi di Indonesia.'
    },
    {
      id: 2,
      title: 'Indonesia Raih Penghargaan Internasional untuk Inovasi Teknologi',
      summary: 'Startup asal Indonesia berhasil meraih penghargaan dalam ajang teknologi internasional berkat inovasi dalam bidang kecerdasan buatan.',
      date: '3 Januari 2026',
      category: 'Teknologi',
      imageUrl: 'https://via.placeholder.com/300x200',
      content: 'Sebuah startup teknologi asal Indonesia berhasil meraih penghargaan bergengsi dalam ajang teknologi internasional yang diselenggarakan di Singapura. Perusahaan ini mengembangkan solusi kecerdasan buatan yang dapat membantu proses diagnosis medis secara lebih cepat dan akurat.\n\nTim pengembang yang terdiri dari lima orang lulusan Institut Teknologi Bandung ini mengatakan bahwa inovasi mereka mampu mengurangi waktu diagnosis hingga 70% dibandingkan metode konvensional.\n\nDengan penghargaan ini, startup tersebut berencana untuk memperluas pasar ke kawasan Asia Tenggara dan bekerja sama dengan rumah sakit-rumah sakit ternama di kawasan.'
    },
    {
      id: 3,
      title: 'Pemerintah Luncurkan Program Baru untuk UMKM',
      summary: 'Program pendanaan dan pelatihan digital untuk UMKM di seluruh Indonesia resmi diluncurkan dengan target 1 juta pelaku usaha.',
      date: '2 Januari 2026',
      category: 'Ekonomi',
      imageUrl: 'https://via.placeholder.com/300x200',
      content: 'Pemerintah hari ini secara resmi meluncurkan program pendanaan dan pelatihan digital bagi Usaha Mikro, Kecil, dan Menengah (UMKM) di seluruh Indonesia. Program ini menargetkan satu juta pelaku UMKM yang akan mendapatkan akses pendanaan hingga Rp 100 juta serta pelatihan digitalisasi usaha.\n\nMenteri Koperasi dan UKM menyatakan bahwa program ini merupakan bagian dari upaya percepatan pemulihan ekonomi pasca-pandemi.\n\n"Kami berharap dengan dukungan pendanaan dan pelatihan digital, UMKM Indonesia mampu bersaing di pasar global dan menjadi motor penggerak ekonomi nasional," ujarnya dalam konferensi pers di Jakarta.'
    }
  ];
  
  const news = newsItems.find(item => parseInt(item.id) === parseInt(id));
  
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
          <Card.Text>{news.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetail;