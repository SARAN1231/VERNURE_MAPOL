import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CaseStudy = ({
  imageSrc,
  category,
  title,
  description,
  industry,
  country,
  technologies,
}) => {
  return (
    <div className="case_study_block">
      <div className="case_study_image">
        <img src={imageSrc} alt="Techco - Cases Image" />
      </div>
      <div className="case_study_content">
        <ul className="category_list unordered_list text-uppercase">
          <li>
            <a href="portfolio.html">{category}</a>
          </li>
        </ul>
        <h3 className="case_title">
          <a href="portfolio_details.html">{title}</a>
        </h3>
        <p>{description}</p>
        <ul className="icon_list unordered_list">
          <li>
            <span className="icon_list_text">
              <strong className="text-dark">Industry:</strong> {industry}
            </span>
          </li>
          <li>
            <span className="icon_list_text">
              <strong className="text-dark">Country:</strong> {country}
            </span>
          </li>
        </ul>
        <ul
          className="case_technologies unordered_list"
          data-text="Core Technologies:"
        >
          {technologies.map((tech, index) => (
            <li key={index}>
              <img src={tech} alt={`Tech ${index + 1}`} />
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href="portfolio_details.html">
          <span className="btn_label" data-text="Read Case">
            Read Case
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

const CaseStudiesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-170">
      <div className="heading_block text-center text-white">
        <div
          className="heading_focus_text has_underline d-inline-flex"
          style={{
            backgroundImage:
              "url('./images/shapes/shape_title_under_line.svg')",
          }}
        >
          Case Studies
        </div>
        <h2 className="heading_text mb-0">
          Our latest <mark>Case</mark> Studies
        </h2>
      </div>

      <div className="case_studies_wrapper">
        <Slider {...settings}>
          <CaseStudy
            imageSrc="./images/case/case_image_1.webp"
            category="Computer Software"
            title="Astarte Medical"
            description="Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project."
            industry="Computer software"
            country="Germany, Issum"
            technologies={[
              "./images/case/icon_angular.svg",
              "./images/case/icon_elephent.svg",
            ]}
          />
          <CaseStudy
            imageSrc="./images/case/case_image_2.webp"
            category="Healthcare"
            title="CAE Blue Phantom"
            description="CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides."
            industry="Wellness & Fitness"
            country="Germany, Issum"
            technologies={[
              "./images/case/icon_angular.svg",
              "./images/case/icon_netcore.svg",
            ]}
          />
          <CaseStudy
            imageSrc="./images/case/case_image_3.webp"
            category="Real Estate"
            title="Liberkeys"
            description="Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines."
            industry="Real estate"
            country="France, Paris"
            technologies={[
              "./images/case/vuejs.svg",
              "./images/case/icon_python.svg",
            ]}
          />
        </Slider>
      </div>

      <div className="btns_group pb-0">
        <a className="btn btn-primary" href="portfolio.html">
          <span className="btn_label" data-text="View More Cases Study">
            View More Cases Study
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="./images/shapes/shape_space_2.svg" alt="Techco Shape" />
      </div>
    </section>
  );
};

export default CaseStudiesSlider;
