import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Col, Row } from 'react-bootstrap'
import Navbar1 from '../Navbar1'

const Mobile_Application = () => {
    const tabItems = [
        {
          label: "Web Platform",
          targetId: "tab_web_platform",
          technologies: [
            { iconSrc: "./images/icons/icon_php.svg", title: "PHP" },
            { iconSrc: "./images/icons/icon_javascript.svg", title: "JavaScript" },
            { iconSrc: "./images/case/icon_elephent.svg", title: "PostgreSQL" },
            { iconSrc: "./images/icons/icon_swift.svg", title: "Swift" },
            { iconSrc: "./images/icons/icon_typescript.svg", title: "Typescript" },
            { iconSrc: "./images/case/icon_python.svg", title: "Python" },
            { iconSrc: "./images/icons/icon_g318.svg", title: "G318" },
            { iconSrc: "./images/icons/icon_java.svg", title: "Java" },
            { iconSrc: "./images/icons/icon_ruby.svg", title: "Ruby" },
            { iconSrc: "./images/icons/icon_c_plus.svg", title: "C++" },
            { iconSrc: "./images/icons/icon_react_js.svg", title: "React Js" },
            { iconSrc: "./images/icons/icon_laravel.svg", title: "Laraval" },
          ],
        },
    ]
  return (
    <main className="page_content">
      <Navbar1 />
      {/* Page Banner Section */}
      {/* <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: "url('./images/shapes/bg_pattern_4.svg')",
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            Our Main
            <span className="badge bg-secondary">Services 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">Our Services</h1>
        </div>
      </section> */}

      {/* About Section */}
      <section className="about_section section_space bg-light">
        <div className="container" style={{marginTop:'80px'}}>
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5 order-lg-last">
              <div className="team_cartoon_image">
                <img
                  src="./images/services/service_image_8.webp"
                  alt="Service Cartoon Image - Techco - About Image"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    We Are
                    <span className="badge bg-secondary text-white">
                      IT Guidance 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">
                    Tailored IT Solutions for Your Success
                  </h2>
                  <p className="heading_description mb-0">
                    we understand that every business is unique, with its own
                    set of challenges, goals, and aspirations. That's why we
                    offer tailored IT solutions designed.
                    
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
                <a className="btn" href="contact.html">
                  <span className="btn_label" data-text="Talk to an Expart">
                    Talk to an Expert
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
      

      <section className="about_section section_space bg-light ">
      <div className="container">
      <h1 className="service-title text-center"> <mark>Mobile Application</mark> Development Services</h1>
      <div className="content-side col-lg-12 col-md-8 col-sm-12 col-xs-12">
      <section className="services-single">
        
        <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
          <p>
            As part of software development, we do develop applications for iPhone, iPad, Android, and Windows mobile platforms. Our most powerful business stabilizes with mobile app development platform, software development platform, and their solutions. The usage of smartphones is growing day by day, and similarly, usage of mobile-based applications is also growing together. At One Point Solutions, Mapol has a team of experts in developing all kinds of applications, including web-based applications and mobile-based applications.
          </p>
          <p>
            We have a dedicated team for mobile application design, development, testing, and implementation. We have a highly qualified and experienced team who can develop applications in different platforms, including iPhone, iPad, Android, and Windows.
          </p>
          <p>
            We design your mobile applications with ASO standards, which can be discovered by Google Play and other app stores. We have strong knowledge in developing the following mobile applications:
          </p>
        </div>
        <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
          <div className="col-lg-12">
            <ul className="circle col-lg-12">
              <li>Custom Android/IOS/Windows Application Development.</li>
              <li>Android web development.</li>
              <li>Android SDK Development.</li>
              <li>Android Business/Ecommerce app development with secured payment gateway integration.</li>
              <li>We develop mobile apps with API technology and GPS tracking.</li>
              <li>We develop travel guide applications, booking applications, order management applications, Business Efficiency Apps with MIS reports, Transportation Apps, Medical Apps, Libraries & Demo Apps, etc.</li>
            </ul>
          </div>
        </div>
        <div className="post-cat">
          <h4>Our areas of expertise in developing mobile applications in all platforms like Android, iPhone, IOS, Windows, BlackBerry, etc.</h4>
        </div>
        <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
          <Row>
            <Col lg={6}>
              <ul className="circle">
                <li>E-commerce and Shopping Apps</li>
                <li>Retail and Fashion Apps</li>
                <li>Education Apps</li>
                <li>Social Networking and Social Media Apps</li>
                <li>Travel Apps, Food and Restaurant Apps</li>
                <li>Book Apps</li>
                <li>Health, Fitness, and Lifestyle Apps</li>
                <li>Real Estate Apps And Home Automation Apps</li>
                <li>Music Apps, Multimedia Apps</li>
                <li>Business Apps</li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className="circle">
                <li>Home Automation Apps</li>
                <li>Finance Apps</li>
                <li>Lifestyle Apps</li>
                <li>News & Magazines Apps</li>
                <li>Personalization Apps</li>
                <li>Shopping Apps</li>
                <li>Sports Apps</li>
                <li>Weather Information Apps</li>
                <li>IOT Apps</li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>
      <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
        <div>
          <h2 className="heading_text mb-0">Mobile App Development Platforms</h2>
          <br />
        </div>
        <div className="tab-content">
        {tabItems.map((item, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={item.targetId}
            role="tabpanel"
            key={index}
          >
            <div className="web_development_technologies row justify-content-center">
              {item.technologies.map((tech, techIndex) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={techIndex}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <img src={tech.iconSrc} alt={`${tech.title} SVG Icon`} />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{tech.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
    </section>

      {/* Service Section */}
      <section className="service_section section_space bg-light">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              Our
              <span className="badge bg-secondary text-white">Specialize</span>
            </div>
            <h2 className="heading_text mb-0">Featured Services</h2>
          </div>

          <div className="row">
            {/* Repeat this block for each service */}
            <div className="col-lg-6">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_1.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">Business Technology Consulting</a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Strategy</a>
                      </li>
                      <li>
                        <a href="#!">Consultation</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_7.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">
                    Software Development Services
                    </a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Management</a>
                      </li>
                      <li>
                        <a href="#!">Transfer</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_3.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">Web Design Services</a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Landing Page</a>
                      </li>
                      <li>
                        <a href="#!">Plugins</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_4.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">
                    Digital Marketing Services
                    </a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Consultation</a>
                      </li>
                      <li>
                        <a href="#!">solution</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_5.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">Mobile Application Development</a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Website</a>
                      </li>
                      <li>
                        <a href="#!">Mobile App</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_block">
                <div className="service_image">
                  <img
                    src="./images/services/service_image_6.webp"
                    alt="IT Management Services"
                  />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <a href="service_details.html">
                    IT Infrastructure And Support Services
                    </a>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <a href="#!">Strategy</a>
                      </li>
                      <li>
                        <a href="#!">Consultation</a>
                      </li>
                    </ul>
                    <a className="icon_block" href="service_details.html">
                      <i className="fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* End of service block */}
          </div>
        </div>
      </section>

      {/* Additional Service Section */}
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
                    <span className="badge bg-secondary text-white">
                      Why Us
                    </span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    Why Our Services are Better Than Others?
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_check_2.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          Quality Comes First
                        </strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_leaf.svg"
                          alt="Leaf SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          Flexible Cooperation
                        </strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_box.svg"
                          alt="Box SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          On-time Delivery
                        </strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_receipt_add.svg"
                          alt="Receipt Add SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          Transparent Costs
                        </strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_monitor.svg"
                          alt="Monitor SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          Qualified Developers
                        </strong>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="iconbox_block layout_icon_left"
                      href="service_details.html"
                    >
                      <span className="iconbox_icon">
                        <img
                          src="./images/icons/icon_microscope.svg"
                          alt="Microscope SVG Icon"
                        />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          Quick Scale-up
                        </strong>
                      </span>
                    </a>
                  </li>
                </ul>
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
  )
}

export default Mobile_Application