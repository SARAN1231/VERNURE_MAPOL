import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhyMapol3 from "./WhyMapol3";
import "swiper/swiper-bundle.css";

import "swiper/css/navigation";

import Whymapol2 from "./Whymapol2";

const PageBannerSection = ({ background, title, subtitle }) => (
  <section
    className="page_banner_section text-center"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="container">
      <div className="heading_focus_text text-white">
        {title}
        <span className="badge bg-secondary">More Techco 😃</span>
      </div>
      <h1 className="page_title mb-0 text-white">{subtitle}</h1>
    </div>
  </section>
);

const IntroAboutSection = () => (
  <section className="intro_about_section section_space bg-light">
    <div className="intro_about_content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="image_wrap">
              <img
                src="./images/about/about_image_3.webp"
                alt="Techco - About Image"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="image_wrap position-relative">
              <img
                src="./images/about/about_image_4.webp"
                alt="Techco - About Image"
              />
              <a
                className="video_btn ripple_effect"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="heading_block mb-0">
        <div className="row justify-content-lg-between">
          <div className="col-lg-4">
            <div className="heading_focus_text">
              About
              <span className="badge bg-secondary text-white">Techco 🙂</span>
            </div>
            <h2 className="heading_text mb-0">
              We Provide You Flexible Services
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="heading_description mb-0">
              At Techco, we pride ourselves on offering dynamic and IT to suit
              your specific requirements. Our flexible approach means we can
              adjust our offerings to accommodate your evolving needs, whether
              you require comprehensive IT infrastructure support, strategic
              consultancy, software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PolicySection = () => (
  <section className="policy_section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="iconbox_block">
            <div className="iconbox_icon">
              <img src="./images/icons/icon_clock.svg" alt="Clock SVG Icon" />
            </div>
            <div className="iconbox_content">
              <h3 className="iconbox_title">Our History</h3>
              <p className="mb-0">
                Since 1997 we have been a visionary and a reliable software
                engineering partner for world-class brands. abbreviated as co.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="iconbox_block">
            <div className="iconbox_icon bg-warning-subtle">
              <img
                src="./images/icons/icon_dart_board_2.svg"
                alt="Dart Board SVG Icon"
              />
            </div>
            <div className="iconbox_content">
              <h3 className="iconbox_title">Our Mission</h3>
              <p className="mb-0">
                A mission statement clarifies what the company wants to achieve,
                who they want to support, and why they want to support them. On
                the other hand
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="iconbox_block">
            <div className="iconbox_icon bg-secondary-subtle">
              <img src="./images/icons/icon_target.svg" alt="Target SVG Icon" />
            </div>
            <div className="iconbox_content">
              <h3 className="iconbox_title">Our Vision</h3>
              <p className="mb-0">
                A vision statement for a company or organization focuses on the
                potential inherent in the company's future; it's about what they
                intend to be how you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ClientLogoSection = ({ clientLogos }) => (
  <section className="client_logo_section section_space">
    <div className="container">
      <div className="row funfact_wrapper">
        <div className="col-lg-8">
          <div className="row">
            <FunFact
              icon="icon_head.svg"
              value="25"
              text="Years of experience"
            />
            <FunFact icon="icon_check.svg" value="280" text="Success Stories" />
            <FunFact
              icon="icon_like.svg"
              value="5.6"
              text="Companies Trust Us"
            />
            <FunFact
              icon="icon_dart_board.svg"
              value="100"
              text="Results Guaranteed"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="our_world_employees">
            <div className="image_wrap">
              <img
                src="./images/about/about_image_1.webp"
                alt="Techco - Employees Group Image"
              />
            </div>
            <div className="content_wrap">
              <h3 className="title_text mb-0">
                <b className="d-block">12000+</b> employees in 30 countries in
                Europe
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FunFact = ({ icon, value, text }) => (
  <div className="col-md-6">
    <div className="funfact_block">
      <div className="funfact_icon">
        <img src={`./images/icons/${icon}`} alt={`Techco - SVG Icon ${text}`} />
      </div>
      <div className="funfact_content">
        <div className="counter_value">
          <span className="odometer" data-count={value}>
            0
          </span>
          <span>{value.includes("K") || value.includes("%") ? "" : "+"}</span>
        </div>
        <h3 className="funfact_title mb-0">{text}</h3>
      </div>
    </div>
  </div>
);

const Whymapol1 = () => {
  const clientLogos = [
    "./images/clients/client_logo_1.webp",
    "./images/clients/client_logo_2.webp",
    "./images/clients/client_logo_3.webp",
    "./images/clients/client_logo_4.webp",
    "./images/clients/client_logo_5.webp",
    "./images/clients/client_logo_6.webp",
    "./images/clients/client_logo_7.webp",
    // Add more logos as needed
  ];

  return (
    <main className="page_content">
      <Navbar />
      <PageBannerSection
        background="./images/shapes/bg_pattern_4.svg"
        title="About"
        subtitle="About Us"
      />
      <IntroAboutSection />
      <PolicySection />
      <ClientLogoSection clientLogos={clientLogos} />
      <Whymapol2 />
      <WhyMapol3 />
      <Footer />
    </main>
  );
};
export default Whymapol1;
