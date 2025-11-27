# ⚡ Quick Start Guide - Pegasus-Shop

Panduan cepat untuk menjalankan website Pegasus-Shop dalam 5 menit!

---

## 🚀 Langkah 1: Clone / Download

Jika dari GitHub:
```bash
git clone <repository-url>
cd pegasus-shop
```

Jika download ZIP:
- Extract file ZIP
- Buka terminal di folder tersebut

---

## 📦 Langkah 2: Install Dependencies

```bash
npm install
```

Tunggu sampai selesai (sekitar 1-2 menit).

---

## 🔧 Langkah 3: Konfigurasi (Opsional)

### Update Nomor WhatsApp

Buka file berikut dan ganti nomor WhatsApp:
- `src/components/Hero.jsx`
- `src/components/Products.jsx`
- `src/components/Footer.jsx`
- `src/components/FloatingWhatsApp.jsx`

Cari: `https://wa.me/62813395203503`  
Ganti dengan: `https://wa.me/628XXXXXXXXXX`

💡 **Tip:** Gunakan Find & Replace (Ctrl+H) di VS Code untuk ganti semua sekaligus!

---

## 🎨 Langkah 4: Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses:
```
http://localhost:5173
```

Website sudah jalan! 🎉

---

## 🛠️ Kustomisasi Konten

### Ubah Produk

Edit file: `src/data/products.js`

Tambah produk baru:
```javascript
{
  id: 21,
  name: "Nama Produk",
  category: "Kategori",
  description: "Deskripsi produk...",
  price: "Rp 100.000",
  label: "Best Seller",
  labelColor: "bg-yellow-500"
}
```

### Ubah Hero Text

Edit file: `src/components/Hero.jsx`

Cari dan ubah:
```jsx
<h1>Pegasus-Shop</h1>
<p>Toko Produk Digital Siap Pakai</p>
```

### Ubah Warna

Edit file: `tailwind.config.js`

Ubah warna di bagian `colors` → `primary` dan `secondary`

---

## 📦 Build untuk Production

```bash
npm run build
```

Folder `dist/` akan berisi file production-ready.

---

## 🌐 Deploy ke Netlify

### Cara Termudah (Drag & Drop):

1. Build project:
   ```bash
   npm run build
   ```

2. Login ke [netlify.com](https://www.netlify.com/)

3. Drag folder `dist/` ke dashboard Netlify

4. Done! Website live dalam 1 menit! 🚀

### Via GitHub (Auto-Deploy):

1. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Di Netlify:
   - Klik "Add new site"
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

---

## ✅ Checklist Sebelum Deploy

- [ ] Nomor WhatsApp sudah diganti
- [ ] Produk sudah diupdate
- [ ] Testimoni sudah disesuaikan
- [ ] FAQ sudah diubah (jika perlu)
- [ ] Test di berbagai device (mobile, tablet, desktop)
- [ ] Semua link WhatsApp berfungsi
- [ ] Build berhasil tanpa error

---

## 🆘 Troubleshooting

### Error saat `npm install`

**Solusi:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error saat `npm run build`

**Solusi:**
```bash
npm install
npm run build
```

Jika masih error, check error message di terminal.

### Website tidak muncul di Netlify

**Solusi:**
- Pastikan build command: `npm run build`
- Pastikan publish directory: `dist`
- Check build logs di Netlify untuk error

### WhatsApp link tidak berfungsi

**Solusi:**
- Format nomor: `62XXXXXXXXXX` (tanpa + dan spasi)
- Format link: `https://wa.me/62XXXXXXXXXX`
- Test link di browser

---

## 📚 Dokumentasi Lengkap

Untuk panduan lebih detail, lihat:

- 📖 [README.md](./README.md) - Overview project
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Panduan deploy lengkap
- 🎨 [CUSTOMIZE.md](./CUSTOMIZE.md) - Panduan kustomisasi
- ✨ [FEATURES.md](./FEATURES.md) - Daftar fitur lengkap

---

## 💡 Tips

1. **Gunakan VS Code** untuk editing
2. **Install extension:** ES7 React/Redux/GraphQL, Tailwind CSS IntelliSense
3. **Test responsiveness:** Chrome DevTools (F12 → Toggle Device)
4. **Save often:** Auto-save di VS Code sangat membantu
5. **Git commit regularly:** Jangan lupa commit perubahan

---

## 🎯 Next Steps

Setelah website jalan:

1. ✅ Update semua konten sesuai bisnis Anda
2. ✅ Deploy ke Netlify
3. ✅ Setup custom domain (optional)
4. ✅ Test di berbagai device
5. ✅ Share link ke social media
6. ✅ Monitor traffic dengan analytics

---

## 💬 Need Help?

Check dokumentasi di folder project atau hubungi support.

---

**Happy Building! 🚀**

Waktu total setup: ~5 menit  
Waktu kustomisasi: ~30 menit  
Waktu deploy: ~2 menit

**Total: Website live dalam 1 jam!** ⚡
