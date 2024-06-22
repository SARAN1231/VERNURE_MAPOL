import React from "react";
import "./App.css";
import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const WhyMapol3 = () => (
  <main>
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
                  <span className="badge bg-secondary text-white">Why Us</span>
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

    <section
      className="calltoaction_section parallaxie"
      style={{
        backgroundImage: "url('./images/backgrounds/bg_image_1.webp')",
      }}
    >
      <div className="container text-center">
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
      </div>
    </section>
  </main>
);

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

export default WhyMapol3;
