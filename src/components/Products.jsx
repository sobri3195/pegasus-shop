import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);

  const categories = ['Semua', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section id="produk" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Produk Digital Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih dari berbagai produk digital berkualitas tinggi yang siap membantu Anda mencapai tujuan
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto block px-6 py-3 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="animate-on-scroll bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.image && (
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  {product.label && (
                    <span className={`absolute top-3 right-3 ${product.labelColor} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
                      {product.label}
                    </span>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-primary-600 mb-3 font-medium">
                  {product.category}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">
                    {product.price}
                  </span>
                  
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block">
                    Lihat Detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
