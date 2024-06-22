import React, { useEffect, useRef } from "react";
import Swiper, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

Swiper.use([Autoplay, Pagination, Navigation]);

const Clientswiper = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      new Swiper(swiperContainerRef.current, {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);

  const reviews = [
    {
      name: "David Clark",
      designation: "Board Member, UNIQA",
      comment:
        "Working with Techco was a game-changer for our business. Their tailored solutions and dedicated support propelled us to new heights",
      avatar: "./images/avatar/avatar_11.webp",
    },
    {
      name: "Sarah Johnson",
      designation: "Board Member, UNIQA",
      comment:
        "I can't thank Techco enough for their expertise. Their strategic guidance revolutionized our operations and led to significant growth.",
      avatar: "./images/avatar/avatar_10.webp",
    },
    {
      name: "Michael Smith",
      designation: "Board Member, UNIQA",
      comment:
        "Choosing Techco was one of the best decisions we made. Their team's knowledge and passion for our success were evident every step of the way.",
      avatar: "./images/avatar/avatar_9.webp",
    },
    {
      name: "Emily Brown",
      designation: "Board Member, UNIQA",
      comment:
        "Partnering with Techco was a game-changer. Their innovative strategies and personalized approach exceeded our expectations.",
      avatar: "./images/avatar/avatar_8.webp",
    },
  ];

  return (
    <section className="review_and_about_section section_space bg-light">
      <div className="container">
        <div className="section_space pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-lg-around">
            <div className="col-lg-6">
              <div className="heading_block">
                <h2 className="heading_text">
                  Why Partner with Us: Unleashing Your Business Potential
                </h2>
                <p className="heading_description text-dark pe-lg-5">
                  Unleash Your Potential: Partner with the Experts for Success.
                  Experience Tailored Solutions, Dedication, and Proven Results.
                  Maximize Growth Opportunities Through Strategic Collaboration.
                  Choose Excellence:
                </p>
                <p className="heading_description mb-0 text-dark pe-lg-5">
                  Elevate Your Business to New Heights. Forge Unstoppable
                  Partnerships for Unbeatable Success.
                </p>
              </div>
              <a className="creative_btn" href="pricing.html">
                <span className="btn_label bg-primary">Get Started Today</span>
                <span className="btn_icon">
                  <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                  <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <div className="about_image_3">
                <img
                  className="image_wrap"
                  src="./images/about/about_image_8.webp"
                  alt="Business Consulting"
                />
                <div className="funfact_block capsule_layout">
                  <div className="funfact_icon">
                    <img
                      src="./images/icons/icon_wallet.svg"
                      alt="Techco - SVG Icon Wallet"
                    />
                  </div>
                  <div className="funfact_content">
                    <h3 className="funfact_title mb-0">Company Value</h3>
                    <div className="counter_value">
                      <span>$</span>
                      <span className="odometer" data-count="500000">
                        500,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br /><br />
        <div
          className="review_bg_box bg-success"
          style={{
            backgroundImage: "url('./images/icons/icon_quote_2.svg')",
          }}
        >
          <div className="heading_block text-center text-white">
            <h2 className="heading_text mb-0">Few Stories from our Client</h2>
          </div>
          <div className="review_4col_carousel swiper" ref={swiperContainerRef}>
            <div className="swiper-wrapper">
              {reviews.map((review, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="review_block_3">
                    <ul className="rating_block unordered_list">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                        ))}
                    </ul>
                    <p className="review_comment">{`"${review.comment}"`}</p>
                    <div className="review_admin">
                      <div className="review_admin_image">
                        <img src={review.avatar} alt={review.name} />
                      </div>
                      <div className="review_admin_info">
                        <h4 className="review_admin_name">{review.name}</h4>
                        <span className="review_admin_designation">
                          {review.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Clientswiper;
