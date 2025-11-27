import { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-3 px-4 relative animate-fade-in">
      <div className="container mx-auto flex items-center justify-center text-center">
        <p className="text-sm md:text-base font-semibold">
          🎉 Diskon 20% untuk paket bundling! Hubungi kami sekarang untuk promo spesial
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
