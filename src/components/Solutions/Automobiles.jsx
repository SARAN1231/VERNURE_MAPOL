// ITSolutionHeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Navbar from '../Navbar';
const ITSolutionHeroSection = () => {
  return ( 
    <>
    <Navbar />
    <section className="it_solution_hero_section relative">

      <Container>
        <Row>
          <Col lg={7}>
            <div
              className="it_solution_hero_content bg-cover bg-center p-5"
              style={{ backgroundImage: "url('./images/shapes/it_solution_hero_bg_1.svg')" }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                👋 Hi We <span className="badge bg-secondary text-white">Are Techco</span>
              </div>
              <h1>Grow your Business Organic & IT Solution Technology</h1>
              <p>
                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
              </p>
              <ul className="btns_group unordered_list p-0 d-flex">
                <li className="mr-2">
                  <Button variant="primary" href="pricing.html">
                    <span className="btn-label">Get Started</span>
                    <i className="fa-solid fa-arrow-up-right ml-2"></i>
                  </Button>
                </li>
                <li>
                  <div className="review_short_info d-flex align-items-center">
                    <img src="./images/icons/icon_stars_trustpilot.svg" alt="Techco - Trustpilot Review" />
                    <span>4.8</span>
                    <div className="review-counter">From <b>200+</b> reviews</div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <ul className="it_solution_hero_images unordered_list p-0">
              <li>
                <img src="assets/images/hero/it_solution_hero_image_1.webp" alt="Techco - IT Solution - Hero Image 1" />
              </li>
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">150+</div>
                  <p>Worldwide Country has lots of clients</p>
                  <ul className="avatar-group d-flex p-0">
                    <li><img src="./images/avatar/avatar_1.webp" alt="Techco - Avatar Image" /></li>
                    <li><img src="./images/avatar/avatar_2.webp" alt="Techco - Avatar Image" /></li>
                    <li><img src="./images/avatar/avatar_3.webp" alt="Techco - Avatar Image" /></li>
                    <li>5k+</li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list p-0">
                  <li>
                    <a href="#!">
                      <span>Data Security</span>
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-solid fa-plus"></i>
                      <span>Web Development</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>Analytics & Optimization</span>
                      <i className="fa-solid fa-plus"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="business_growth_content bg-cover bg-center"
                  style={{ backgroundImage: "url('assets/images/hero/it_solution_hero_image_2.webp')" }}
                >
                  <div className="progress_content">
                    <div className="business_growth" data-pie='{ "percent": 88 }'></div>
                    <p>Get 88% of the best services and growth business</p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default ITSolutionHeroSection;
