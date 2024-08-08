import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceDetailsPage = () => {
  return (
    <main className="page_content">
      <Navbar />
      {/* Page Banner Section */}
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: "url('./images/shapes/bg_pattern_4.svg')",
        }}
      >
        <Container>
          <div className="heading_focus_text text-white">
            Services
            <span className="badge bg-secondary">Details 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">Services Details</h1>
        </Container>
      </section>

      {/* Service Details Section */}
      <section className="service_details_section section_space bg-light">
        <Container>
          <div className="details_item_image position-relative">
            <img
              src="./images/services/service_details_image_1.webp"
              alt="Service Details Image"
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
          <h2 className="details_item_title">
            Network Infrastructure and Design
          </h2>
          <p>
            Network infrastructure and design are the backbone of modern
            businesses, serving as the foundation upon which all digital
            operations rely. At our IT solution agency, we specialize in
            crafting robust and reliable network architectures tailored to meet
            the unique needs of our clients. From small businesses to large
            enterprises, we understand the critical importance of a
            well-designed network infrastructure in driving efficiency,
            security, and scalability. Our team of experienced professionals
            works closely with clients.
          </p>
          <p>
            We take a holistic approach to network design, considering factors
            such as bandwidth requirements, security protocols, scalability, and
            future growth potential. By leveraging industry best practices and
            cutting-edge technologies,
          </p>

          <h3 className="details_item_info_title">Service Process</h3>
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage:
                      'url(".././images/shapes/shape_title_under_line.svg")',
                  }}
                >
                  Working Process
                </div>
                <h2 className="heading_text mb-0">
                  Our <mark>Approach</mark>
                </h2>
              </div>
              <div className="accordion" id="service_process_faq">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_one"
                    aria-expanded="true"
                    aria-controls="collapse_one"
                  >
                    01. Listening to Your Needs
                  </div>
                  <div
                    id="collapse_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Data - driven diagnostic and predictive app for
                        improving outcomes Data driven diagnostic and predictive
                        app for improving.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                    aria-controls="collapse_two"
                  >
                    02. Tailored Solutions
                  </div>
                  <div
                    id="collapse_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Data - driven diagnostic and predictive app for
                        improving outcomes Data driven diagnostic and predictive
                        app for improving.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                    aria-controls="collapse_three"
                  >
                    03. Tactical Alignment
                  </div>
                  <div
                    id="collapse_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Data - driven diagnostic and predictive app for
                        improving outcomes Data driven diagnostic and predictive
                        app for improving.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                    aria-controls="collapse_four"
                  >
                    04. Measurable Results
                  </div>
                  <div
                    id="collapse_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Data - driven diagnostic and predictive app for
                        improving outcomes Data driven diagnostic and predictive
                        app for improving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="content_layer_group unordered_list_block text-center">
                <li
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_one"
                  aria-expanded="true"
                  aria-controls="collapse_one"
                >
                  <span>Listening to Your Needs</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_two"
                  aria-expanded="false"
                  aria-controls="collapse_two"
                >
                  <span>Tailored Solutions</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_three"
                  aria-expanded="false"
                  aria-controls="collapse_three"
                >
                  <span> Tactical Alignment</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_four"
                  aria-expanded="false"
                  aria-controls="collapse_four"
                >
                  <span>Measurable Results</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="details_item_info_title">Services Outcome</h3>
          <p className="mb-4">
            Here are six key points that can be associated with a digital
            Transformation gallery case global Digital Systems Engineer Services
            leader helping Fortune 500 companies on their innovation agenda:
          </p>
          <Row className="mb-4">
            <Col lg={6}>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Scalability and Flexibility
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Security and Compliance
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Performance Optimization
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">User Experience</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Security and Compliance
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">Training and Education</span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_2.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_3.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_4.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
      <Footer />
    </main>
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

export default ServiceDetailsPage;


