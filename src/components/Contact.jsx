import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ContactPage = () => {
  return (
    <main className="page_content">
      <Navbar />
      <PageBanner />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

const PageBanner = () => (
  <section
    className="page_banner_section text-center"
    style={{ backgroundImage: "url('./images/shapes/bg_pattern_4.svg')" }}
  >
    <div className="container">
      <div className="heading_focus_text text-white">
        <span className="badge bg-secondary">Contact</span> Us 😍
      </div>
      <h1 className="page_title mb-0 text-white">Contact Us</h1>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="contact_section section_space bg-light">
    <div className="container">
      <div className="contact_info_box row">
        <ContactInfoItem
          iconSrc="./images/icons/icon_map_mark_2.svg"
          title="Location"
          content="Sunshine Business Park Sector-94, Poland"
        />
        <ContactInfoItem
          iconSrc="./images/icons/icon_calling_2.svg"
          title="Contact"
          content={
            <>
              <p className="mb-0">+88(0) 555-0108</p>
              <p className="mb-0">+88(0) 555-01117</p>
            </>
          }
        />
        <ContactInfoItem
          iconSrc="./images/icons/icon_mail_3.svg"
          title="Email"
          content={
            <>
              <p className="mb-0">Techco@example.com</p>
              <p className="mb-0">gmail.@example.com</p>
            </>
          }
        />
        <ContactInfoItem
          iconSrc="./images/icons/icon_calendar_2.svg"
          title="Visit Between"
          content={
            <>
              <p className="mb-0">Mon - Sat: 8.00-5.00</p>
              <p className="mb-0">Sunday: Closed</p>
            </>
          }
        />
      </div>
      <div className="section_space pb-0">
        <div className="row justify-content-lg-between">
          <div className="col-lg-7">
            <ContactForm />
          </div>
          <div className="col-lg-5">
            <div className="gmap_canvas ps-lg-5">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactInfoItem = ({ iconSrc, title, content }) => (
  <div className="col-lg-3 col-md-6 col-sm-6">
    <div className="iconbox_block text-center">
      <div className="iconbox_icon">
        <img src={iconSrc} alt={`${title} Icon`} />
      </div>
      <div className="iconbox_content">
        <h3 className="iconbox_title">{title}</h3>
        <p className="mb-0">{content}</p>
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="contact_form mb-0">
    <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
    <p className="mb-5">
      Give us chance to serve and bring magic to your brand.
    </p>
    <form>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_name">
              Full Name
            </label>
            <input
              id="input_name"
              className="form-control"
              type="text"
              name="name"
              placeholder="Goladra Gomaz"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_email">
              Your Email
            </label>
            <input
              id="input_email"
              className="form-control"
              type="email"
              name="email"
              placeholder="Techco@example.com"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title" htmlFor="input_phone">
              Your Phone
            </label>
            <input
              id="input_phone"
              className="form-control"
              type="tel"
              name="phone"
              placeholder="+8250-3560 6565"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title" htmlFor="input_textarea">
              Message
            </label>
            <textarea
              id="input_textarea"
              className="form-control"
              name="message"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            <span className="btn_label" data-text="Send Message">
              Send Message
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
);

const CallToActionSection = () => (
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
          way, from initial consultation to implementation.
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
);

export default ContactPage;
