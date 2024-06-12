import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Blogs = () => {
   useEffect(() => {
     const blogOneColCarousel = new Swiper(".blog_onecol_carousel", {
       loop: true,
       speed: 1000,
       slidesPerView: 1,
       spaceBetween: 10,
       navigation: {
         nextEl: ".b1cc-swiper-button-next",
         prevEl: ".b1cc-swiper-button-prev",
       },
       autoplay: {
         delay: 4000,
         disableOnInteraction: true,
       },
       pagination: {
         el: ".b1cc-swiper-pagination",
         clickable: true,
       },
     });

     return () => {
       blogOneColCarousel.destroy(); // Cleanup Swiper instance on component unmount
     };
   }, []);
  return (
    <>
    <Navbar/>
      <PageBanner />
      <BlogSection />
      <CallToAction />
      <Footer />
    </>
  );
};
const PageBanner = () => (
  <section
    className="page_banner_section text-center"
    style={{ backgroundImage: "url('./images/shapes/bg_pattern_4.svg')" }}
  >
    <div className="container">
      <div className="heading_focus_text text-white">
        Our <span className="badge bg-secondary">Blogs😍</span>
      </div>
      <h1 className="page_title mb-0 text-white">Our Latest Blog</h1>
    </div>
  </section>
);
const BlogSection = () => (
  
  <section className="blog_section section_space bg-light">
    <div className="container">
      <div className="blog_onecol_carousel overflow-hidden">
        <div className="swiper-wrapper">
          {[1, 2, 3, 4].map((_, idx) => (
            <div className="swiper-slide" key={idx}>
              <BlogPost />
            </div>
          ))}
        </div>
        <button
          className="b1cc-swiper-button-prev"
          type="button"
          style={{
            backgroundImage: "url('./images/shapes/shape_arrow_right.svg')",
          }}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button
          className="b1cc-swiper-button-next"
          type="button"
          style={{
            backgroundImage: "url('./images/shapes/shape_arrow_left.svg')",
          }}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
        <div className="b1cc-swiper-pagination p-0"></div>
      </div>
      {/* Additional Blog Posts */}
      <div className="section_space pb-0">
        <div className="row">
          <div className="col-lg-8">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div className="blog_post_block image_left_layout" key={idx}>
                <BlogPosts detailed />
              </div>
            ))}
            <div className="pagination_wrap pb-0">
              <ul className="pagination_nav unordered_list justify-content-center">
                <li>
                  <a href="#!">
                    <i className="fa-solid fa-angles-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#!">1</a>
                </li>
                <li>
                  <a href="#!">2</a>
                </li>
                <li>
                  <a href="#!">3</a>
                </li>
                <li>
                  <a href="#!">...</a>
                </li>
                <li>
                  <a href="#!">10</a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
);
const BlogPosts = ({ detailed }) => (
  <div className="blog_post_block image_left_layout">
    <div className="blog_post_content">
      <div className="post_meta_wrap">
        <ul className="category_btns_group unordered_list">
          <li>
            <a href="#!">Technology</a>
          </li>
        </ul>
        <ul className="post_meta unordered_list">
          <li>
            <a href="#!">
              <img
                src="./images/icons/icon_calendar.svg"
                alt="Icon Calendar"
              />{" "}
              11/12/2024
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-comment-lines"></i> 24
            </a>
          </li>
        </ul>
      </div>
      <h3 className="blog_post_title">
        <a href="blog_details.html">
          Exploring the Evolution of IT Solutions with Techco Visionaries.
        </a>
      </h3>
      <p>
        The evolution of IT solutions from inception to implementation. Discover
        the insights, strategies, and breakthroughs that have propelled us
        forward, and gain..
      </p>
      {detailed && (
        <a className="btn btn-dark" href="blog_details.html">
          <span className="btn_label" data-text="Read More">
            Read More
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      )}
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="sidebar ps-lg-5">
    <SearchForm />
    <RelatedPosts />
    <Categories />
    <PopularTags />
  </aside>
);

const SearchForm = () => (
  <div className="search_form">
    <h3 className="sidebar_widget_title">Search</h3>
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        name="search"
        placeholder="Search your keyword"
      />
      <button type="submit">
        <img src="./images/icons/icon_search.svg" alt="Search Icon" />
      </button>
    </div>
  </div>
);

const RelatedPosts = () => (
  <div className="post_list_block">
    <h3 className="sidebar_widget_title">Related Posts</h3>
    <ul className="unordered_list_block">
      {[1, 2, 3].map((_, idx) => (
        <li key={idx}>
          <h3 className="post_title">
            <a href="blog_details.html">
              Discovering IT Solutions with Experts - Gain Exclusive...
            </a>
          </h3>
          <ul className="post_meta unordered_list">
            <li>
              <a href="#!">
                <img
                  src="./images/icons/icon_calendar.svg"
                  alt="Icon Calendar"
                />{" "}
                11/12/2024
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fa-regular fa-comment-lines"></i> 24
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

const Categories = () => (
  <div className="post_category_wrap">
    <h3 className="sidebar_widget_title">Categories</h3>
    <ul className="post_category_list unordered_list_block">
      {[
        "Cybersecurity",
        "Tech Trends",
        "Digital Transformation",
        "IT Infrastructure",
        "Mobile App",
        "Cloud Computing",
      ].map((category, idx) => (
        <li key={idx}>
          <a href="#!">
            <i className="fa-solid fa-arrow-up-right"></i>
            <span>{category}</span>
            <span>({idx + 1})</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const PopularTags = () => (
  <div className="popular_tags">
    <h3 className="sidebar_widget_title">Popular Tags</h3>
    <ul className="tags_list unordered_list">
      {[
        "Cybersecurity",
        "TechSolutions",
        "UX Design",
        "App Dev",
        "Data",
        "Solution",
        "Consultants",
        "IT",
        "Optimization",
        "Startup",
      ].map((tag, idx) => (
        <li key={idx}>
          <a href="#!">{tag}</a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogPost = ({ detailed }) => (
  <div className="blog_post_block content_over_layout">
    <div className="blog_post_image">
      <a className="image_wrap" href="blog_details.html">
        <img src="./images/blog/blog_post_image_4.webp" alt="Blog Post" />
      </a>
    </div>
    <div className="blog_post_content">
      <div className="post_meta_wrap">
        <ul className="category_btns_group unordered_list">
          <li>
            <a href="#!">Branding</a>
          </li>
          <li>
            <a href="#!">UI/UX</a>
          </li>
        </ul>
        <ul className="post_meta unordered_list">
          <li>
            <a href="#!">
              <i className="fa-regular fa-calendar-days"></i> 11/12/2024
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-regular fa-comment-lines"></i> 24
            </a>
          </li>
        </ul>
      </div>
      <h3 className="blog_post_title">
        <a href="blog_details.html">
          Exploring IT Solutions - Unravel the Latest Technological
          Advancements.
        </a>
      </h3>
      <p className="mb-0">
        Embark on an enlightening journey through the realm of IT solutions as
        we delve into the latest technological advancements shaping the digital
        landscape.
      </p>
      {detailed && (
        <a className="btn btn-dark" href="blog_details.html">
          <span className="btn_label" data-text="Read More">
            Read More
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      )}
    </div>
  </div>
);

const CallToAction = () => (
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
          Our team of experts is ready to collaborate with you every step of the
          way, ensuring your unique needs are met and your questions are
          answered.
        </p>
      </div>
      <div className="btn_wrap">
        <a className="btn btn-border-light rounded-pill" href="contact.html">
          <span className="btn_label" data-text="Contact Us">
            Contact Us
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Blogs;
