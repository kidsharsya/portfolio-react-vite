# Portfolio Website - React + Vite + Tailwind CSS

Portfolio website personal yang dibangun menggunakan React, Vite, dan Tailwind CSS v4. Website ini menampilkan informasi profil, project yang telah dikerjakan, dan informasi kontak.

## 🚀 Fitur

- **Hero Section** - Tampilan pembuka dengan informasi profil
- **Project Section** - Galeri project dengan detail lengkap
- **Project Detail Page** - Halaman detail untuk setiap project
- **Contact Section** - Informasi kontak (Email, WhatsApp, Lokasi)
- **Responsive Design** - Tampilan optimal di berbagai ukuran layar
- **Smooth Navigation** - Navigasi yang smooth dengan React Router

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat untuk development
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router DOM** - Routing untuk React
- **Lucide React** - Icon library

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- Node.js (versi 16 atau lebih tinggi)
- npm atau yarn

## 🔧 Instalasi & Menjalankan Project

### 1. Clone Repository

```bash
git clone <repository-url>
cd my-app-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Tailwind CSS v4 (Jika belum terinstall)

Install Tailwind CSS v4 menggunakan Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 4. Konfigurasi Tailwind CSS

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Tambahkan Tailwind directives di `src/index.css`, `src/App.css`:

```css
@import 'tailwindcss';
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:5173`

### 6. Build untuk Production

```bash
npm run build
```

File production akan tersimpan di folder `dist/`

### 7. Preview Build Production

```bash
npm run preview
```

## 📁 Struktur Folder

```
my-app-react/
├── src/
│   ├── assets/
│   │   └── images/          # Gambar project
│   ├── components/
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ProjectDetail/
│   │       └── ProjectDetail.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Kustomisasi

### Mengubah Data Project

Edit file `src/components/ProjectSection.jsx` dan `src/components/ProjectDetail/ProjectDetail.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Judul Project',
    desc: 'Deskripsi singkat',
    fullDesc: 'Deskripsi lengkap',
    img: '/path/to/image',
    tech: ['React', 'Node.js'],
  },
  // tambah project lainnya
];
```

### Mengubah Informasi Kontak

Edit file `src/components/ContactSection.jsx`:

```javascript
const contacts = [
  {
    icon: Mail,
    title: 'Email',
    value: 'email@example.com',
    link: 'mailto:email@example.com',
  },
  // ubah sesuai kebutuhan
];
```

## 📝 Scripts Available

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau issue untuk perbaikan dan fitur baru.

## 📄 License

MIT License - Bebas digunakan untuk personal maupun komersial.
