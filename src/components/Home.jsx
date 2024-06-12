import React from 'react'
import HeroSection from './Hero';
import ServicesSection from './Services';
import Marquees from './Marquees';
import AboutAndCaseSection from './Aboutus';
import Technologies from './Technologies';
import FaqSection from './Faqsection';
import ContactSection from './ContactUs';
import Footer from './Footer';
import Navbar from './Navbar';



const Home = () => {
  return (
    <div className="page_wrapper" style={{ overflowX: "hidden" }}>
      {/* <div className="particle">
          <ParticlesComponent />
        </div> */}
      <Navbar />

      <HeroSection />

      <ServicesSection />
      <Marquees />
      <AboutAndCaseSection />
      <Technologies />
      <FaqSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home