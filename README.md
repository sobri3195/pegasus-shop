# 🐴 Pegasus-Shop - Toko Produk Digital

Website single-page modern untuk toko produk digital "Pegasus-Shop" yang dibangun dengan React JS, Vite, dan Tailwind CSS.

## ✨ Fitur Utama

- 🎨 **Desain Modern & Elegan** - Tampilan futuristik dengan gradient biru-ungu
- 🎭 **Animasi Halus** - Micro-interactions dan scroll animations untuk UX yang menarik
- 📱 **Fully Responsive** - Tampil sempurna di mobile, tablet, dan desktop
- 🔍 **Search & Filter** - Cari produk dan filter berdasarkan kategori
- 💬 **WhatsApp Integration** - Tombol langsung ke WhatsApp untuk pembelian
- 🎯 **SEO Optimized** - Meta tags lengkap untuk SEO
- ⚡ **Fast & Lightweight** - Dibangun dengan Vite untuk performa maksimal

## 🛠️ Teknologi

- **React 18** - Library JavaScript untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Dengan functional components dan hooks

## 📋 Struktur Halaman

Website ini terdiri dari beberapa section:

1. **Promo Banner** - Banner promo yang bisa ditutup
2. **Navbar** - Navigation bar sticky dengan smooth scroll
3. **Hero Section** - Section pembuka dengan CTA utama
4. **Products** - Katalog produk dengan filter dan search
5. **Categories** - Kategori produk digital yang tersedia
6. **Features** - Keunggulan Pegasus-Shop
7. **How It Works** - Alur pembelian dalam 4 langkah
8. **Testimonials** - Testimoni pelanggan dengan slider
9. **FAQ** - Pertanyaan umum dengan accordion
10. **Footer** - CTA akhir dan informasi kontak
11. **Floating WhatsApp** - Tombol WhatsApp floating

## 🚀 Cara Menjalankan di Lokal

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (versi 16 atau lebih tinggi)
- npm atau yarn

### Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd pegasus-shop
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:5173
```

## 📦 Build untuk Production

Untuk membuat build production:

```bash
npm run build
```

File hasil build akan berada di folder `dist/`

Untuk preview build:
```bash
npm run preview
```

## 🌐 Deploy ke Netlify

### Cara 1: Deploy Manual

1. Build project:
```bash
npm run build
```

2. Login ke [Netlify](https://www.netlify.com/)

3. Drag & drop folder `dist/` ke dashboard Netlify

### Cara 2: Deploy via Git (Recommended)

1. Push code ke GitHub repository

2. Login ke [Netlify](https://www.netlify.com/)

3. Klik "Add new site" → "Import an existing project"

4. Pilih repository Anda

5. Konfigurasi build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

6. Klik "Deploy site"

### Cara 3: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login ke Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

## 📝 Konfigurasi

### Mengubah Nomor WhatsApp

Cari dan ganti nomor WhatsApp di file-file berikut:
- `src/components/Hero.jsx`
- `src/components/Products.jsx`
- `src/components/Footer.jsx`
- `src/components/FloatingWhatsApp.jsx`

Ganti `https://wa.me/62813395203503` dengan nomor WhatsApp Anda.

### Menambah/Edit Produk

Edit file `src/data/products.js` untuk menambah atau mengubah produk:

```javascript
{
  id: 1,
  name: "Nama Produk",
  category: "Kategori",
  description: "Deskripsi produk",
  price: "Rp 100.000",
  label: "Best Seller", // Optional
  labelColor: "bg-yellow-500" // Optional
}
```

### Mengubah Warna Theme

Edit file `tailwind.config.js` untuk mengubah warna:

```javascript
colors: {
  primary: { /* warna biru */ },
  secondary: { /* warna ungu */ },
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Custom Classes

Beberapa utility classes custom yang tersedia:

- `.gradient-primary` - Gradient biru-ungu
- `.gradient-secondary` - Gradient biru-ungu alternatif
- `.gradient-text` - Text dengan gradient
- `.btn-primary` - Tombol primary dengan gradient
- `.btn-secondary` - Tombol secondary outline
- `.card-hover` - Efek hover untuk card
- `.animate-on-scroll` - Animasi saat scroll

## 👨‍💻 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

- 🌐 GitHub: [github.com/sobri3195](https://github.com/sobri3195)
- 📧 Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- 🌐 Website: [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)
- 🌐 Portfolio: [muhammad-sobri-maulana-kvr6a.sevalla.page](https://muhammad-sobri-maulana-kvr6a.sevalla.page/)

### 📱 Social Media & Contact

- 📺 YouTube: [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- 📱 TikTok: [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- ✈️ Telegram: [@winlin_exploit](https://t.me/winlin_exploit)
- 💬 WhatsApp Group: [Join Community](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

## 💰 Support & Donation

Jika proyek ini bermanfaat bagi Anda, mohon pertimbangkan untuk mendukung pengembangan lebih lanjut melalui:

- ☕ [Lynk.id](https://lynk.id/muhsobrimaulana)
- ☕ [Trakteer](https://trakteer.id/g9mkave5gauns962u07t)
- 🎨 [Karya Karsa](https://karyakarsa.com/muhammadsobrimaulana)
- 💝 [Nyawer](https://nyawer.co/MuhammadSobriMaulana)
- 🛍️ [Gumroad](https://maulanasobri.gumroad.com/)

Dukungan Anda sangat berarti untuk pengembangan proyek-proyek open source selanjutnya! 🙏

## 📄 License

© 2024 Pegasus-Shop. All rights reserved.

## 💬 Support

Untuk pertanyaan atau bantuan, hubungi kami via WhatsApp:
[Chat di WhatsApp](https://wa.me/62813395203503)

---

**Dibuat dengan ❤️ untuk digital entrepreneurs oleh Muhammad Sobri Maulana**
