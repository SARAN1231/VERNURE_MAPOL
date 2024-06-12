import "../src/assets/css/style.css";
import "../src/assets/css/fontawesome.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/magnific-popup.min.css";
import "../src/assets/css/odometer.min.css";
import "../src/assets/css/style.css.map";
import "../src/assets/css/swiper-bundle.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./components/Contact";
import Whymapol from "./components/Whymapol";
import BlogSection from "./components/Blogs";
import TeamPage from "./components/Leadership";
import Bussiness from "./components/Bussiness";
import ServiceDetailsPage from "./components/ServiceDetails";

import CaseStudies from "./components/CaseStudies";
import CaseStudiesDetails from "./components/CaseStudiesDetails";
import SuccessStories from "./components/SuccessStories";
import Clientsbyindustry from "./components/Clientsbyindustry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Whymapol />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/Business_approach" element={<Bussiness />} />
        <Route path="/Services" element={<ServiceDetailsPage />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/Clientsbyindustry" element={<Clientsbyindustry />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
        <Route path="/CaseStudiesDetails" element={<CaseStudiesDetails />} />
        <Route path="/Blogs" element={<BlogSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
