import { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: 'Pilih Produk',
      description: 'Browse katalog dan pilih produk digital yang Anda butuhkan',
      icon: '🛍️'
    },
    {
      number: 2,
      title: 'Chat via WhatsApp',
      description: 'Klik tombol "Beli" dan hubungi kami melalui WhatsApp',
      icon: '💬'
    },
    {
      number: 3,
      title: 'Lakukan Pembayaran',
      description: 'Selesaikan pembayaran melalui metode yang tersedia',
      icon: '💳'
    },
    {
      number: 4,
      title: 'Terima Produk',
      description: 'Dapatkan produk digital via email atau link download',
      icon: '📦'
    }
  ];

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
  }, []);

  return (
    <section id="cara-kerja" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Cara Kerja
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proses pembelian yang mudah dan cepat dalam 4 langkah sederhana
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 text-4xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
