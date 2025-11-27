import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      image: '👨‍💼',
      text: 'Produk digital dari Pegasus-Shop sangat membantu bisnis saya. Kualitas premium dengan harga terjangkau!'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Content Creator',
      image: '👩‍💻',
      text: 'Template desainnya sangat profesional dan mudah digunakan. Menghemat banyak waktu saya dalam membuat konten!'
    },
    {
      name: 'Ahmad Rizki',
      role: 'Digital Marketer',
      image: '👨‍🎓',
      text: 'Kursus online yang dibeli sangat lengkap dan mudah dipahami. Support dari tim juga sangat responsif!'
    },
    {
      name: 'Linda Wijaya',
      role: 'Freelance Designer',
      image: '👩‍🎨',
      text: 'Font dan template yang dijual berkualitas tinggi. Sangat membantu pekerjaan desain saya sehari-hari!'
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Apa kata mereka yang sudah menggunakan produk kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-6xl text-primary-600 mb-4">"</div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="text-5xl">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-600 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                ←
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
