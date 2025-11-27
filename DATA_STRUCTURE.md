# 📊 Data Structure - Pegasus-Shop

Dokumentasi struktur data yang digunakan di website Pegasus-Shop.

---

## 📦 Products Data

**Location:** `src/data/products.js`

### Product Object Structure

```javascript
{
  id: Number,              // Unique identifier (required)
  name: String,            // Product name (required)
  category: String,        // Category name (required)
  description: String,     // Product description (required)
  price: String,           // Price display (required)
  label: String,           // Badge label (optional)
  labelColor: String       // Badge color class (optional)
}
```

### Example Product

```javascript
{
  id: 1,
  name: "E-book: Panduan Lengkap Digital Marketing 2024",
  category: "E-book dan Audiobook",
  description: "Panduan komprehensif untuk menguasai digital marketing dari dasar hingga advanced dengan studi kasus nyata.",
  price: "Rp 150.000",
  label: "Best Seller",
  labelColor: "bg-yellow-500"
}
```

### Field Details

#### id (Number)
- **Required:** Yes
- **Type:** Integer
- **Description:** Unique identifier untuk setiap produk
- **Example:** `1`, `2`, `3`
- **Note:** Harus unique, biasanya increment dari produk terakhir

#### name (String)
- **Required:** Yes
- **Type:** String
- **Description:** Nama produk yang akan ditampilkan
- **Max Length:** Recommended 60-80 characters
- **Example:** `"E-book: Panduan Lengkap Digital Marketing 2024"`
- **Tips:** Gunakan nama yang descriptive dan menarik

#### category (String)
- **Required:** Yes
- **Type:** String
- **Description:** Kategori produk
- **Must Match:** One of the categories in `categories` array
- **Valid Values:**
  - `"E-book dan Audiobook"`
  - `"Kursus Online"`
  - `"Template Desain"`
  - `"Foto dan Video Stok"`
  - `"Musik dan Efek Suara"`
  - `"Font"`
  - `"Perangkat Lunak & Aplikasi"`
  - `"Layanan & Langganan"`
  - `"Produk Lainnya"`

#### description (String)
- **Required:** Yes
- **Type:** String
- **Description:** Deskripsi singkat produk
- **Recommended Length:** 80-150 characters
- **Example:** `"Panduan komprehensif untuk menguasai digital marketing..."`
- **Tips:** 
  - Fokus pada benefit, bukan feature
  - Gunakan bahasa yang persuasif
  - Highlight unique selling point

#### price (String)
- **Required:** Yes
- **Type:** String
- **Description:** Harga produk untuk display
- **Format:** `"Rp XXX.XXX"` atau `"Rp XXX.XXX/bulan"`
- **Examples:**
  - `"Rp 150.000"`
  - `"Rp 1.500.000/bulan"`
  - `"Rp 500.000/sesi"`
- **Note:** Format bebas, hanya untuk display

#### label (String) - Optional
- **Required:** No
- **Type:** String
- **Description:** Label badge untuk produk
- **Common Values:**
  - `"Best Seller"` - Produk terlaris
  - `"Baru"` - Produk baru
  - `"Diskon 20%"` - Produk diskon
  - `"Limited"` - Stok terbatas
  - `"Hot"` - Produk populer
- **Example:** `"Best Seller"`
- **Note:** Biarkan kosong (`""`) jika tidak perlu label

#### labelColor (String) - Optional
- **Required:** No (required if `label` is set)
- **Type:** String (Tailwind CSS class)
- **Description:** Warna background untuk label badge
- **Common Values:**
  - `"bg-yellow-500"` - Kuning (Best Seller)
  - `"bg-green-500"` - Hijau (Baru)
  - `"bg-red-500"` - Merah (Diskon)
  - `"bg-blue-500"` - Biru
  - `"bg-purple-500"` - Ungu
  - `"bg-orange-500"` - Orange (Hot/Limited)
- **Example:** `"bg-yellow-500"`
- **Note:** Biarkan kosong (`""`) jika tidak ada label

---

## 🏷️ Categories Data

**Location:** `src/data/products.js`

### Category Object Structure

```javascript
{
  id: Number,              // Unique identifier (required)
  name: String,            // Category name (required)
  icon: String,            // Emoji icon (required)
  description: String      // Category description (required)
}
```

### Example Category

```javascript
{
  id: 1,
  name: "E-book dan Audiobook",
  icon: "📚",
  description: "Buku elektronik atau versi audio dari buku yang dapat diunduh dan dibaca di perangkat digital."
}
```

### Field Details

#### id (Number)
- **Required:** Yes
- **Type:** Integer
- **Description:** Unique identifier untuk kategori
- **Example:** `1`, `2`, `3`

#### name (String)
- **Required:** Yes
- **Type:** String
- **Description:** Nama kategori
- **Must Match:** Nilai di field `category` pada products
- **Example:** `"E-book dan Audiobook"`

