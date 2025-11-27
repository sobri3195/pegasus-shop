import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kategori', href: '#kategori' },
    { name: 'Pemilik', href: '#pemilik' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleMenuClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2" onClick={() => handleMenuClick('#home')}>
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🐴</span>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'gradient-text' : 'text-white'
              }`}>
                Pegasus-Shop
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={`font-medium transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={isScrolled ? 'text-gray-700' : 'text-white'}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-3 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
