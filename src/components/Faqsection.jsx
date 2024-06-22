import React, { useState } from "react";
import "./App.css"
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqData = [
    {
      question: "Q. How to choose a software development company?",
      answer:
        "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:",
    },
    {
      question: "Q. What is a custom software development company?",
      answer:
        "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:",
    },
    {
      question: "Q. Why do businesses need custom software development?",
      answer:
        "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:",
    },
    {
      question: "Q. How much does custom software development cost?",
      answer:
        "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:",
    },
    {
      question: "Q. Why custom software development is important?",
      answer:
        "A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="faq_section section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage:
                'url("./assets/images/shapes/shape_title_under_line.svg")',
            }}
          >
            F.A.Q.
          </div>
          <h2 className="heading_text mb-0">
            Need a <mark>Support?</mark>
          </h2>
        </div>

        <div className="faq_accordion accordion" id="faq_accordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div
                className={`accordion-button ${
                  activeAccordion === index ? "active" : ""
                }`}
                role="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index ? "true" : "false"}
                aria-controls={`collapse_${index}`}
              >
                {item.question}
              </div>
              <div
                id={`collapse_${index}`}
                className={`accordion-collapse collapse ${
                  activeAccordion === index ? "show" : ""
                }`}
              >
                <div className="accordion-body">
                  <div className="text_a">A.</div>
                  <p>{item.answer}</p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Web and mobile app development
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Software architecture
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            IT consulting and audit
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Legacy system modernization
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">Cloud computing</span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">QA and testing</span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">Business analysis</span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            IT staffing services
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="decoration_item shape_image_1">
        <img src="./images/shapes/shape_space_4.svg" alt="Techco Shape" />
      </div> */}
      <div className="decoration_item shape_image_2">
        {/* <img
          src="./images/shapes/shape_angle_3.webp"
          alt="Techco Shape Angle"
        /> */}
      </div>
    </section>
  );
};

export default FaqSection;
