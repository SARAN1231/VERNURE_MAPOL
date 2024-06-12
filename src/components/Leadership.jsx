import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TeamPage = () => {
  return (
    <main className="page_content">
        <Navbar/>

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

      {/* About Section */}
      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 order-lg-last">
              <div className="team_cartoon_image">
                <img
                  src="./images/team/team_cartoon_image.webp"
                  alt="Team Cartoon Image - Techco - About Image"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    Our Dedicated
                    <span className="badge bg-secondary text-white">
                      Team 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Get to Know Our Expert Techco Team
                  </h2>
                  <p className="heading_description mb-0">
                    Get acquainted with the powerhouse behind Techco – our
                    expert team of professionals dedicated to revolutionizing
                    the IT landscape. Comprising.
                  </p>
                </div>
                <a className="btn" href="contact.html">
                  <span className="btn_label" data-text="Talk to an Expart">
                    Talk to an Expart
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team_section section_space">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Our Expert</span>
              Team Members 😍
            </div>
            <h2 className="heading_text mb-0">Top Skilled Experts</h2>
          </div>

          <div className="row">
            {/* Repeat this block for each team member */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <a
                    className="image_wrap"
                    aria-label="Team Details Button"
                    href="team_details.html"
                  >
                    <img
                      src="./images/team/team_member_image_1.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <a href="team_details.html">Atticus Sterling</a>
                  </h3>
                  <h4 className="team_member_designation">Systems Engineer</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    {/* Social icons */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <a
                    className="image_wrap"
                    aria-label="Team Details Button"
                    href="team_details.html"
                  >
                    <img
                      src="./images/team/team_member_image_1.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <a href="team_details.html">Atticus Sterling</a>
                  </h3>
                  <h4 className="team_member_designation">Systems Engineer</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    {/* Social icons */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <a
                    className="image_wrap"
                    aria-label="Team Details Button"
                    href="team_details.html"
                  >
                    <img
                      src="./images/team/team_member_image_1.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <a href="team_details.html">Atticus Sterling</a>
                  </h3>
                  <h4 className="team_member_designation">Systems Engineer</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    {/* Social icons */}
                  </ul>
                </div>
              </div>
            </div>
            {/* End of team member block */}
          </div>
        </div>
      </section>

      {/* Team Map Section */}
      <section className="team_map_section section_space pb-0 bg-light">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Techco </span>
              Company 😍
            </div>
            <h2 className="heading_text mb-0">Our Global Team is Growing</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="team_map_image  text-center">
                <img
                  src="./images/team/team_map.webp"
                  alt="Techco - Team Map Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
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
        <Footer />
    </main>
  );
};

export default TeamPage;
