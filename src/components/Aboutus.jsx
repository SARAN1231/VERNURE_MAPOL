import React from "react";

import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Aboutus = () => {
  return (
    <section
      className="about_and_case_section section_space section_decoration "
      style={{
        backgroundImage: "url('./images/backgrounds/bg_image_2.webp')",
        backgroundColor: "#093268",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <img
                  src="./images/about/about_image_6.webp"
                  alt="Techco - About Image"
                />
              </div>
              <div
                className="about_funfact_info"
                style={{
                  backgroundImage: "url('./images/shapes/shape_bg_1.webp')",
                }}
              >
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <img
                        src="./images/avatar/avatar_1.webp"
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <img
                        src="./images/avatar/avatar_2.webp"
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <img
                        src="./images/avatar/avatar_3.webp"
                        alt="Customer Avatar"
                      />
                    </li>
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">Happy Customer</p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="6">
                        0
                      </span>
                      <span>K+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="100">
                        0
                      </span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <a className="btn btn-primary" href="about.html">
                  <span className="btn_label" data-text="Learn More">
                    Learn More
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <img src="./images/icons/icon_global.svg" alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <img src="./images/shapes/shape_line.webp" alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage:
                      "url('./images/shapes/shape_title_under_line.svg')",
                  }}
                >
                  About Us
                </div>
                <h2 className="heading_text">
                  Mapol <mark>Mission & Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  At Techco, our mission is to empower businesses through
                  innovative software solutions that streamline operations,
                  foster growth, and drive success. With a commitment to
                  excellence and customer satisfaction we strive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{
                backgroundImage:
                  "url('./images/shapes/shape_title_under_line.svg')",
              }}
            >
              Case Studies
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Case</mark> Studies
            </h2>
          </div>

          <div className="case_studies_wrapper">
            <CaseStudy
              imageSrc="./images/case/case_image_1.webp"
              category="Computer Software"
              title="Astarte Medical"
              description="Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project."
              industry="Computer software"
              country="Germany, Issum"
              technologies={[
                "./images/case/icon_angular.svg",
                "./images/case/icon_elephent.svg",
              ]}
            />
            <CaseStudy
              imageSrc="./images/case/case_image_2.webp"
              category="Healthcare"
              title="CAE Blue Phantom"
              description="CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides."
              industry="Wellness & Fitness"
              country="Germany, Issum"
              technologies={[
                "./images/case/icon_angular.svg",
                "./images/case/icon_netcore.svg",
              ]}
            />
            <CaseStudy
              imageSrc="./images/case/case_image_3.webp"
              category="Real Estate"
              title="Liberkeys"
              description="Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines."
              industry="Real estate"
              country="France, Paris"
              technologies={[
                "./images/case/vuejs.svg",
                "./images/case/icon_python.svg",
              ]}
            />
          </div>

          <div className="btns_group pb-0">
            <a className="btn btn-primary" href="portfolio.html">
              <span className="btn_label" data-text="View More Cases Study">
                View More Cases Study
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="./images/shapes/shape_space_2.svg" alt="Techco Shape" />
      </div>
    </section>
  );
};

const CaseStudy = ({
  imageSrc,
  category,
  title,
  description,
  industry,
  country,
  technologies,
}) => {
  return (
    <div className="case_study_block">
      <div className="case_study_image">
        <img src={imageSrc} alt="Techco - Cases Image" />
      </div>
      <div className="case_study_content">
        <ul className="category_list unordered_list text-uppercase">
          <li>
            <a href="portfolio.html">{category}</a>
          </li>
        </ul>
        <h3 className="case_title">
          <a href="portfolio_details.html">{title}</a>
        </h3>
        <p>{description}</p>
        <ul className="icon_list unordered_list">
          <li>
            <span className="icon_list_text">
              <strong className="text-dark">Industry:</strong> {industry}
            </span>
          </li>
          <li>
            <span className="icon_list_text">
              <strong className="text-dark">Country:</strong> {country}
            </span>
          </li>
        </ul>
        <ul
          className="case_technologies unordered_list"
          data-text="Core Technologies:"
        >
          {technologies.map((tech, index) => (
            <li key={index}>
              <img src={tech} alt={`Tech ${index + 1}`} />
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href="portfolio_details.html">
          <span className="btn_label" data-text="Read Case">
            Read Case
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Aboutus;
