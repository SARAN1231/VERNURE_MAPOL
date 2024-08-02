// ITSolutionHeroSection.js
import React from 'react';
import { Container, Row, Col, Button,Image ,Badge} from 'react-bootstrap';
import Footer from '../Footer';
import Navbar from '../Navbar';
const ITSolutionHeroSection = () => {
  return ( 
    <>
    <Navbar />
    <main class="page_content">
    <section className="it_solution_hero_section" style={{marginLeft:"20px"}}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className="it_solution_hero_content" style={{ backgroundImage: "url('./images/shapes/it_solution_hero_bg_1.svg')" }}>
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                👋 Hi We <Badge bg="secondary" text="white">Are Techco</Badge>
              </div>
              <h1>
                Grow your Business Organic & IT Solution Technology
              </h1>
              <p>
                In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.
              </p>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Button href="pricing.html" className="btn">
                    <span className="btn_label" data-text="Get Started">Get Started</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Button>
                </li>
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <Image src="./images/icons/icon_stars_trustpilot.svg" alt="Techco - Trustpilot Review" />
                      <span>4.8</span>
                    </div>
                    <div className="review_counter">From <b>200+</b> reviews</div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <ul className="it_solution_hero_images unordered_list">
              <li>
                <Image src="assets/images/hero/it_solution_hero_image_1.webp" alt="Techco - IT Solution - Hero Image 1" />
              </li>
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">150+</div>
                  <p>
                    Worldwide Country has lots of clients
                  </p>
                  <ul className="avatar_group unordered_list">
                    <li>
                      <Image src="./images/avatar/avatar_1.webp" alt="Techco - Avatar Image" />
                    </li>
                    <li>
                      <Image src="./images/avatar/avatar_2.webp" alt="Techco - Avatar Image" />
                    </li>
                    <li>
                      <Image src="./images/avatar/avatar_3.webp" alt="Techco - Avatar Image" />
                    </li>
                    <li>
                      5k+
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list_block">
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
                <div className="business_growth_content" style={{ backgroundImage: "url('assets/images/hero/it_solution_hero_image_2.webp')" }}>
                  <div className="progress_content">
                    <div className="business_growth" data-pie='{ "percent": 88 }'></div>
                    <p>
                      get 88% of the best services and growth business
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="about_section section_space">
      <Container>
        <Row className="align-items-center justify-content-lg-between">
        <div className="col-lg-6">
              <div className="image_wrap">
                <img
                  src="./images/about/about_image_5.webp"
                  alt="Techco - About Image"
                />
              </div>
            </div>
          <Col lg={5}>
            <div className="about_content">
              <div className="heading_block">
                <div className="heading_focus_text">
                  We are 😃
                  <Badge bg="secondary" text="white">Techco</Badge>
                </div>
                <h2 className="heading_text">
                  Our Commitment to Client Satisfaction
                </h2>
                <p className="heading_description mb-0">
                  At Techco, our commitment to client satisfaction is at the core of everything we do. We understand clients' success.
                </p>
              </div>
              <ul className="icon_list unordered_list_block mb-5">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    Grow your business the right way.
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    Let business growth help your business grow.
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">
                    Helping you to get better.
                  </span>
                </li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Button href="pricing.html" className="btn">
                    <span className="btn_label" data-text="Get Started">Get Started</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Button>
                </li>
                
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    

    <section className="policy_section">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src="./images/icons/icon_user_check.svg" alt="User Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Expert Team Members</h3>
                <p className="mb-0">
                  We take pride in assembling a <br /> diverse and highly skilled.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon bg-warning-subtle">
                <Image src="./images/icons/icon_headphone.svg" alt="Headphone SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Fastest Customer Service</h3>
                <p className="mb-0">
                  We pride ourselves on providing the fastest customer service industry.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon bg-secondary-subtle">
                <Image src="./images/icons/icon_dollar.svg" alt="Dollar SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Reasonable Pricing</h3>
                <p className="mb-0">
                  We believe in providing reasonable pricing that offers exceptional.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <br />

    <section className="service_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <img
                  src="./images/about/about_image_5.webp"
                  alt="Techco - About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">
                      Why Us
                    </span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  <ServiceItem
                    icon="./images/icons/icon_check_2.svg"
                    title="Quality Comes First"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_leaf.svg"
                    title="Flexible Cooperation"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_box.svg"
                    title="On-time Delivery"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_receipt_add.svg"
                    title="Transparent Costs"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_monitor.svg"
                    title="Qualified Developers"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_microscope.svg"
                    title="Quick Scale-up"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
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
    </main>
    <Footer />
    </>
  );
};


const ServiceItem = ({ icon, title }) => (
  <li>
    <a className="iconbox_block layout_icon_left" href="service_details.html">
      <span className="iconbox_icon">
        <img src={icon} alt="Service Icon" />
      </span>
      <span className="iconbox_content">
        <strong className="iconbox_title mb-0">{title}</strong>
      </span>
    </a>
  </li>
);
export default ITSolutionHeroSection;
