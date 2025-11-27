import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Categories from '../components/Categories';
import Owner from '../components/Owner';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Products />
      <Categories />
      <Owner />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
