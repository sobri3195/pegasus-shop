# 🚀 Panduan Deploy Pegasus-Shop ke Netlify

## Metode 1: Deploy via Netlify Dashboard (Paling Mudah)

### Langkah-langkah:

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Login ke Netlify**
   - Buka [netlify.com](https://www.netlify.com/)
   - Login atau daftar akun gratis

3. **Deploy**
   - Klik tombol "Add new site" atau "Deploy manually"
   - Drag & drop folder `dist/` ke area upload
   - Tunggu proses upload selesai
   - Website langsung live!

---

## Metode 2: Deploy via GitHub (Recommended untuk Auto-Deploy)

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Pegasus-Shop website"
   git push origin main
   ```

2. **Connect ke Netlify**
   - Login ke [netlify.com](https://www.netlify.com/)
   - Klik "Add new site" → "Import an existing project"
   - Pilih "GitHub" dan authorize akses
   - Pilih repository Anda

3. **Configure Build Settings**
   - **Branch to deploy:** `main` (atau branch yang Anda gunakan)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Klik "Deploy site"

4. **Keuntungan Metode Ini:**
   - Auto-deploy setiap kali push ke GitHub
   - Preview deploy untuk pull request
   - Rollback mudah ke versi sebelumnya

---

## Metode 3: Deploy via Netlify CLI

### Langkah-langkah:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Build Project**
   ```bash
   npm run build
   ```

4. **Deploy**
   
   Untuk deploy ke draft URL (testing):
   ```bash
   netlify deploy
   ```
   
   Untuk deploy ke production:
   ```bash
   netlify deploy --prod
   ```

5. **Follow Prompts:**
   - Pilih "Create & configure a new site"
   - Pilih team
   - Masukkan site name (optional)
   - Publish directory: `dist`

---

## 🔧 Konfigurasi Custom Domain

Setelah deploy, Anda bisa menggunakan custom domain:

1. Buka dashboard site Anda di Netlify
2. Klik "Domain settings"
3. Klik "Add custom domain"
4. Masukkan domain Anda
5. Update DNS records sesuai instruksi Netlify

---

## 🌍 Environment Variables (Jika Diperlukan di Masa Depan)

Jika Anda perlu menambahkan environment variables:

1. Buka dashboard site di Netlify
2. Pergi ke "Site settings" → "Environment variables"
3. Klik "Add a variable"
4. Masukkan key dan value

Untuk mengakses di code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Test build locally: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] Update nomor WhatsApp di semua komponen
- [ ] Update informasi produk di `src/data/products.js`
- [ ] Pastikan semua gambar dan asset sudah benar
- [ ] Check responsive di berbagai device
- [ ] Test semua link WhatsApp berfungsi
- [ ] Review SEO meta tags di `index.html`

---

## 🐛 Troubleshooting

### Build Failed
- Pastikan `node_modules/` sudah ter-install: `npm install`
- Coba hapus `node_modules/` dan install ulang
- Check error message di build log

### 404 Error di Netlify
- Pastikan file `netlify.toml` ada di root project
- Atau pastikan file `public/_redirects` ada
- Setting di Netlify: Deploy settings → Redirects → Add rule: `/*` → `/index.html` → `200`

### Styling Tidak Muncul
- Pastikan Tailwind config sudah benar
- Check bahwa `index.css` di-import di `main.jsx`
- Clear cache dan rebuild

---

## 📊 Monitoring & Analytics

Setelah deploy, Anda bisa:

1. **Netlify Analytics**
   - Buka "Analytics" di dashboard
   - Aktifkan (berbayar tapi optional)

2. **Google Analytics**
   - Tambahkan script GA di `index.html`
   - Monitor traffic dan user behavior

3. **Form Submissions**
   - Jika menambah form, gunakan Netlify Forms
   - Gratis untuk 100 submissions/bulan

---

## 🔄 Update Website

Untuk update konten atau fitur:

### Via GitHub (Auto-deploy):
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push origin main
```
Website akan auto-deploy dalam beberapa menit.

### Via Drag & Drop:
1. Build ulang: `npm run build`
2. Drag folder `dist/` ke Netlify dashboard
3. Konfirmasi untuk replace deployment

---

## 💡 Tips Optimasi

1. **Image Optimization**
   - Gunakan format WebP untuk gambar
   - Compress gambar sebelum upload

2. **Performance**
   - Enable asset optimization di Netlify
   - Enable "Pretty URLs"
   - Setup caching headers

3. **SEO**
   - Submit sitemap ke Google Search Console
   - Setup robots.txt jika perlu
   - Add structured data untuk rich snippets

---

## 📞 Support

Jika ada masalah:
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community Forum](https://answers.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

---

**Happy Deploying! 🚀**
