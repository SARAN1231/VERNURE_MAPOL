import React from "react";
import "./App.css";
import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";


SwiperCore.use([Autoplay, Navigation]);

function Footer() {
  return (
    <footer
      className="site_footer footer_layout_2 section_decoration"
      style={{
        backgroundImage: "url('./images/bg_pattern_3.svg')",
      }}
    >
      <div className="decoration_item shape_image_1">
        <svg
          width="1390"
          height="50"
          viewBox="0 0 1390 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1390L1350 50H40L0 0Z" fill="#E3F0FF" />
        </svg>
      </div>
      <div className="container">
        <div className="service_pill_carousel swiper">
          <Swiper
            loop={true}
            speed={4000}
            spaceBetween={20}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".spc-swiper-button-next",
              prevEl: ".spc-swiper-button-prev",
            }}
            breakpoints={{
              321: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1025: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {[
              "ERP for Manufacturing",
              "ERP for Logistics",
              "ESG Automation",
              "Asset Tracking",
              "Paper Production Tracking",
              "FMEA Insight",
              "Last Mile Delivery",
              "Vendor Suite",
              "HRMS Suite",
            ].map((service, index) => (
              <SwiperSlide key={index}>
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>{service}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h2 className="footer_info_title">For Industries</h2>
                <ul className="icon_list unordered_list_block">
                  {[
                    "Automobiles",
                    "Manufacturing",
                    "Logistics & Supply Chain",
                    "Other Industries",
                    "Cloud Services",
                    "IT Consulting Services",
                    "Business Suites",
                    "Safety & Sustainability",
                    "Industry 4.0",
                    "e-Invoice",
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#main_menu_dropdown">
                        <span className="icon_list_text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Products</h3>
                <ul className="icon_list unordered_list_block">
                  {[
                    "ERP for Manufacturing",
                    "ERP for Logistics",
                    "ESG Automation",
                    "Asset Tracking",
                    "Paper Production Tracking",
                    "FMEA Insight",
                    "Last Mile Delivery",
                    "Vendor Suite",
                    "HRMS Suite",
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#main_menu_dropdown">
                        <span className="icon_list_text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Company</h3>
                <ul className="icon_list unordered_list_block">
                  {[
                    "Why MAPOL?",
                    "Leadership Team",
                    "Business Approach",
                    "Our Partners",
                    "Careers",
                    "Contact Us",
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#main_menu_dropdown">
                        <span className="icon_list_text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">CHENNAI OFFICE</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href="#main_menu_dropdown">
                      <span className="icon_list_text">
                        109 & 110, 1st Floor, Chamiers Road, Teynampet,
                        Chennai-600018, Tamilnadu, India. +91-44-4555 6177
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">REACH US</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href="#main_menu_dropdown">
                      <span className="icon_list_text">
                        +91 9262-400-400 , +91 9362-400-400 +91 9940-567-267
                        info@mapolgroup.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="social_icons_block unordered_list">
              {[
                { href: "#!", icon: "fa-facebook-f" },
                { href: "#!", icon: "fa-twitter" },
                { href: "#!", icon: "fa-linkedin-in" },
                { href: "#!", icon: "fa-youtube" },
              ].map((social, index) => (
                <li key={index}>
                  <a href={social.href}>
                    <i className={`fa-brands ${social.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
            {/* <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Newsletter</h2>
                <p>
                  Sign up to Techco weekly newsletter to get the latest updates.
                </p>
                <form className="footer_newslatter_2" action="#">
                  <label htmlFor="footer_mail_input">
                    <img
                      src="./images/icons/icon_mail_2.svg"
                      alt="Mail SVG Icon"
                    />
                  </label>
                  <input
                    id="footer_mail_input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit">Send</button>
                </form>
                <ul className="social_icons_block unordered_list">
                  {[
                    { href: "#!", icon: "fa-facebook-f" },
                    { href: "#!", icon: "fa-twitter" },
                    { href: "#!", icon: "fa-linkedin-in" },
                    { href: "#!", icon: "fa-youtube" },
                  ].map((social, index) => (
                    <li key={index}>
                      <a href={social.href}>
                        <i className={`fa-brands ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="footer_bottom"
        style={{
          backgroundImage: 'url("./images/shape_space_6.svg")',
        }}
      >
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 MAPOL Groups, All rights reserved.
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <a href="#!">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Terms of Use</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle"></i>
                </span>
                <span className="icon_list_text">Privacy Policy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
