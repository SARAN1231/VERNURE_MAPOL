import React from "react";
import HeroSection from "./Hero";
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
import Our_Products from "./Our_Products";

const Home = () => {
  const [active , setActive] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div className="page_wrapper" style={{ overflowX: "hidden" }}>
      {/* <div className="particle">
          <Particles/>
        </div> */}
        <div className={active ? "activenav" : ""} >
      <Navbar />
      <HeroSection />
      <Our_Products />
      <OurClients />
      <Aboutus />
      <Technologies />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
    </div>
  );
};

export default Home;
