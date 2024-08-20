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

import BlogSection from "./components/Blogs";

import Bussiness from "./components/Bussiness";
import ServiceDetailsPage from "./components/ServiceDetails";
import "../node_modules/bootstrap/dist/js/bootstrap";
import CaseStudies from "./components/CaseStudies";
import CaseStudiesDetails from "./components/CaseStudiesDetails";
import SuccessStories from "./components/SuccessStories";
import Clientsbyindustry from "./components/Clientsbyindustry";
import LeadershipTeam from "./components/LeadershipTeam";
import Whymapol1 from "./components/Whymapol1";
import Careers from "./components/Careers";
import Industry4 from "./components/Industry4";
import Sustainability from "./Sustainability";
import OurPartners from "./components/OurPartners";
import NotFoundPage from "./components/NotFoundPage";
import ErpForlogistics from "./components/Products/ErpForlogistics";
import Barcode_Solutions from "./components/Solutions/Barcode_Solutions";
import Mobile_Application from "./components/Services/Mobile_Application";
function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Whymapol1 />} />
        <Route path="/Team" element={<LeadershipTeam />} />
        <Route path="/Mobile_Application" element={<Mobile_Application />} />
        <Route path="/Services" element={<ServiceDetailsPage />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/Clientsbyindustry" element={<Clientsbyindustry />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
        <Route path="/CaseStudiesDetails" element={<CaseStudiesDetails />} />
        <Route path="/Blogs" element={<BlogSection />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Industry4" element={<Industry4 />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/OurPartners" element={<OurPartners />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/ERP-Logistics" element={<ErpForlogistics />} />
        <Route path="/automobiles" element={<Barcode_Solutions />} />
      </Routes>
    </div>
  );
}

export default App;
