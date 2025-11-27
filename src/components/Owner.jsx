import { useState, useEffect, useRef } from 'react';

const Owner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="pemilik" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tentang Pemilik</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berkenalan dengan pendiri dan pemilik Pegasus-Shop
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Image Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
                      alt="dr. Muhammad Sobri Maulana"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                    <span className="text-4xl">🎓</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                  dr. Muhammad Sobri Maulana
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Founder & CEO Pegasus-Shop
                </p>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Seorang profesional medis yang berpengalaman dengan passion di bidang teknologi 
                    dan digital entrepreneurship. Dengan latar belakang pendidikan kedokteran dan 
                    ketertarikan mendalam pada transformasi digital, beliau mendirikan Pegasus-Shop 
                    untuk membantu individu dan bisnis mengakses produk digital berkualitas tinggi.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-xl mb-3 flex items-center">
                      <span className="mr-2">🏆</span>
                      Pencapaian & Keahlian
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Praktisi medis dengan pengalaman lebih dari 5 tahun</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Expert dalam digital marketing dan e-commerce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Penulis e-book "Panduan Lengkap Digital Marketing 2024"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Developer plugin WordPress "SEO Optimizer Pro"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Mentor dan konsultan untuk 100+ digital entrepreneurs</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg">
                    Visi beliau adalah menjadikan produk digital premium accessible untuk semua kalangan, 
                    dengan fokus pada kualitas, kepuasan pelanggan, dan pemberdayaan entrepreneur digital 
                    di Indonesia.
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 my-6">
                    <h4 className="font-bold text-xl mb-3 flex items-center">
                      <span className="mr-2">💡</span>
                      Filosofi Bisnis
                    </h4>
                    <p className="italic text-gray-600">
                      "Teknologi dan pendidikan adalah kunci untuk membuka potensi maksimal setiap individu. 
                      Melalui Pegasus-Shop, saya berkomitmen untuk menyediakan produk digital berkualitas 
                      yang dapat mengakselerasi pertumbuhan bisnis dan pengembangan diri Anda."
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a
                      href="https://wa.me/62813395203503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Hubungi Langsung</span>
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/muhammad-sobri-maulana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`max-w-5xl mx-auto mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-3xl font-bold gradient-text mb-1">500+</div>
              <div className="text-gray-600">Produk Digital</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold gradient-text mb-1">2000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold gradient-text mb-1">4.9/5</div>
              <div className="text-gray-600">Rating Produk</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-bold gradient-text mb-1">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
