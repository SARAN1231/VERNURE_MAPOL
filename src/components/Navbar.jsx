import React, { useEffect, useState } from "react";
import "./App.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleClick = () => {
     setMenuOpen(!menuOpen);
   };

   useEffect(() => {
     const dropdowns = document.querySelectorAll(".dropdown");
     dropdowns.forEach((dropdown) => {
       dropdown.addEventListener("hide.bs.dropdown", handleDropdownHide);
     });

     const hoverDropdowns = document.querySelectorAll(
       ".dropdown-hover, .dropdown-hover-all .dropdown"
     );
     hoverDropdowns.forEach((dropdown) => {
       dropdown.addEventListener("mouseenter", handleMouseEnter);
       dropdown.addEventListener("mouseleave", handleMouseLeave);
     });

     return () => {
       dropdowns.forEach((dropdown) => {
         dropdown.removeEventListener("hide.bs.dropdown", handleDropdownHide);
       });

       hoverDropdowns.forEach((dropdown) => {
         dropdown.removeEventListener("mouseenter", handleMouseEnter);
         dropdown.removeEventListener("mouseleave", handleMouseLeave);
       });
     };
   }, []);

   const handleDropdownHide = (event) => {
     const target = event.target;
     if (target.classList.contains("has-child-dropdown-show")) {
       target.classList.remove("has-child-dropdown-show");
       event.preventDefault();
     }
     event.stopPropagation();
   };

   const handleMouseEnter = (event) => {
     const dropdown = event.target.querySelector(
       ':scope>[data-bs-toggle="dropdown"]'
     );
     if (dropdown && !dropdown.classList.contains("show")) {
       new window.bootstrap.Dropdown(dropdown).toggle();
       event.target.classList.add("has-child-dropdown-show");
       window.bootstrap.Dropdown.clearMenus();
     }
   };

   const handleMouseLeave = (event) => {
     const dropdown = event.target.querySelector(
       ':scope>[data-bs-toggle="dropdown"]'
     );
     if (dropdown && dropdown.classList.contains("show")) {
       new window.bootstrap.Dropdown(dropdown).toggle();
     }
   };
  return (
    <>
      {/* <Preloader /> */}
      <header
        className="site_header site_header_2"
        style={{
          backgroundColor: "#E3F0FF",
          color: "black",
          height: "100px",
          position: "sticky",
          top: "0",
          zIndex: "1000", // Ensures it stays on top of other elements
        }}
      >
        <div className="header_bottom stricky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-5">
                <div className="site_logo">
                  <Link to={"/"}>
                  
                    <img
                      src="./images/Mapol/mapol-logo-lg.png"
                      alt="Mapol Logo"
                      style={{
                        width: "250px",
                        height: "100px",
                        marginLeft: "30px",
                      }}
                    />
                   
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list justify-content-center">
                      <li className="dropdown active">
                        <a
                          className="nav-link"
                          href="#"
                          id="home_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Solutions
                        </a>
                       
                        <div
                          className="dropdown-menu mega_menu_wrapper p-0"
                          aria-labelledby="services_submenu"
                        >
                          <div className="container">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-8">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Industries
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Automobiles"}>
                                              Automobiles
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Manufacturing
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Logistics & Supply chain
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Other Industries
                                            </Link>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Initiatives
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Safety & Sustainablity
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Industry 4.0
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              e -Invoice
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Businesses
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Cloud Services
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="pricing.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              IT Consulting Services
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="about.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Business Suites
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="social_area">
                                  <ul
                                    className="social_icons_block unordered_list"
                                    data-text="Follow Us:"
                                  >
                                    <li>
                                      <a href="https://www.facebook.com/mapolbs/?ref=hl">
                                        <i className="fa-brands fa-facebook-f"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://twitter.com/balakannan_r">
                                        <i className="fa-brands fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.linkedin.com/company/mapol-business-solutions-private-limited/">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://plus.google.com/u/0/108740517297471267788/posts">
                                        <i className="fa-brands fa-google-plus"></i>
                                      </a>
                                    </li>
                                  </ul>
                                  <p className="career_link m-0">
                                    Looking for new career?{" "}
                                    <Link to={"/Careers"}>We’re Hiring</Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="megamenu_case bg-primary">
                                  <h3>Computer Software</h3>
                                  <h4>Astarte Medical</h4>
                                  <img
                                    src="./images/case/case_image_4.webp"
                                    alt="Case Image"
                                  />
                                  <a className="btn" href="portfolio.html">
                                    <span
                                      className="btn_label"
                                      data-text="Read Case"
                                    >
                                      Read Case
                                    </span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="company_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Products
                        </a>
                        <div
                          className="dropdown-menu mega_menu_wrapper"
                          aria-labelledby="company_submenu"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-9">
                                <div className="megamenu_pages_wrapper mb-5">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M14.6435 5.27739L9.44599 1.12239C8.64349 0.477387 7.34599 0.477387 6.55099 1.11489L1.35349 5.27739C0.76849 5.74239 0.39349 6.72489 0.52099 7.45989L1.51849 13.4299C1.69849 14.4949 2.71849 15.3574 3.79849 15.3574H12.1985C13.271 15.3574 14.2985 14.4874 14.4785 13.4299L15.476 7.45989C15.596 6.72489 15.221 5.74239 14.6435 5.27739ZM8.53099 11.8999C8.38099 12.0499 8.19349 12.1249 7.99849 12.1249C7.80349 12.1249 7.61599 12.0499 7.46599 11.9074C7.17349 11.6149 7.17349 11.1424 7.46599 10.8499C7.75849 10.5574 8.23849 10.5574 8.53099 10.8499C8.82349 11.1349 8.82349 11.6074 8.53099 11.8999ZM9.99349 10.1749C9.88099 10.2874 9.73849 10.3474 9.58849 10.3474C9.44599 10.3474 9.31099 10.2949 9.19849 10.1899C8.47099 9.49239 7.52599 9.49239 6.79099 10.1899C6.56599 10.4074 6.21349 10.3999 5.99599 10.1749C5.77849 9.94989 5.78599 9.59739 6.01099 9.37989C7.17349 8.26239 8.80099 8.26239 9.97099 9.37989C10.2035 9.58989 10.211 9.94989 9.99349 10.1749ZM11.5835 8.58489C11.471 8.69739 11.3285 8.75739 11.1785 8.75739C11.036 8.75739 10.8935 8.70489 10.7885 8.59989C10.436 8.25489 10.0385 7.97739 9.61849 7.77489C8.56849 7.27239 7.42099 7.27239 6.37849 7.77489C5.95849 7.97739 5.56849 8.25489 5.20849 8.59989C4.99099 8.81739 4.63099 8.81739 4.41349 8.59239C4.19599 8.36739 4.20349 8.01489 4.42099 7.79739C4.86349 7.36239 5.35849 7.01739 5.89099 6.76239C7.24849 6.10989 8.74849 6.10989 10.0985 6.76239C10.631 7.01739 11.126 7.36239 11.5685 7.79739C11.7935 8.00739 11.801 8.36739 11.5835 8.58489Z"
                                                fill="#0044EB"
                                              />
                                            </svg>
                                          </small>

                                          <small className="iconbox_title">
                                            ERP for Manufacturing
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Learn more about Techco
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/ERP-Logistics"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_dollar_2.svg"
                                              alt="Dollar SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            ERP for Logistics
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Streamlined Pricing
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_chart.svg"
                                              alt="Chart SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            ESG Automation
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Explore our all overview
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_tag_2.svg"
                                              alt="Event Tag SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Asset Tracking
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Explore our work overview
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_user_2.svg"
                                              alt="User Check SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Paper Production Tracking
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          We are friendly Join our team
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_users.svg"
                                              alt="Users SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            FMEA Insight
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          We are friendly Join our team
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_pen.svg"
                                              alt="Pen SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Last Mile Delivery
                                          </small>
                                        </span>
                                        <small className="description mb-0">
                                          Happy to help you!
                                        </small>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_pen.svg"
                                              alt="Pen SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Vendor Suite
                                          </small>
                                        </span>
                                        <small className="description mb-0">
                                          Happy to help you!
                                        </small>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <ul className="btns_group p-0 unordered_list justify-content-start">
                                  <li>
                                    <Link
                                      className="btn btn-primary"
                                      to={"/contact"}
                                    >
                                      <span
                                        className="btn_label"
                                        data-text="Free Consultation"
                                      >
                                        Free Consultation
                                      </span>
                                      <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <div className="review_short_info_2">
                                      <div className="review_admin_logo">
                                        <img
                                          src="./images/clients/client_logo_9.webp"
                                          alt="Client Logo"
                                        />
                                      </div>
                                      <div className="review_info_content">
                                        <ul className="rating_block unordered_list">
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                        </ul>
                                        <div className="review_counter">
                                          From <b>200+</b> reviews
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="review_short_info_2">
                                      <div className="review_admin_logo">
                                        <img
                                          src="./images/clients/client_logo_10.webp"
                                          alt="Client Logo"
                                        />
                                      </div>
                                      <div className="review_info_content">
                                        <ul className="rating_block unordered_list">
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                        </ul>
                                        <div className="review_counter">
                                          From <b>200+</b> reviews
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <div className="site_author bg-primary">
                                  <div className="author_box">
                                    <div className="author_image bg-light">
                                      <img
                                        src="./images/avatar/avatar_7.webp"
                                        alt="Site Author Image"
                                      />
                                    </div>
                                    <div className="author_box_content">
                                      <h3 className="author_name text-white">
                                        Maverick Phoenix
                                      </h3>
                                      <span className="author_designation text-white">
                                        CEO At Techco
                                      </span>
                                    </div>
                                    <div className="quote_icon">
                                      <img
                                        src="./images/icons/icon_quote.svg"
                                        alt="Quote Icon"
                                      />
                                    </div>
                                  </div>
                                  <p className="mb-0 text-white">
                                    As a CEO at Techco I have been voice crying
                                    in the wilderness, trying to make
                                    requirements clear, use every minute to
                                    deliver the result, and not reinvent the
                                    wheel. Here at Techco, I made that possible
                                    for the clients.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="portfolio_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Resources
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="portfolio_submenu"
                        >
                          <li>
                            <Link to={"/Industry4"}>Industry 4.0</Link>
                          </li>
                          <li>
                            <Link to={"/Sustainability"}>Sustainability</Link>
                          </li>
                          <li>
                            <Link to={"/Casestudies"}>Case Studies</Link>
                          </li>
                          <li>
                            <Link to={"/Blogs"}>Blogs </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="services_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Clients
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="portfolio_submenu"
                        >
                          <li>
                            <Link to={"/SuccessStories"}>
                              {" "}
                              Success Stories{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to={"/Clientsbyindustry"}>
                              Clients by Industries
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="pages_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "black" }}
                        >
                          Company
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="pages_submenu"
                        >
                          <li>
                            <Link to={"/Aboutus"}> Why Mapol..?</Link>
                          </li>
                          {/* <li className="dropdown">
                            <a
                              className="nav-link"
                              href="#"
                              id="blog_submenu"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Blogs
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="blog_submenu"
                            >
                              <li>
                                <a href="blog.html">Our Blogs</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blod details</a>
                              </li>
                            </ul>
                          </li> */}
                          <li>
                            <Link to={"/Team"}> Leadership Team </Link>
                          </li>
                          <li>
                            <Link to={"/Business_approach"}>
                              Business Approach{" "}
                            </Link>
                          </li>
                          <li>
                            <a href="contact.html">Our Partners</a>
                          </li>

                          <li>
                            <Link to={"/Careers"}>
                              Careers
                              <small className="badge bg-danger-subtle text-danger">
                                We’re Hiring
                              </small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href="contact.html">Contact</a>
                      </li> */}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-3 col-5">
                <ul className="header_btns_group unordered_list justify-content-end">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-expanded={menuOpen}
                      aria-label="Toggle navigation"
                      onClick={handleClick}
                      style={{ color: "black" }}
                    >
                      <i
                        className={
                          menuOpen ? "fa-solid fa-xmark" : "far fa-bars"
                        }
                      ></i>
                    </button>
                  </li>
                  <li>
                    <Link className="btn btn-primary" to="/contact">
                      <span className="btn_label" data-text="Get Started">
                        Get Started
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
