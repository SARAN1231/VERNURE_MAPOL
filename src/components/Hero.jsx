import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link } from "react-router-dom";

// Importing images
import shapeImage1 from "../assets/images/hero/shape_image_1.webp";
import shapeImage2 from "../assets/images/hero/shape_image_2.webp";
import shapeImage3 from "../assets/images/hero/shape_image_3.webp";
import shapeImage4 from "../assets/images/hero/shape_image_4.webp";

const HeroSection = () => {
  return (
    <main className="page_content">
      <section
        className="software_company_hero_section xb-hidden "
        style={{
          backgroundImage: "url('./images/backgrounds/bg_image_2.webp')",
          backgroundColor: "#093268",
          height: "100vh",
        }}
      >
        <div className="video-background">
          <video autoPlay muted loop>
            <source src="/video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content_wrap">
                <div
                  className="heading_focus_text has_underline text-white d-inline-flex"
                  style={{ marginTop: "50px" }}
                >
                  Perfect Company Solutions
                </div>
                <h1 className="text-white">
                  We Help Companies in Digitizing Their Businesses.
                </h1>
                <p>
                  In today's rapidly evolving digital landscape, staying ahead
                  of the curve is essential for businesses aiming to thrive and
                  succeed.
                </p>
                <ul className="step_list text-white unordered_list_block">
                  <li>Focus on quality first</li>
                  <li>Get to the market on time</li>
                </ul>
                <ul className="btns_group unordered_list p-0 justify-content-start">
                  <li>
                    <Link className="btn" to="/contact">
                      <span className="btn_label" data-text="Contact Us Today!">
                        Contact Us Today!
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a className="hotline_block" href="tel:+420318568511">
                      <span className="hotline_icon">
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span className="hotline_content">
                        <small>CONTACT US DAILY</small>
                        <strong className="text-white">
                          (+91) 44-4555-6177
                        </strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12" style={{paddingLeft:'120px',paddingRight:'120px',paddingTop:'60px'}}>
          <ul
            className="empowering_services unordered_list_block ps-lg-5"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "50px",
            }}
          >
            <li>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img src="./images/icons/icon_bulb.svg" alt="Bulb SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <h3
                    className="iconbox_title"
                    style={{ color: "white", fontSize: "23px" }}
                  >
                    Tailored Solutions
                  </h3>
                  <p className="mb-0">
                    Tailored consulting services aligned with each client's
                    business goals..
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="./images/icons/icon_user_rating.svg"
                    alt="User Rating SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3
                    className="iconbox_title"
                    style={{ color: "white", fontSize: "23px" }}
                  >
                    Collaborative Approach
                  </h3>
                  <p className="mb-0">
                    Building strong client partnerships by understanding
                    challenges and opportunities
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="./images/icons/icon_hand_shake.svg"
                    alt="Hand Shake SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3
                    className="iconbox_title"
                    style={{ color: "white", fontSize: "23px" }}
                  >
                    Expert Team Members
                  </h3>
                  <p className="mb-0">
                    Fostering strong client partnerships by understanding
                    challenges and opportunities.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="shape_image_1">
          <img src={shapeImage1} alt="Engine Image" />
        </div>
        <div className="shape_image_2">
          <img src={shapeImage2} alt="Engine Image" />
        </div>
        <div className="shape_image_3">
          <img src={shapeImage3} alt="Engine Image" />
        </div>
        <div className="shape_image_4">
          <img src={shapeImage4} alt="Engine Image" />
        </div> */}
      </section>
    </main>
  );
};

export default HeroSection;
