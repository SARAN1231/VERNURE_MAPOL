import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from 'react-router-dom'
import SwiperCore, { Navigation } from "swiper";
import "./App.css";
// Install Swiper modules
SwiperCore.use([Navigation]);
function Technologies() {
  return (
    <>
      <section className="process_technology_review_section bg-light section_decoration">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage:
                      'url("../assets/images/shapes/shape_title_under_line.svg")',
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
                    01. Discovery Phase
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
                    02. Design and Development
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
                    03. Maintenance
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
                    04. Deployment
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
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_five"
                    aria-expanded="false"
                    aria-controls="collapse_five"
                  >
                    05. Testing and QA
                  </div>
                  <div
                    id="collapse_five"
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
                  <span>Discovery Phase</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_two"
                  aria-expanded="false"
                  aria-controls="collapse_two"
                >
                  <span>Design and Development</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_three"
                  aria-expanded="false"
                  aria-controls="collapse_three"
                >
                  <span>Maintenance</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_four"
                  aria-expanded="false"
                  aria-controls="collapse_four"
                >
                  <span>Deployment</span>
                </li>
                <li
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_five"
                  aria-expanded="false"
                  aria-controls="collapse_five"
                >
                  <span>Testing and QA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <br /><br /><br />

          <div className="row">
            <div className="col-lg-4">
              <div className="deals_winner_customers">
                <h3 className="title_text">
                  <mark>3,900+</mark> customers win deals with Techco
                </h3>
                <div className="row">
                  <div className="col-6">
                    <div className="review_short_info">
                      <div className="icon">
                        <img src="./images/icons/icon_c.svg" alt="C SVG Icon" />
                      </div>
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
                  <div className="col-6">
                    <div className="review_short_info">
                      <div className="icon">
                        <img
                          src="./images/icons/icon_g2.svg"
                          alt="G2 SVG Icon"
                        />
                      </div>
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
                        From <b>300+</b> reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="review_onecol_wrapper">
                <Swiper
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".r1cc-swiper-button-next",
                    prevEl: ".r1cc-swiper-button-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="review_block_2">
                      <h3 className="review_title">
                        “Amazing software services”
                      </h3>
                      <p className="review_commtent">
                        The solutions they're providing is helping our business
                        run more smoothly. We've been able to make quick
                        developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because
                        they can give strong advice about how to build good
                        products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img
                              src="./images/avatar/avatar_5.webp"
                              alt="Maverick Phoenix"
                            />
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">
                              Maverick Phoenix
                            </h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img
                                  src="./images/flag/ukraine_flag.webp"
                                  alt="Ukraine Flag"
                                />
                              </span>
                              <span className="country_text">
                                Seattle, Ukraine
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img
                            src="./images/clients/client_logo_8.webp"
                            alt="Review Admin Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review_block_2">
                      <h3 className="review_title">
                        “Amazing software services”
                      </h3>
                      <p className="review_commtent">
                        The solutions they're providing is helping our business
                        run more smoothly. We've been able to make quick
                        developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because
                        they can give strong advice about how to build good
                        products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img
                              src="./images/avatar/avatar_6.webp"
                              alt="Maverick Phoenix"
                            />
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">
                              Maverick Phoenix
                            </h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img
                                  src="./images/flag/ukraine_flag.webp"
                                  alt="Ukraine Flag"
                                />
                              </span>
                              <span className="country_text">
                                Seattle, Ukraine
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img
                            src="./images/clients/client_logo_8.webp"
                            alt="Review Admin Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review_block_2">
                      <h3 className="review_title">
                        “Amazing software services”
                      </h3>
                      <p className="review_commtent">
                        The solutions they're providing is helping our business
                        run more smoothly. We've been able to make quick
                        developments with them, meeting our product vision
                        within the timeline we set up. Listen to them because
                        they can give strong advice about how to build good
                        products.
                      </p>
                      <div className="d-md-flex justify-content-md-between">
                        <div className="review_admin">
                          <div className="review_admin_image">
                            <img
                              src="./images/avatar/avatar_7.webp"
                              alt="Maverick Phoenix"
                            />
                          </div>
                          <div className="review_admin_info">
                            <h4 className="review_admin_name">
                              Maverick Phoenix
                            </h4>
                            <span className="review_admin_designation">
                              Board Member, UNIQA
                            </span>
                            <div className="review_admin_country">
                              <span className="country_flag">
                                <img
                                  src="./images/flag/ukraine_flag.webp"
                                  alt="Ukraine Flag"
                                />
                              </span>
                              <span className="country_text">
                                Seattle, Ukraine
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="review_admin_logo">
                          <img
                            src="./images/clients/client_logo_8.webp"
                            alt="Review Admin Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="carousel_arrows_nav" >
                  <button type="button" className="r1cc-swiper-button-prev" style={{marginTop:"30px"}}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button type="button" className="r1cc-swiper-button-next" style={{marginLeft:"10px"}}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decoration_item shape_image_1">
          <img src="./images/shapes/shape_line_2.svg" alt="Techco Shape" />
        </div>
        <div className="decoration_item shape_image_2">
          <img src="./images/shapes/shape_line_3.svg" alt="Techco Shape" />
        </div>
        <div className="decoration_item shape_image_3">
          <img src="./images/shapes/shape_line_4.svg" alt="Techco Shape" />
        </div>
        <div className="decoration_item shape_image_4">
          <img src="./images/shapes/shape_space_3.svg" alt="Techco Shape" />
        </div>
      </section>
    </>
  );
}

export default Technologies;