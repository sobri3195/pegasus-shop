import { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: 'Bagaimana cara membeli produk di Pegasus-Shop?',
      answer: 'Cukup pilih produk yang Anda inginkan, klik tombol "Beli", dan Anda akan diarahkan ke WhatsApp kami. Tim kami akan membantu proses pembelian hingga selesai.'
    },
    {
      question: 'Metode pembayaran apa saja yang tersedia?',
      answer: 'Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, DANA), dan payment gateway lainnya. Detail akan diinformasikan saat proses pembelian.'
    },
    {
      question: 'Berapa lama produk akan dikirim setelah pembayaran?',
      answer: 'Produk digital akan langsung dikirim maksimal 1x24 jam setelah pembayaran dikonfirmasi. Biasanya kami kirim dalam hitungan menit!'
    },
    {
      question: 'Apakah ada garansi untuk produk yang dibeli?',
      answer: 'Ya, semua produk kami memiliki garansi. Jika ada masalah dengan produk yang Anda beli, silakan hubungi support kami dan kami akan membantu menyelesaikannya.'
    },
    {
      question: 'Bisakah saya mendapatkan refund jika tidak puas?',
      answer: 'Kami memiliki kebijakan refund untuk kasus tertentu. Silakan hubungi support kami untuk diskusi lebih lanjut mengenai kebijakan refund.'
    },
    {
      question: 'Apakah produk bisa dipakai untuk keperluan komersial?',
      answer: 'Sebagian besar produk kami memiliki lisensi komersial. Detail lisensi akan dijelaskan pada deskripsi produk atau saat pembelian.'
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-600 transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
