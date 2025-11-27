import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Produk
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                {product.image && (
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-96 lg:h-full object-cover"
                      loading="lazy"
                    />
                    {product.label && (
                      <span className={`absolute top-4 right-4 ${product.labelColor} text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg`}>
                        {product.label}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="text-sm text-primary-600 bg-primary-50 px-4 py-2 rounded-full font-medium inline-block mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h1>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Deskripsi</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  {product.details && (
                    <p className="text-gray-700 leading-relaxed">
                      {product.details}
                    </p>
                  )}
                </div>

                <div className="border-t pt-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Harga</p>
                      <p className="text-4xl md:text-5xl font-bold gradient-text">
                        {product.price}
                      </p>
                    </div>
                    
                    <a
                      href="https://wa.me/62813395203503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Beli Sekarang via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetail;
