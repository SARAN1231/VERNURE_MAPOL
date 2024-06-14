import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import shapeTitleUnderline from "./images/shapes/shape_title_under_line.svg";
import background from "../assets/images/hero/business_consulting_hero_image_1.webp"
import circleEngine1 from "../assets/images/hero/circle_engine_1.webp";
import circleEngine2 from "../assets/images/hero/circle_engine_2.webp";
import circleEngine3 from "../assets/images/hero/circle_engine_3.webp";
import circleEngine4 from "../assets/images/hero/circle_engine_4.png";
import shapeImage1 from "../assets/images/hero/shape_image_1.webp";
import shapeImage2 from "../assets/images/hero/shape_image_2.webp";
import shapeImage3 from "../assets/images/hero/shape_image_3.webp";
import shapeImage4 from "../assets/images/hero/shape_image_4.webp";

const HeroSection = () => {
  return (
    <main className="page_content">
      <section className="software_company_hero_section xb-hidden">
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
                  We Help Companies in <mark>Digitizing</mark> Their Businesses.
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
                    <a className="btn" href="pricing.html">
                      <span className="btn_label" data-text="Contact Us Today!">
                        Contact Us Today!
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="hotline_block" href="tel:+420318568511">
                      <span className="hotline_icon">
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span className="hotline_content">
                        <small>CONTACT US DAILY</small>
                        <strong className="text-white">
                          (+420) 318 568 511
                        </strong>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-6"> */}
            {/* <div className="engine_image">
                <div className="image_wrap_1">
                  <img src={circleEngine1} alt="Engine Image" />
                </div>
                <div className="image_wrap_2">
                  <img src={circleEngine2} alt="Engine Image" />
                </div>
                <div className="image_wrap_3">
                  <img src={circleEngine3} alt="Engine Image" />
                </div>
                <div className="image_wrap_4">
                  <img src={circleEngine4} alt="Engine Image" />
                </div>
              </div> */}

            {/* </div> */}
            {/* <div className="col-lg-6">
              <div className="business_consulting_hero_image">
                <img
                  className="hero_image"
                  src={background}
                  alt="Business Consulting"
                   
                />

                <div
                  className="funfact_block capsule_layout wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="funfact_content">
                    <div className="counter_value">
                      <span className="odometer" data-count="22">
                        0
                      </span>
                      <span>M+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Happy Customer</h3>
                  </div>
                  <div className="funfact_icon">
                    <img
                      src="./images/icons/icon_user_3.svg"
                      alt="Techco - SVG Icon User"
                    />
                  </div>
                </div>

                <div
                  className="funfact_block capsule_layout wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="funfact_icon">
                    <img
                      src="./images/icons/icon_wallet.svg"
                      alt="Techco - SVG Icon Wallet"
                    />
                  </div>
                  <div className="funfact_content">
                    <h3 className="funfact_title mb-0">Company Value</h3>
                    <div className="counter_value">
                      <span>$</span>
                      <span className="odometer" data-count="500000">
                        0
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="funfact_block capsule_layout wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="funfact_content pt-2 pb-1">
                    <h3 className="funfact_title mb-0 text-center">
                      Success Rate
                    </h3>
                    <div className="counter_value justify-content-center">
                      <span className="odometer" data-count="98">
                        0
                      </span>
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="shape_image_1">
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
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
