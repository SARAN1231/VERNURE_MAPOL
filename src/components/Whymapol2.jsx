import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap";
SwiperCore.use([Navigation]);

const TeamMember = ({ name, designation, imageUrl }) => (
  <div className="swiper-slide">
    <div className="team_block">
      <div className="team_member_image">
        <a
          className="image_wrap"
          aria-label="Team Details Button"
          href="team_details.html"
        >
          <img src={imageUrl} alt="Team Member Image" />
          <i className="fa-solid fa-arrow-up-right"></i>
        </a>
      </div>
      <div className="team_member_info">
        <h3 className="team_member_name">
          <a href="team_details.html">{name}</a>
        </h3>
        <h4 className="team_member_designation">{designation}</h4>
        <ul className="social_icons_block unordered_list justify-content-center">
          <ul class="social_icons_block unordered_list justify-content-center">
            <li>
              <a href="#!">
                <img
                  src="./images/icons/icon_facebook.svg"
                  alt="Icon Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="./images/icons/icon_twitter_x.svg"
                  alt="Icon Twitter X"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="./images/icons/icon_linkedin.svg"
                  alt="Icon Linkedin"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="./images/icons/icon_instagram.svg"
                  alt="Icon Instagram"
                />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
);

const Whymapol2 = () => (
  <section className="team_section section_space xb-hidden">
    <div className="container">
      <div className="heading_block text-center">
        <div className="heading_focus_text">
          <span className="badge bg-secondary text-white">Our Expert</span> Team
          Members 😍
        </div>
        <h2 className="heading_text mb-0">Top Skilled Experts</h2>
      </div>

      <div className="team_carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <TeamMember
              name="Atticus Sterling"
              designation="Systems Engineer"
              imageUrl="./images/team/team_member_image_1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember
              name="Atticus Sterling"
              designation="Systems Engineer"
              imageUrl="./images/team/team_member_image_1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember
              name="Atticus Sterling"
              designation="Systems Engineer"
              imageUrl="./images/team/team_member_image_1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember
              name="Atticus Sterling"
              designation="Systems Engineer"
              imageUrl="./images/team/team_member_image_1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember
              name="Atticus Sterling"
              designation="Systems Engineer"
              imageUrl="./images/team/team_member_image_1.webp"
            />
          </SwiperSlide>
          {/* Add more TeamMember components for each team member */}
        </Swiper>
      </div>

      <div className="container">
        <div className="btns_group pb-0">
          <a className="btn btn-outline-light" href="service.html">
            <span className="btn_label" data-text="Our All Experts">
              Our All Experts
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Whymapol2;
