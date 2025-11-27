# 🎨 Panduan Kustomisasi Pegasus-Shop

Panduan lengkap untuk menyesuaikan website Pegasus-Shop sesuai kebutuhan Anda.

---

## 📝 Mengubah Konten Teks

### 1. Nama Brand & Logo

**File:** `src/components/Navbar.jsx`, `src/components/Footer.jsx`

Cari dan ganti:
```jsx
<span className="text-2xl font-bold">Pegasus-Shop</span>
```

Ganti emoji logo:
```jsx
<span className="text-3xl">🐴</span>  // Ganti dengan emoji lain
```

### 2. Hero Section

**File:** `src/components/Hero.jsx`

```jsx
<h1>Pegasus-Shop</h1>  // Judul utama
<p>Toko Produk Digital Siap Pakai</p>  // Subjudul
<p>Hemat waktu dan tingkatkan produktivitas...</p>  // Deskripsi
```

### 3. SEO Meta Tags

**File:** `index.html`

```html
<title>Pegasus-Shop - Toko Produk Digital...</title>
<meta name="description" content="..."/>
<meta name="keywords" content="..."/>
```

---

## 📦 Mengelola Produk

### Menambah Produk Baru

**File:** `src/data/products.js`

Tambahkan object baru di array `products`:

```javascript
{
  id: 21, // ID unik, increment dari yang terakhir
  name: "Nama Produk Baru",
  category: "Kategori",  // Harus sesuai dengan kategori yang ada
  description: "Deskripsi menarik produk Anda",
  price: "Rp 500.000",
  label: "Best Seller",  // Optional: "Best Seller", "Baru", "Diskon 20%"
  labelColor: "bg-yellow-500"  // Optional: warna label
}
```

### Menghapus Produk

Hapus object produk dari array atau tambahkan property `hidden: true`.

### Mengubah Produk Existing

Edit properties yang diinginkan:
- `name` - Nama produk
- `description` - Deskripsi
- `price` - Harga
- `category` - Kategori
- `label` - Label badge (optional)
- `labelColor` - Warna label (optional)

### Opsi Label Color:
- `bg-yellow-500` - Kuning (untuk Best Seller)
- `bg-green-500` - Hijau (untuk Baru)
- `bg-red-500` - Merah (untuk Diskon)
- `bg-blue-500` - Biru
- `bg-purple-500` - Ungu

---

## 🏷️ Mengelola Kategori

**File:** `src/data/products.js`

### Menambah Kategori Baru

Tambahkan object baru di array `categories`:

```javascript
{
  id: 10,
  name: "Nama Kategori Baru",
  icon: "🎯",  // Emoji sebagai icon
  description: "Deskripsi singkat kategori"
}
```

### Mengubah Icon Kategori

