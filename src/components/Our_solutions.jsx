import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Our_solutions = () => {
  const reviews = [
    {
      rating: 5,
      icon: "icon_code.svg",
      comment:
        "Working with Techco was a game-changer for our business. Their tailored solutions and dedicated support propelled us to new heights",
      image: "images/avatar/avatar_11.webp",
      name: "David Clark",
      designation: "Board Member, UNIQA",
    },
    {
      rating: 5,
      icon: "icon_code.svg",
      comment:
        "I can't thank Techco enough for their expertise. Their strategic guidance revolutionized our operations and led to significant growth.",
      image: "images/avatar/avatar_10.webp",
      name: "Sarah Johnson",
      designation: "Board Member, UNIQA",
    },
    {
      rating: 5,
      icon: "icon_code.svg",
      comment:
        "Choosing Techco was one of the best decisions we made. Their team's knowledge and passion for our success were evident every step of the way.",
      image: "images/avatar/avatar_9.webp",
      name: "Michael Smith",
      designation: "Board Member, UNIQA",
    },
    {
      rating: 5,
      icon: "icon_code.svg",
      comment:
        "Partnering with Techco was a game-changer. Their innovative strategies and personalized approach exceeded our expectations",
      image: "images/avatar/avatar_8.webp",
      name: "Emily Brown",
      designation: "Board Member, UNIQA",
    },
    {
        rating: 5,
        icon: "icon_code.svg",
        comment:
          "Working with Techco was a game-changer for our business. Their tailored solutions and dedicated support propelled us to new heights",
        image: "images/avatar/avatar_11.webp",
        name: "David Clark",
        designation: "Board Member, UNIQA",
      },
      {
        rating: 5,
        icon: "icon_code.svg",
        comment:
          "I can't thank Techco enough for their expertise. Their strategic guidance revolutionized our operations and led to significant growth.",
        image: "images/avatar/avatar_10.webp",
        name: "Sarah Johnson",
        designation: "Board Member, UNIQA",
      },
      {
        rating: 5,
        icon: "icon_code.svg",
        comment:
          "Choosing Techco was one of the best decisions we made. Their team's knowledge and passion for our success were evident every step of the way.",
        image: "images/avatar/avatar_9.webp",
        name: "Michael Smith",
        designation: "Board Member, UNIQA",
      },
  ];

  return (
    <section className="review_and_about_section section_space bg-light">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage:
                'url("./images/shapes/shape_title_under_line.svg")',
            }}
          >
            Our Solutions
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review_block_3">
                <div className="review_admin">
                <div className="service_icon" >
                  <img  
                    src={`./images/icons/${review.icon}`}
                    alt={`Techco - Service icon`}
                  />
                  
                </div>
                 
                </div>
                <br />
                <div className="review_admin_info">
                    <h4 className="review_admin_name">{review.name}</h4>
                    <span className="review_admin_designation">{review.designation}</span>
               <br />
               <br />
                    <Link className="btn btn-primary" to="/contact">
                      <span style={{marginTop:"15px",marginBottom:"15px"}} data-text="Get Started">
                        Read More
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  
                  </div>
                  <br />
                    <br />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Our_solutions;
