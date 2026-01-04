# BeritaKu - Aplikasi Berita Sederhana

Aplikasi berita sederhana yang dibangun dengan React dan Bootstrap, menggunakan pendekatan incremental development dengan Git commit.

## Fitur-fitur

- Tampilan berita utama dengan kategori
- Halaman detail berita
- Navigasi antar halaman
- Desain responsif
- Pengelompokan berita berdasarkan kategori

## Struktur Project

```
src/
├── components/          # Komponen reusable
│   ├── Layout.jsx      # Layout utama (Navbar, Footer)
│   ├── NewsCard.jsx    # Komponen kartu berita
│   └── NewsList.jsx    # Komponen daftar berita
├── pages/              # Halaman-halaman aplikasi
│   ├── Home.jsx        # Halaman beranda
│   └── NewsDetail.jsx  # Halaman detail berita
├── services/           # Layanan dan data
│   └── newsData.json   # Data berita dummy
├── assets/             # Aset-aset statis
├── App.jsx             # Komponen utama aplikasi
└── main.jsx            # Entry point aplikasi
```

## Cara Menjalankan Aplikasi

1. Pastikan Node.js dan npm sudah terinstall di sistem Anda
2. Clone atau download project ini
3. Masuk ke direktori project
4. Install dependensi:
   ```bash
   npm install
   ```
5. Jalankan aplikasi dalam mode development:
   ```bash
   npm run dev
   ```
6. Buka browser dan akses `http://localhost:5173`

## Perintah-perintah yang Tersedia

- `npm run dev` - Menjalankan aplikasi dalam mode development
- `npm run build` - Membangun aplikasi untuk produksi
- `npm run preview` - Mempreview build produksi secara lokal
- `npm run lint` - Menjalankan ESLint untuk pengecekan kode

## Teknologi yang Digunakan

- React 19
- Vite
- Bootstrap
- React Router DOM
- React Bootstrap