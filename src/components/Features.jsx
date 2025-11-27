import { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: '⚡',
      title: 'Produk 100% Digital',
      description: 'Langsung kirim setelah pembayaran, tanpa perlu menunggu lama'
    },
    {
      icon: '♻️',
      title: 'Bisa Dipakai Berulang Kali',
      description: 'Akses selamanya untuk produk yang Anda beli'
    },
    {
      icon: '🔄',
      title: 'Update Berkala',
      description: 'Beberapa produk mendapat update gratis secara berkala'
    },
    {
      icon: '💬',
      title: 'Support Cepat',
      description: 'Tim support siap membantu Anda via WhatsApp'
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
    <section id="keunggulan" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Keunggulan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mengapa memilih Pegasus-Shop untuk kebutuhan produk digital Anda?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