#### icon (String)
- **Required:** Yes
- **Type:** String (Emoji)
- **Description:** Emoji sebagai icon kategori
- **Example:** `"📚"`, `"🎓"`, `"🎨"`
- **Resources:**
  - [Emojipedia](https://emojipedia.org/)
  - [GetEmoji](https://getemoji.com/)

#### description (String)
- **Required:** Yes
- **Type:** String
- **Description:** Penjelasan singkat kategori
- **Length:** 60-120 characters
- **Example:** `"Buku elektronik atau versi audio..."`

---

## 📝 Current Data Summary

### Products
- **Total:** 20 products
- **Categories Used:** 9 categories
- **With Labels:** 12 products
- **Without Labels:** 8 products

### Categories
- **Total:** 9 categories
- **All Active:** Yes
- **All Have Products:** Yes

### Label Distribution
- **Best Seller:** 5 products
- **Baru:** 5 products
- **Diskon 20%:** 3 products
- **No Label:** 7 products

---

## 🔄 Adding New Data

### Adding New Product

1. Open `src/data/products.js`
2. Find the `products` array
3. Add new object at the end:

```javascript
{
  id: 21, // Increment from last ID
  name: "Your Product Name",
  category: "Choose from existing categories",
  description: "Compelling product description",
  price: "Rp XXX.XXX",
  label: "Optional label",
  labelColor: "bg-color-500"
}
```

4. Save file
5. Test in browser

### Adding New Category

1. Open `src/data/products.js`
2. Find the `categories` array
3. Add new object:

```javascript
{
  id: 10, // Increment from last ID
  name: "Your Category Name",
  icon: "🎯", // Choose emoji
  description: "Category description"
}
```

4. Save file
5. Create products with this category
6. Test in browser

---

## ✅ Data Validation

### Product Validation Checklist

- [ ] ID is unique
- [ ] Name is descriptive and attractive
- [ ] Category matches one from categories array
- [ ] Description is compelling (80-150 chars)
- [ ] Price format is consistent
- [ ] Label is appropriate (if set)
- [ ] LabelColor matches label (if label is set)

### Category Validation Checklist

- [ ] ID is unique
- [ ] Name is clear and specific
- [ ] Icon is relevant emoji
- [ ] Description explains the category well
- [ ] At least one product uses this category

---

## 🎨 Best Practices

### Product Names
✅ **Good:**
- "E-book: Panduan Lengkap Digital Marketing 2024"
- "Kursus Online: Web Development Bootcamp"
- "Template Design: Social Media Kit Premium"

❌ **Bad:**
- "Marketing" (too short)
- "E-book tentang marketing digital yang sangat lengkap..." (too long)
- "Ebook" (typo, should be E-book)

### Descriptions
✅ **Good:**
- Focus on benefits
- Clear value proposition
- Action-oriented language
- Include numbers when relevant

❌ **Bad:**
- Too generic
- Too long (>200 chars)
- All caps
- Too much technical jargon

### Prices
✅ **Good:**
- "Rp 150.000"
- "Rp 1.500.000/bulan"
- "Rp 500.000/sesi"

❌ **Bad:**
- "150000" (no currency)
- "Rp. 150.000" (extra dot)
- "150k" (informal)

---

## 🔍 Querying Data

### Filter by Category

Data otomatis ter-filter di UI menggunakan category filter.

Implementation ada di `src/components/Products.jsx`:

```javascript
const filteredProducts = products.filter(product => {
  const matchesCategory = selectedCategory === 'Semua' || 
                         product.category === selectedCategory;
  return matchesCategory;
});
```

### Search Products

Search functionality mencari di `name` dan `description`:

```javascript
const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     product.description.toLowerCase().includes(searchQuery.toLowerCase());
```

---

## 📊 Data Statistics

### Current Products by Category

| Category | Count |
|----------|-------|
| E-book dan Audiobook | 3 |
| Kursus Online | 2 |
| Template Desain | 2 |
| Foto dan Video Stok | 2 |
| Musik dan Efek Suara | 1 |
| Font | 1 |
| Perangkat Lunak & Aplikasi | 3 |
| Layanan & Langganan | 3 |
| Produk Lainnya | 3 |

### Price Range

- **Minimum:** Rp 80.000
- **Maximum:** Rp 2.000.000
- **Average:** ~Rp 400.000

---

## 🚀 Performance Tips

### Data Loading
- Data is static (no API calls)
- Loads instantly with bundle
- No loading states needed
- Perfect for static site

### Scalability
- Current: 20 products works perfectly
- Can handle: 100+ products easily
- For 500+: Consider pagination
- For 1000+: Consider lazy loading

---

## 🔧 Maintenance

### Regular Updates

**Monthly:**
- Review product descriptions
- Update prices if needed
- Check label relevance
- Remove outdated products

**Quarterly:**
- Add new products
- Review categories
- Update testimonials
- Refresh content

**Yearly:**
- Major content refresh
- Category restructure if needed
- Price strategy review
- Full audit

---

## 📚 Resources

- [Array Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Objects](https://javascript.info/object)
- [React Lists](https://react.dev/learn/rendering-lists)

---

**Data structure ini dirancang untuk kemudahan maintenance dan scalability! 📊**
