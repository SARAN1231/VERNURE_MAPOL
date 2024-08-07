// ITSolutionHeroSection.js
import React from "react";
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import Footer from "../Footer";
import Navbar from "../Navbar";
const ITSolutionHeroSection = () => {
  const [activeTab, setActiveTab] = React.useState('warehouse_inventory');
  const technologies = {
    warehouse_inventory: [
      {  description: 'At Mapol, we offer a cutting-edge barcode solution to revolutionize your warehouse and inventory management.  Our system incorporates automatic data capture, providing you with up-to-date information and minimizing operational costs. Barcode technology significantly reduces data entry errors, allowing your team to work smarter, not harder.Our team of experts provides a comprehensive software and hardware solution tailored to your specific needs.  We equip you with the tools to streamline your warehouse and inventory operations, maximizing your efficiency and profitability.Traditional warehouse and inventory management rely heavily on manual processes, which are prone to human error. Paper-based record keeping is tedious and susceptible to mistakes during data entry.  Misplacing items during stock movement creates discrepancies in inventory levels and disrupts container organization. This domino effect leads to further errors and inefficiencies.' },
     
    ],
    automobile_manufacturing: [
      {  description: 'Streamlining Manufacturing Operations with Tailored Barcode Solutions Challenges in Traditional Manufacturing Management. Contemporary manufacturing environments grapple with intricate material and subassembly tracking, rigorous quality control procedures, and the need for precise Bill of Materials (BOM) management. Additionally, maintaining a smooth production workflow, effectively managing subcontractor work orders, and tracking outsourced jobs pose significant hurdles. These challenges are further compounded by the high capital investment required for specialized raw materials and equipment, often dispersed across diverse locations. By adopting our tailored barcode solutions, manufacturers can overcome traditional operational hurdles in a cost-effective and timely manner. This translates to significant time a' },
      
    ],
    scm_logistics: [
      {  description: 'The Streamlined Flow of Goods: Supply Chain Management with Barcodes. Imagine a complex dance where raw materials transform into finished products, delivered seamlessly from origin to customer. Thats the essence of Supply Chain Management (SCM). It orchestrates the flow of goods and services, including storage, production, and transportation. The key to successful SCM lies in having the right information at the right time. You need accurate figures from vendors, suppliers, and every stage of production. Heres where barcodes come in, providing a simple and cost-effective solution. Barcode technology acts like a digital fingerprint for your products. Each unique code allows for quick and precise identification and tracking. By eliminating manual data entry, barcodes minimize errors caused by human oversight or typos. Scanning barcodes streamlines processes, saving valuable time and resources. Reduced errors and faster operations lead to overall cost savings in your SCM and logistics endeavors.' },
      
    ],
    healthcare_pharmaceutical: [
      {  description: 'The Critical Role of Barcode Technology in Enhancing Healthcare Efficiency and Patient Safety. The integration of barcode technology has revolutionized healthcare and pharmaceutical operations, fostering significant improvements in efficiency and patient safety. Ensuring the well-being of patients is the cornerstone of every healthcare system, demanding meticulous attention from all stakeholders – doctors, nurses, administrators, and support staff. Modern healthcare environments confront a multitude of challenges related to patient safety. Managing the ever-growing volume of patient data, including medical records, specimen collections, and inventory control, proves to be a time-consuming task prone to human error. Traditional manual processes can significantly hinder workflow and contribute to inaccuracies.Accurate patient identification and medication administration through barcode scanning minimize the risk of errors. Rapid data capture via barcodes frees up valuable time for healthcare professionals, allowing them to focus on patient care. Barcode-driven tracking systems ensure efficient inventory control and timely identification of potential issues.' },
      
    ],
    retail: [
      { description: 'Empowering businesses of all sizes with barcode solutions designed to boost competitiveness and elevate customer service.' },
      
    ],
  };
  
  const IconBox = ({ title, description }) => (
    <div className="col-lg-9">
      <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
        <div className="iconbox_content">
          <h3 className="iconbox_title mb-0">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  
  const TechnologiesTabContent = ({ technologies }) => (
    <div className="web_development_technologies row justify-content-center">
      {technologies.map((tech, index) => (
        <IconBox key={index} {...tech} />
      ))}
    </div>
  );
  return (
    <>
      <Navbar />
      <main class="page_content">
        <section className="about_section section_space">
          <Container>
            <Row className="align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="image_wrap">
                  <img
                    src="./images/Barcode-Solutions.png"
                    alt="Techco - About Image"
                    width="100%"
                    height={400}
                  />
                </div>
              </div>
              <Col lg={5}>
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">Barcode Solutions</h2>
                    <p className="heading_description mb-0">
                      Streamline Your Manufacturing with Powerful Barcode
                      Solutions. In today's competitive landscape, manufacturers
                      need efficient operations to control costs and ensure
                      quality.
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
                  <ul className="btns_group unordered_list p-0 justify-content-start">
                    <li>
                      <Button href="pricing.html" className="btn">
                        <span className="btn_label" data-text="Get Started">
                          Get Started
                        </span>
                        <span className="btn_icon">
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="policy_section ">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon">
                    <Image
                      src="./images/icons/icon_user_check.svg"
                      alt="User Check SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Expert Team Members</h3>
                    <p className="mb-0">
                      We take pride in assembling a <br /> diverse and highly
                      skilled.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon bg-warning-subtle">
                    <Image
                      src="./images/icons/icon_headphone.svg"
                      alt="Headphone SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Fastest Customer Service</h3>
                    <p className="mb-0">
                      We pride ourselves on providing the fastest customer
                      service industry.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="iconbox_block layout_icon_left">
                  <div className="iconbox_icon bg-secondary-subtle">
                    <Image
                      src="./images/icons/icon_dollar.svg"
                      alt="Dollar SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Reasonable Pricing</h3>
                    <p className="mb-0">
                      We believe in providing reasonable pricing that offers
                      exceptional.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <br />
        <section className="service_details_section section_space ">
  <Container>
    {/* <div className="details_item_image position-relative">
      <img
        src="./images/resource/ERP-for-Logistics.jpg"
        alt="Service Details Image"
      /> */}
    {/* <a
      className="video_btn ripple_effect"
      href="https://www.youtube.com/watch?v=7e90gBu4pas"
    >
      <span className="btn_icon">
        <i className="fa-solid fa-play"></i>
      </span>
    </a> */}
    {/* </div> */}
    <h2 className="details_item_title text-center">
      Streamline Your Manufacturing with Powerful Barcode Solutions
    </h2>
    <p>
      In today's competitive landscape, manufacturers need efficient operations to control costs and ensure quality. Barcode technology offers a proven solution to automate manual processes and gain real-time data insights. At Mapol, we provide a comprehensive range of barcode solutions tailored to your specific manufacturing needs. We leverage cutting-edge technology and industry trends to create a seamless system for:
    </p>
    <ul>
      <li>Easily track raw materials, work-in-progress, and finished goods for better control and reduced waste.</li>
      <li>Automate tasks and gain real-time data to optimize production processes and increase productivity.</li>
      <li>Reduce errors and ensure product consistency with accurate data capture.</li>
      <li>Minimize waste, streamline operations, and ultimately improve your bottom line.</li>
    </ul>
    <p>
      We offer a one-stop shop for all your barcode needs:
    </p>
    <ul>
      <li>Get the right barcode scanners, printers, and software tailored to your specific use case.</li>
      <li>Design barcode labels that meet your unique requirements for various applications.</li>
      <li>Benefit from our partnerships with leading industry brands like Zebra and Motorola.</li>
      <li>Keep your barcode system running smoothly with essential supplies like labels, ribbons, and scanner parts.</li>
      <li>Move products faster through your production line.</li>
      <li>Eliminate waste and optimize resource allocation.</li>
      <li>Deliver high-quality products on time and every time.</li>
    </ul>
  </Container>  
  

<div className="section_space">
      <div className="heading_block text-center">
        <div
          className="heading_focus_text has_underline d-inline-flex"
          style={{ backgroundImage: 'url("assets/images/shapes/shape_title_under_line.svg")' }}
        >
          Our Solutions
        </div>
        <h2 className="heading_text mb-0">
          We Provide <mark>Solutions</mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <ul className="nav justify-content-center" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'warehouse_inventory' ? 'active' : ''}`}
              onClick={() => setActiveTab('warehouse_inventory')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'warehouse_inventory'}
            >
              Warehouse & Inventory
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'automobile_manufacturing' ? 'active' : ''}`}
              onClick={() => setActiveTab('automobile_manufacturing')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'automobile_manufacturing'}
            >
              Automobile & Manufacturing
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'scm_logistics' ? 'active' : ''}`}
              onClick={() => setActiveTab('scm_logistics')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'scm_logistics'}
            >
              SCM, Logistics & Transportation
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'healthcare_pharmaceutical' ? 'active' : ''}`}
              onClick={() => setActiveTab('healthcare_pharmaceutical')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'healthcare_pharmaceutical'}
            >
              Healthcare & Pharmaceutical
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'retail' ? 'active' : ''}`}
              onClick={() => setActiveTab('retail')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'retail'}
            >
              Retail
            </button>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 'warehouse_inventory' && <TechnologiesTabContent technologies={technologies.warehouse_inventory} />}
          {activeTab === 'automobile_manufacturing' && <TechnologiesTabContent technologies={technologies.automobile_manufacturing} />}
          {activeTab === 'scm_logistics' && <TechnologiesTabContent technologies={technologies.scm_logistics} />}
          {activeTab === 'healthcare_pharmaceutical' && <TechnologiesTabContent technologies={technologies.healthcare_pharmaceutical} />}
          {activeTab === 'retail' && <TechnologiesTabContent technologies={technologies.retail} />}
        </div>
      </div>
    </div>

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
                Our team of experts is ready to collaborate with you every step
                of the way, from initial consultation to implementation.
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
      </main>
      <Footer />
    </>
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
export default ITSolutionHeroSection;
