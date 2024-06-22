import React from "react";
import HeroSection from "./Hero";
import OurServices from "./Our_Services";
import OurClients from "./Our_Clients";
import Aboutus from "./Aboutus";
import Technologies from "./Technologies";
import FaqSection from "./Faqsection";
import ContactSection from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Particles from "./Particles";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Home = () => {
  return (
    <div className="page_wrapper" style={{ overflowX: "hidden" }}>
      {/* <div className="particle">
          <Particles/>
        </div> */}
      <Navbar />
      <HeroSection />
      <OurServices />
      <OurClients />
      <Aboutus />
      <Technologies />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
