import React, { useEffect } from "react";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Clientsbyindustry = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: "url('./images/shapes/bg_pattern_4.svg')",
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            <span className="badge bg-secondary">Team</span>
            Members 😍
          </div>
          <h1 className="page_title mb-0 text-white">Team Member</h1>
        </div>
      </section>
      <AboutSection />
      <PolicySection/>
      <PortfolioSection />
      <ReviewSection />
      <ServiceAndCallToActionSection />
      <Footer />
    </div>
  );
};

const ServiceAndCallToActionSection = () => (
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

const PolicySection = () => {
  return (
    <section className="policy_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img
                  src="./images/icons/icon_user_check.svg"
                  alt="User Check SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Expert Team Members</h3>
                <p className="mb-0">
                  We take pride in assembling a <br /> diverse and highly
                  skilled team.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon bg-warning-subtle">
                <img
                  src="./images/icons/icon_headphone.svg"
                  alt="Headphone SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Fastest Customer Service</h3>
                <p className="mb-0">
                  We pride ourselves on providing the fastest customer service
                  in the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon bg-secondary-subtle">
                <img
                  src="./images/icons/icon_dollar.svg"
                  alt="Dollar SVG Icon"
                />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Reasonable Pricing</h3>
                <p className="mb-0">
                  We believe in providing reasonable pricing that offers
                  exceptional value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const AboutSection = () => {
  return (
    <section className="about_section section_space">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="about_image_1">
              <img
                src="./images/about/about_image_9.webp"
                alt="Techco - About Image"
              />
              <img
                src="./images/about/about_image_11.webp"
                data-parallax='{"y" : 80, "smoothness": 6}'
                alt="Techco - About Image"
              />
              <img
                src="./images/about/about_image_10.webp"
                data-parallax='{"y" : -80, "smoothness": 6}'
                alt="Techco - About Image"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block">
                <div className="heading_focus_text">
                  We are 😃
                  <span className="badge bg-secondary text-white">Techco</span>
                </div>
                <h2 className="heading_text">
                  Our Commitment to Client Satisfaction
                </h2>
                <p className="heading_description mb-0">
                  At Techco, our commitment to client satisfaction is at the
                  core of everything we do. We understand clients' success.
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
                  <a className="btn" href="pricing.html">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="video_btn"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  >
                    <span className="btn_icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="btn_label">How We Works</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const ReviewSection = () => {
  return (
    <section
      className="review_section section_space bg-light"
      style={{
        backgroundImage: "url('./images/shapes/bg_pattern_2.svg')",
      }}
    >
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            <span className="badge bg-secondary text-white">Client</span>
            Testimonial 🙂
          </div>
          <h2 className="heading_text mb-0">What clients say</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="review_block pb-0">
              <h3 className="review_title">“Amazing services”</h3>
              <p className="review_commtent">
                As a startup, we needed a technology partner who could help us
                bring our vision to life. Itsafe exceeded our expectations with
                their innovative solutions and proactive approach. They guided
                us through every step of the process, our journey together.
              </p>
              <div className="review_admin">
                <div className="review_admin_image">
                  <img
                    src="./images/avatar/avatar_4.webp"
                    alt="Roman Dymtro"
                  />
                </div>
                <div className="review_admin_info">
                  <h4 className="review_admin_name">Roman Dymtro</h4>
                  <span className="review_admin_designation">
                    Director of Marketing
                  </span>
                </div>
              </div>
            </div>
            <div className="review_block pb-0">
              <h3 className="review_title">“Fast Respond”</h3>
              <p className="review_commtent">
                Working with Techco was a seamless experience from start to
                finish. Their team took the time to understand our business
                goals and challenges, and they delivered a solution that
                addressed our needs perfectly. Their professionalism, expertise,
                and dedication to customer satisfaction were evident throughout
                the project. We look forward to working with Techco on future
                initiatives.
              </p>
              <div className="review_admin">
                <div className="review_admin_image">
                  <img
                    src="./images/avatar/avatar_6.webp"
                    alt="Bohdan Maksym"
                  />
                </div>
                <div className="review_admin_info">
                  <h4 className="review_admin_name">Bohdan Maksym</h4>
                  <span className="review_admin_designation">
                    Monprofit Director
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="review_block pb-0">
              <h3 className="review_title">“We Are Satisfied’’</h3>
              <p className="review_commtent">
                We've been partnering with Techco for several years, and they
                have consistently delivered exceptional results. From custom
                software development to cloud services integration, their
                solutions have helped us stay ahead of the competition and adapt
                to evolving market demands. Their team's expertise, reliability,
                and commitment to customer satisfaction make them our go-to IT
                partner.
              </p>
              <div className="review_admin">
                <div className="review_admin_image">
                  <img
                    src="./images/avatar/avatar_5.webp"
                    alt="Michel johnson"
                  />
                </div>
                <div className="review_admin_info">
                  <h4 className="review_admin_name">Michel johnson</h4>
                  <span className="review_admin_designation">
                    Tech Startup Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="review_block pb-0">
              <h3 className="review_title">“Amazing services”</h3>
              <p className="review_commtent">
                The team at Techco surpassed our expectations. Their meticulous
                project management and technical prowess were exceptional. They
                closely collaborated with us, ensuring a that not only met but
                exceeded our needs. We are thrilled with the outcome.
              </p>
              <div className="review_admin">
                <div className="review_admin_image">
                  <img
                    src="./images/avatar/avatar_7.webp"
                    alt="Anatoliy Vasyl"
                  />
                </div>
                <div className="review_admin_info">
                  <h4 className="review_admin_name">Anatoliy Vasyl</h4>
                  <span className="review_admin_designation">
                    Director of Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  useEffect(() => {
    const portfolioSwiper = new Swiper(".portfolio_carousel", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".portfolio-swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      portfolioSwiper.destroy();
    };
  }, []);

  return (
    <section className="portfolio_section xb-hidden section_space pb-0">
      <div className="container">
        <div className="heading_block">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="heading_focus_text">
                <span className="badge bg-secondary text-white">Crafting</span>{" "}
                Success With 😍 Project
              </div>
              <h2 className="heading_text">Our Recent Best Works</h2>
              <p className="heading_description mb-0">
                Our recent projects highlight our expertise in delivering
                tailored solutions that meet the unique needs and objectives of
                our clients, custom software.
              </p>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end">
              <a className="btn btn-primary" href="pricing.html">
                <span className="btn_label" data-text="All Works">
                  All Works
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_carousel">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="portfolio_block">
              <div className="portfolio_image">
                <a
                  className="portfolio_image_wrap bg-light"
                  href="portfolio_details.html"
                >
                  <img
                    src="./images/portfolio/portfolio_item_image_1.webp"
                    alt="Mobile App Design"
                  />
                </a>
              </div>
              <div className="portfolio_content">
                <h3 className="portfolio_title">
                  <a href="portfolio_details.html">Mobile App Design</a>
                </h3>
                <ul className="category_list unordered_list">
                  <li>
                    <a href="portfolio.html">App Design</a>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-light"
                  href="portfolio_details.html"
                >
                  <span className="btn_label" data-text="Explore">
                    Explore
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="portfolio_block">
              <div className="portfolio_image">
                <a
                  className="portfolio_image_wrap bg-light"
                  href="portfolio_details.html"
                >
                  <img
                    src="./images/portfolio/portfolio_item_image_2.webp"
                    alt="Dashboard Design"
                  />
                </a>
              </div>
              <div className="portfolio_content">
                <h3 className="portfolio_title">
                  <a href="portfolio_details.html">Dashboard Design</a>
                </h3>
                <ul className="category_list unordered_list">
                  <li>
                    <a href="portfolio.html">Web Design</a>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-light"
                  href="portfolio_details.html"
                >
                  <span className="btn_label" data-text="Explore">
                    Explore
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="portfolio_block">
              <div className="portfolio_image">
                <a
                  className="portfolio_image_wrap bg-light"
                  href="portfolio_details.html"
                >
                  <img
                    src="./images/portfolio/portfolio_item_image_3.webp"
                    alt="Technology Solution"
                  />
                </a>
              </div>
              <div className="portfolio_content">
                <h3 className="portfolio_title">
                  <a href="portfolio_details.html">Technology Solution</a>
                </h3>
                <ul className="category_list unordered_list">
                  <li>
                    <a href="portfolio.html">3D Design</a>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-light"
                  href="portfolio_details.html"
                >
                  <span className="btn_label" data-text="Explore">
                    Explore
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="portfolio_block">
              <div className="portfolio_image">
                <a
                  className="portfolio_image_wrap bg-light"
                  href="portfolio_details.html"
                >
                  <img
                    src="./images/portfolio/portfolio_item_image_1.webp"
                    alt="Mobile App Design"
                  />
                </a>
              </div>
              <div className="portfolio_content">
                <h3 className="portfolio_title">
                  <a href="portfolio_details.html">Mobile App Design</a>
                </h3>
                <ul className="category_list unordered_list">
                  <li>
                    <a href="portfolio.html">App Design</a>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-light"
                  href="portfolio_details.html"
                >
                  <span className="btn_label" data-text="Explore">
                    Explore
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="portfolio_block">
              <div className="portfolio_image">
                <a
                  className="portfolio_image_wrap bg-light"
                  href="portfolio_details.html"
                >
                  <img
                    src="./images/portfolio/portfolio_item_image_2.webp"
                    alt="Dashboard Design"
                  />
                </a>
              </div>
              <div className="portfolio_content">
                <h3 className="portfolio_title">
                  <a href="portfolio_details.html">Dashboard Design</a>
                </h3>
                <ul className="category_list unordered_list">
                  <li>
                    <a href="portfolio.html">Web Design</a>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-light"
                  href="portfolio_details.html"
                >
                  <span className="btn_label" data-text="Explore">
                    Explore
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Swiper Navigation Buttons */}
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
        {/* Swiper Pagination */}
        <div className="portfolio-swiper-pagination"></div>
      </div>
      <div className="container text-center d-block d-lg-none">
        <div className="btns_group pb-0">
          <a className="btn btn-primary" href="pricing.html">
            <span className="btn_label" data-text="All Works">
              All Works
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clientsbyindustry;
