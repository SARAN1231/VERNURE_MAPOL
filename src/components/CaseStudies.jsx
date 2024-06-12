import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const CaseStudies = () => {
  return (
    <main className="page_content">
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
            <span className="badge bg-secondary">Case Studies 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white"> Case Studies</h1>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio_section section_space bg-light">
        <Container>
          {/* <div className="filter_elements_nav">
            <ul className="unordered_list justify-content-center">
              <li className="active" data-filter="all">
                See All
              </li>
              <li data-filter="technology">Technology</li>
              <li data-filter="helpdesk">Helpdesk</li>
              <li data-filter="analysis">Analysis</li>
              <li data-filter="marketing">Marketing</li>
            </ul>
          </div> */}
          <div className="filter_elements_wrapper row">
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="marketing">
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link
                    className="portfolio_image_wrap bg-light"
                    to={"/CaseStudiesDetails"}
                  >
                    <img
                      src="./images/portfolio/portfolio_item_image_11.webp"
                      alt="Mobile App Design"
                    />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link to={"/CaseStudiesDetails"}>
                      Unlocking Potential Explore Our Comprehensive IT Portfolio
                    </Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-tags"></i> Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to={"/CaseStudiesDetails"}>
                        <i className="fa-solid fa-building"></i> Industry
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </section>

      {/* Call To Action Section */}
      <section
        className="calltoaction_section parallaxie"
        style={{
          backgroundImage: "url('./images/backgrounds/bg_image_1.webp')",
        }}
      >
        <Container className="text-center">
          <div className="heading_block text-white">
            <h2 className="heading_text">Ready to Work, Let's Chat</h2>
            <p className="heading_description mb-0">
              Our team of experts is ready to collaborate with you every step of
              the way, from initial consultation to implementation.
            </p>
          </div>
          <a className="btn btn-primary" href="contact.html">
            <span className="btn_label" data-text="Contact Us Today!">
              Contact Us Today!
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </a>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default CaseStudies;
