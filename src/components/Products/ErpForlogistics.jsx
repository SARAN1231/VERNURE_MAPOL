import React, { useState } from 'react'
import Footer from '../Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../Navbar';

const ErpForlogistics = () => {
      const [activeAccordion, setActiveAccordion] = useState(null);

      const faqData = [
        {
          question: "Operation Module",
          answer: (
            <div className="content">
              <Row className="no-padd-left no-padd-right">
                <Col lg={4}>
                  <ul className="cog">
                    <li>Booking Details</li>
                    <li>Outgoing Manifest</li>
                    <li>Incoming Manifest</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="cog">
                    <li>Run-sheet Preparation</li>
                    <li>Run-sheet updating</li>
                    <li>POD update and Doc upload</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="cog">
                    <li>Transshipment Details</li>
                    <li>Petty Cash Handling Details</li>
                  </ul>
                </Col>
              </Row>
            </div>
          ),
        },
        {
          question: "Shipment Tracking",
          answer: (
            <Row className="no-padd-left no-padd-right">
              <Col lg={4}>
                <ul className="anchor">
                  <li>Multiple Tracking</li>
                  <li>Shipment Internal Tracking</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="anchor">
                  <li>Shipment Online Tracking</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="anchor">
                  <li>Provide tracking option on Website</li>
                </ul>
              </Col>
            </Row>
          ),
        },
        {
          question: "Billing and Invoice",
          answer: (
            <div className="content">
              <Row className="no-padd-left no-padd-right">
                <Col lg={4}>
                  <ul className="file">
                    <li>Customer wise invoice</li>
                    <li>Doc Wise Invoice</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="file">
                    <li>Bill Submission</li>
                    <li>Invoice Tracking</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="file">
                    <li>Customer Outstanding Report</li>
                    <li>Finance and Accounts Management</li>
                  </ul>
                </Col>
              </Row>
            </div>
          ),
        },
        {
          question: "Reports",
          answer: (
            <div className="content">
              <Row className="no-padd-left no-padd-right">
                <Col lg={4}>
                  <ul className="chart">
                    <li>Incoming Manifest</li>
                    <li>Outgoing Manifest</li>
                    <li>Run-sheet</li>
                    <li>GCN Stock Update</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="chart">
                    <li>Rate Master</li>
                    <li>Overall Count Report</li>
                    <li>Sales Report</li>
                    <li>Receiving and Booking Report</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="chart">
                    <li>Target Report</li>
                    <li>Load Handling Report</li>
                    <li>Payment Report, Etc..</li>
                  </ul>
                </Col>
              </Row>
            </div>
          ),
        },
      ];

      const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
      };
  return (
    <main className="page_content">
      <Navbar />
      {/* Page Banner Section */}
      <section
        className="page_banner_section text-center"
        style={{ backgroundColor: "#E3F0FF" }}
      >
        <Container>
          <div
            className="heading_focus_text "
            style={{ color: "black" }}
          >
            Product
            <span className="badge bg-secondary">Details 😍</span>
          </div>
          <h1 className="page_title mb-0 ">ERP for Logistics</h1>
        </Container>
      </section>

      {/* Service Details Section */}
      <section className="service_details_section section_space bg-light">
        <Container>
          <div className="details_item_image position-relative">
            <img
              src="./images/resource/ERP-for-Logistics.jpg"
              alt="Service Details Image"
            />
            {/* <a
              className="video_btn ripple_effect"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <span className="btn_icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </a> */}
          </div>
          <h2 className="details_item_title">Logistics ERP Software</h2>
          <p>
            Logistics process is the part and vital role of supply chain
            management that plans, implements and controls the effective forward
            and reverse flow and storage of goods &amp; services. Its related
            information between the point of origin and the point of consumption
            in order to meet customer's requirements.
          </p>
          <p>
            At Mapol, we have invested in the people and technology to bring new
            innovative ideas and lean processes & operations to help customers
            for their logistics business process
          </p>
          <p>
            Mapol Logistics ERP addresses all important Logistics functions and
            enables the customer to integrate all operations data into a system
            to restructure and improve decision making with real time data to
            the management.
          </p>
          <p>
            Designed with the help of industry experts with holistic view and
            challenges faced by the transport and logistics companies. We have
            an individual application which suits for the logistics industry at
            their level of business i.e. 3rd party logistics, Parcel Services,
            Couriers Services, Transport and Fleet operators, air Cargo movers
            and Clearing and Forwarding agents. Our application support to
            companies those who operate their transportation through
            AIR,ROAD,RAIL
          </p>

          <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
            <div className="col-lg-12 no-padd-left ">
              <h4>Why Mapol Logistics Software to your organization?</h4>
              <div className="col-lg-12">
                <ul className="circle col-lg-12">
                  <li>
                    Mapol Logistics Software will help to improve your business
                    process easily. We customize your business process data each
                    and every step as it is in our software.
                  </li>
                  <li>
                    Mapol logistics software supports end to end solutions that
                    are procurement, transportation Management, warehouse
                    management, inventory management, label and packing in order
                    to meet customer’s requirement.
                  </li>
                  <li>
                    It support for Small and Midsize industries to simplify
                    their business process.
                  </li>
                  <li>
                    Streamline your logistics process and manage your business
                    at any time, any where &amp; analytics reports.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
            <div className="col-lg-12 no-padd-left ">
              <h4>Features:</h4>
              <Row className="mb-4">
                <Col lg={4}>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">Supports to 3PL</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Supports to Multi modes of shipment
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Supports to Multi currency
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Real time GPS tracking
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Live alerts and notifications
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Integration with Excel
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Real time analytics and reports
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Better Customer Response
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Improved Productivity
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        More efficient use of dispatchers
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Improved working environment
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">Reduced paperwork</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Easy to analyze Performance Reports
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Improved bottom line
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">Improved cash flow</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Reduction in rating errors
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">Improved invoicing</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Accounts consolidation
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Automated accounts receivables
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Integration of departments
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">Reduced overhead</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Improved customer service
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">EDI – Web enabled</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Deployment option in cloud or on-premise
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Dynamically interlinked with all modules
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <img
                          src="./images/icons/icon_check_3.svg"
                          alt="Check SVG Icon"
                        />
                      </span>
                      <span className="icon_list_text">
                        Independent workflows based on customer need’s
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
          <div className="section_space">
            <div className="heading_block text-center">
              <h2 className="heading_text mb-0">
                Other <mark>Logistics</mark>
              </h2>
            </div>

            <div className="tab_block_wrapper">
              <ul className="nav justify-content-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_web_platform"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Parcel and Courier <br /> Services ERP Software
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_databases"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    ERP for Custom Clearance <br /> and Forwarding Agent
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_cloud_devops"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    ERP for 3rd Party <br /> Logistics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_mobile_apps"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Transport Management <br /> Software
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab_web_platform"
                  role="tabpanel"
                >
                  <div className="bhoechie-tab-content active">
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div className="sidebar-title">
                        <h2>Parcel and Courier Services ERP Software</h2>
                      </div>
                      <p>
                        This ERP software is exclusively suits for companies
                        providing parcel and Courier services. This Parcel and
                        Courier Services software automates the flow of data
                        from the point of booking to the package and delivery
                        point. The software includes functionality to track
                        package location and status at any time.
                      </p>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          This module enables you to capture the data at the
                          various locations
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Rate and Contract Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Consignment Booking
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Out for delivery notification
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                POD Status update
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Billing to Customer
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Online tracking option
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Outward and Inward register of Consignments
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          Our application allows management to have a glance at
                          single point regarding their overall business.
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Till date Customer history
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Day booking and Sales close (Own Branch /
                                Franchise / Credit / Cash)
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily Load Movement
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily GCN/POD/A/W consumption vs. Stock report
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Invoicing details
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Outstanding details
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-lg-6">
                        <div
                          className="faq_accordion accordion"
                          id="service_process_faq"
                        >
                          {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                              <div
                                className={`accordion-button ${
                                  activeAccordion === index ? "active" : ""
                                }`}
                                role="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={
                                  activeAccordion === index ? "true" : "false"
                                }
                                aria-controls={`collapse_${index}`}
                              >
                                {item.question}
                              </div>
                              <div
                                id={`collapse_${index}`}
                                className={`accordion-collapse collapse ${
                                  activeAccordion === index ? "show" : ""
                                }`}
                                data-bs-parent="#service_process_faq"
                              >
                                <div>
                                  <p className="m-0">{item.answer}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <ul className="content_layer_group unordered_list_block text-center">
                          {faqData.map((item, index) => (
                            <li
                              key={index}
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse_${index}`}
                              aria-expanded={
                                activeAccordion === index ? "true" : "false"
                              }
                              aria-controls={`collapse_${index}`}
                            >
                              <span>{item.question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_databases"
                  role="tabpanel"
                >
                  <div className="bhoechie-tab-content active">
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div className="sidebar-title">
                        <h2>ERP for Custom Clearance and Forwarding Agent</h2>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={6}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Billing/Invoicing - All types of bills
                              </span>
                            </li>

                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Generate all documentation – MBL/HBL, EGM, GSP,
                                Stuffing Report, etc.
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Supports all shipment types - export &amp;
                                import, sea &amp; air
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Attach documents to job for easy reference even
                                after a year
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={6}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Send emails to importer/exporter and keep track
                                at job-level
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customs filing - Shipping Bill, Bill of Entry
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Maintains complete job details - invoices,
                                containers, vehicles, expenses
                              </span>
                            </li>

                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Generates all types of reports and a lot more…
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>Salient Features: Bookings –Sea (LCL/FCL)/Air</h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Rate and Contract Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Consignment Booking
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Out for delivery notification
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                POD Status update
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Billing to Customer
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Online tracking option
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Outward and Inward register of Consignments
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          Our application allows management to have a glance at
                          single point regarding their overall business.
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Till date Customer history
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Day booking and Sales close (Own Branch /
                                Franchise / Credit / Cash)
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily Load Movement
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily GCN/POD/A/W consumption vs. Stock report
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Invoicing details
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Outstanding details
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-lg-6">
                        <div
                          className="faq_accordion accordion"
                          id="service_process_faq"
                        >
                          {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                              <div
                                className={`accordion-button ${
                                  activeAccordion === index ? "active" : ""
                                }`}
                                role="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={
                                  activeAccordion === index ? "true" : "false"
                                }
                                aria-controls={`collapse_${index}`}
                              >
                                {item.question}
                              </div>
                              <div
                                id={`collapse_${index}`}
                                className={`accordion-collapse collapse ${
                                  activeAccordion === index ? "show" : ""
                                }`}
                                data-bs-parent="#service_process_faq"
                              >
                                <div>
                                  <p className="m-0">{item.answer}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <ul className="content_layer_group unordered_list_block text-center">
                          {faqData.map((item, index) => (
                            <li
                              key={index}
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse_${index}`}
                              aria-expanded={
                                activeAccordion === index ? "true" : "false"
                              }
                              aria-controls={`collapse_${index}`}
                            >
                              <span>{item.question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_cloud_devops"
                  role="tabpanel"
                >
                  <div className="bhoechie-tab-content active">
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div className="sidebar-title">
                        <h2>Parcel and Courier Services ERP Software</h2>
                      </div>
                      <p>
                        This ERP software is exclusively suits for companies
                        providing parcel and Courier services. This Parcel and
                        Courier Services software automates the flow of data
                        from the point of booking to the package and delivery
                        point. The software includes functionality to track
                        package location and status at any time.
                      </p>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          This module enables you to capture the data at the
                          various locations
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Rate and Contract Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Consignment Booking
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Out for delivery notification
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                POD Status update
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Billing to Customer
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Online tracking option
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Outward and Inward register of Consignments
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          Our application allows management to have a glance at
                          single point regarding their overall business.
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Till date Customer history
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Day booking and Sales close (Own Branch /
                                Franchise / Credit / Cash)
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily Load Movement
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily GCN/POD/A/W consumption vs. Stock report
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Invoicing details
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Outstanding details
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-lg-6">
                        <div
                          className="faq_accordion accordion"
                          id="service_process_faq"
                        >
                          {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                              <div
                                className={`accordion-button ${
                                  activeAccordion === index ? "active" : ""
                                }`}
                                role="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={
                                  activeAccordion === index ? "true" : "false"
                                }
                                aria-controls={`collapse_${index}`}
                              >
                                {item.question}
                              </div>
                              <div
                                id={`collapse_${index}`}
                                className={`accordion-collapse collapse ${
                                  activeAccordion === index ? "show" : ""
                                }`}
                                data-bs-parent="#service_process_faq"
                              >
                                <div>
                                  <p className="m-0">{item.answer}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <ul className="content_layer_group unordered_list_block text-center">
                          {faqData.map((item, index) => (
                            <li
                              key={index}
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse_${index}`}
                              aria-expanded={
                                activeAccordion === index ? "true" : "false"
                              }
                              aria-controls={`collapse_${index}`}
                            >
                              <span>{item.question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_mobile_apps"
                  role="tabpanel"
                >
                  <div className="bhoechie-tab-content active">
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div className="sidebar-title">
                        <h2>Parcel and Courier Services ERP Software</h2>
                      </div>
                      <p>
                        This ERP software is exclusively suits for companies
                        providing parcel and Courier services. This Parcel and
                        Courier Services software automates the flow of data
                        from the point of booking to the package and delivery
                        point. The software includes functionality to track
                        package location and status at any time.
                      </p>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          This module enables you to capture the data at the
                          various locations
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Rate and Contract Master
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Consignment Booking
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Out for delivery notification
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                POD Status update
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Billing to Customer
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Online tracking option
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Outward and Inward register of Consignments
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="default-text-block col-lg-12 no-padd-left no-padd-right">
                      <div>
                        <h4>
                          Our application allows management to have a glance at
                          single point regarding their overall business.
                        </h4>
                      </div>
                      <Row className="no-padd-left no-padd-right">
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Till date Customer history
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Day booking and Sales close (Own Branch /
                                Franchise / Credit / Cash)
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily Load Movement
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Daily GCN/POD/A/W consumption vs. Stock report
                              </span>
                            </li>
                          </ul>
                        </Col>
                        <Col lg={4}>
                          <ul className="icon_list unordered_list_block">
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Invoicing details
                              </span>
                            </li>
                            <li>
                              <span className="icon_list_icon">
                                <img
                                  src="./images/icons/icon_check_3.svg"
                                  alt="Check SVG Icon"
                                />
                              </span>
                              <span className="icon_list_text">
                                Customer Outstanding details
                              </span>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-lg-6">
                        <div
                          className="faq_accordion accordion"
                          id="service_process_faq"
                        >
                          {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                              <div
                                className={`accordion-button ${
                                  activeAccordion === index ? "active" : ""
                                }`}
                                role="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={
                                  activeAccordion === index ? "true" : "false"
                                }
                                aria-controls={`collapse_${index}`}
                              >
                                {item.question}
                              </div>
                              <div
                                id={`collapse_${index}`}
                                className={`accordion-collapse collapse ${
                                  activeAccordion === index ? "show" : ""
                                }`}
                                data-bs-parent="#service_process_faq"
                              >
                                <div>
                                  <p className="m-0">{item.answer}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <ul className="content_layer_group unordered_list_block text-center">
                          {faqData.map((item, index) => (
                            <li
                              key={index}
                              role="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse_${index}`}
                              aria-expanded={
                                activeAccordion === index ? "true" : "false"
                              }
                              aria-controls={`collapse_${index}`}
                            >
                              <span>{item.question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title">Services Outcome</h3>
          <p className="mb-4">
            Here are six key points that can be associated with a digital
            Transformation gallery case global Digital Systems Engineer Services
            leader helping Fortune 500 companies on their innovation agenda:
          </p>
          <Row className="mb-4">
            <Col lg={6}>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Scalability and Flexibility
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Security and Compliance
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Performance Optimization
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">User Experience</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">
                    Security and Compliance
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <img
                      src="./images/icons/icon_check_3.svg"
                      alt="Check SVG Icon"
                    />
                  </span>
                  <span className="icon_list_text">Training and Education</span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_2.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_3.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="details_item_image m-0">
                <img
                  src="./images/services/service_details_image_4.webp"
                  alt="Service Details Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
                  <ServiceItem
                    icon="./images/icons/icon_check_2.svg"
                    title="Quality Comes First"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_leaf.svg"
                    title="Flexible Cooperation"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_box.svg"
                    title="On-time Delivery"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_receipt_add.svg"
                    title="Transparent Costs"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_monitor.svg"
                    title="Qualified Developers"
                  />
                  <ServiceItem
                    icon="./images/icons/icon_microscope.svg"
                    title="Quick Scale-up"
                  />
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
        <Container className="text-center">
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
        </Container>
      </section>
      <Footer />
    </main>
  );
};
const ServiceItem = ({ icon, title }) => (
  <li>
    <a className="iconbox_block layout_icon_left" href="service_details.html">
      <span className="iconbox_icon">
        <img src={icon} alt="Service Icon" />
      </span>
      <span className="iconbox_content">
        <strong className="iconbox_title mb-0">{title}</strong>
      </span>
    </a>
  </li>
);
export default ErpForlogistics