Ganti emoji di property `icon`. Pilih emoji dari:
- [Emojipedia](https://emojipedia.org/)
- [GetEmoji](https://getemoji.com/)

### Menghapus Kategori

Hapus object kategori dari array. Pastikan tidak ada produk yang menggunakan kategori tersebut.

---

## 💬 Mengubah Nomor WhatsApp

Nomor WhatsApp ada di beberapa file. Ganti semua:

```
https://wa.me/62813395203503
```

Dengan nomor Anda:

```
https://wa.me/628XXXXXXXXXX
```

**Files yang perlu diubah:**
1. `src/components/Hero.jsx` (line ~32)
2. `src/components/Products.jsx` (line ~86)
3. `src/components/Footer.jsx` (line ~10)
4. `src/components/FloatingWhatsApp.jsx` (line ~18)

**Tip:** Gunakan Find & Replace di editor untuk ganti semua sekaligus.

---

## 🎨 Mengubah Warna Theme

### Warna Utama (Primary & Secondary)

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    // ... warna biru
    500: '#0ea5e9',  // Warna utama
    600: '#0284c7',  // Warna hover
  },
  secondary: {
    // ... warna ungu
    500: '#a855f7',
    600: '#9333ea',
  },
}
```

### Generator Warna Tailwind:
- [Tailwind Color Generator](https://uicolors.app/create)
- [Tailwind Shades](https://www.tailwindshades.com/)

### Gradient Background

**File:** `src/index.css`

```css
.gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%);
}
```

Ganti kode hex color sesuai preferensi.

---

## ✨ Mengubah Animasi

### Kecepatan Animasi

**File:** `src/index.css`

```css
.animate-on-scroll {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  /* Ganti 0.6s dengan durasi yang diinginkan */
}
```

### Delay Animasi

**File:** `src/components/*.jsx`

Cari style prop:
```jsx
style={{ animationDelay: `${index * 0.1}s` }}
```

Ganti `0.1` dengan nilai lain (misal `0.2` untuk delay lebih lama).

### Menonaktifkan Animasi

Hapus atau comment class `animate-on-scroll` di komponen.

---

## 📱 Mengubah Banner Promo

**File:** `src/components/PromoBanner.jsx`

```jsx
<p className="text-sm md:text-base font-semibold">
  🎉 Diskon 20% untuk paket bundling! Hubungi kami sekarang untuk promo spesial
</p>
```

Ganti teks sesuai promo Anda.

### Menonaktifkan Banner

**File:** `src/App.jsx`

Comment atau hapus:
```jsx
// <PromoBanner />
```

---

## 💬 Mengubah Testimoni

**File:** `src/components/Testimonials.jsx`

Edit array `testimonials`:

```javascript
{
  name: 'Nama Pelanggan',
  role: 'Profesi',
  image: '👨‍💼',  // Emoji avatar
  text: 'Testimoni lengkap dari pelanggan...'
}
```

---

## ❓ Mengubah FAQ

**File:** `src/components/FAQ.jsx`

Edit array `faqs`:

```javascript
{
  question: 'Pertanyaan yang sering diajukan?',
  answer: 'Jawaban lengkap untuk pertanyaan tersebut.'
}
```

---

## 🎯 Mengubah Section Keunggulan

**File:** `src/components/Features.jsx`

Edit array `features`:

```javascript
{
  icon: '⚡',
  title: 'Judul Keunggulan',
  description: 'Deskripsi singkat keunggulan'
}
```

---

## 📋 Mengubah Cara Kerja (Steps)

**File:** `src/components/HowItWorks.jsx`

Edit array `steps`:

```javascript
{
  number: 1,
  title: 'Judul Step',
  description: 'Deskripsi step',
  icon: '🛍️'
}
```

---

## 🖼️ Menambahkan Gambar/Logo

### Logo Custom

**File:** `src/components/Navbar.jsx`

Ganti emoji dengan tag `<img>`:

```jsx
<img src="/logo.png" alt="Logo" className="h-10 w-10" />
```

Letakkan file `logo.png` di folder `public/`.

### Background Hero

**File:** `src/components/Hero.jsx`

Tambahkan background image:

```jsx
<section 
  className="..."
  style={{
    backgroundImage: 'url("/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

---

## 🔤 Mengubah Font

### Google Fonts

**File:** `index.html`

Tambahkan di `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

**File:** `src/index.css`

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

---

## 📏 Mengubah Spacing & Layout

### Container Width

**File:** Semua components

Cari `className="container mx-auto"` dan tambahkan max-width:

```jsx
<div className="container mx-auto max-w-7xl px-4">
```

Opsi max-width:
- `max-w-4xl` - Narrow
- `max-w-6xl` - Medium
- `max-w-7xl` - Wide
- `max-w-full` - Full width

---

## 🔧 Tips Development

### Hot Reload
Setiap perubahan akan otomatis reload saat `npm run dev` berjalan.

### Check Responsiveness
Test di berbagai ukuran layar:
- Gunakan Chrome DevTools (F12)
- Toggle Device Toolbar (Ctrl+Shift+M)
- Test di mobile, tablet, desktop

### Debugging
- Check browser console untuk error
- Gunakan React DevTools extension
- Test build production: `npm run build && npm run preview`

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet)

---

**Selamat Mengustomisasi! 🎨**
