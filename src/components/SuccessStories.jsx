import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Clientswiper from "./Clientswiper";
import Marquees from "./Marquees";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const SuccessStories = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: "url('./images/shapes/bg_pattern_4.svg')",
        }}
      >
        <Container>
          <div className="heading_focus_text text-white">
            Our
            <span className="badge bg-secondary">Success Stories 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white"> Success Stories</h1>
        </Container>
      </section>
      <Clientswiper />
      <Marquees />
      <BusinessConsultingService />

      <Footer />
    </div>
  );
};
const BusinessConsultingService = () => {
  return (
    <section
      className="business_consulting_service_section section_space"
      style={{
        backgroundImage: "url('./images/backgrounds/bg_image_3.webp')",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="heading_block text-center">
              <h2 className="heading_text">
                Transformative Solutions Tailored to Your Needs
              </h2>
              <p className="heading_description mb-0 text-dark">
                Driving Growth and Innovation Through Customized Strategies
              </p>
            </div>
          </div>
        </div>

        <div className="business_consulting_services row">
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_analisis_2.svg"
                  alt="Analisis SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">
                    Strategic Planning and Execution
                  </a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_process.svg"
                  alt="Process SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">
                    Business Process Optimization
                  </a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_chart_2.svg"
                  alt="Chart SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">
                    Digital Transformation Consulting
                  </a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_meeting.svg"
                  alt="Meeting SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">
                    Strategic Planning and Execution
                  </a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_bulb_2.svg"
                  alt="Bulb SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">Change Management Solutions</a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_speed_miter.svg"
                  alt="Speed Miter SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">
                  <a href="service_details.html">
                    Performance Metrics and KPI Development
                  </a>
                </h3>
                <p className="mb-0">
                  Our consulting services are customized to suit the unique
                  needs and goals of each client, ensuring precise alignment
                  with their business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btns_group pb-0">
          <a className="creative_btn" href="pricing.html">
            <span className="btn_label bg-primary">Get Started Today</span>
            <span className="btn_icon">
              <i className="bg-primary fa-solid fa-arrow-up-right"></i>
              <i className="bg-primary fa-solid fa-arrow-up-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
