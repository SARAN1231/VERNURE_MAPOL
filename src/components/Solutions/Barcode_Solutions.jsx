// ITSolutionHeroSection.js
import React from "react";
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Navbar1 from "../Navbar1";
const ITSolutionHeroSection = () => {
  const [activeTab, setActiveTab] = React.useState("warehouse_inventory");
  const technologies = {
    warehouse_inventory: [
      {
        description: (
          <>
            <p>
              At Mapol, we offer a cutting-edge barcode solution to
              revolutionize your warehouse and inventory management. Our system
              incorporates automatic data capture, providing you with up-to-date
              information and minimizing operational costs. Barcode technology
              significantly reduces data entry errors, allowing your team to
              work smarter, not harder. Our team of experts provides a
              comprehensive software and hardware solution tailored to your
              specific needs. We equip you with the tools to streamline your
              warehouse and inventory operations, maximizing your efficiency and
              profitability.
            </p>
            <p>
              Traditional warehouse and inventory management rely heavily on
              manual processes, which are prone to human error. Paper-based
              record keeping is tedious and susceptible to mistakes during data
              entry. Misplacing items during stock movement creates
              discrepancies in inventory levels and disrupts container
              organization. This domino effect leads to further errors and
              inefficiencies.
            </p>
            <h4>Features and Benefits:</h4>
            <ul>
              <li>
                Barcodes on goods speed up storage and location processes.
              </li>
              <li>
                Optimizes inventory control by tracking warehouse stock levels.
              </li>
              <li>
                Accuracy Up, Manual Entry Out: Combines the benefits into a
                concise phrase.
              </li>
              <li>
                Tighter Inventory Control: Track Everything, Eliminate Expired
                Stock.
              </li>
              <li>
                Optimize inventory, fulfill orders faster, and improve
                decision-making.
              </li>
              <li>
                Minimize picking time & effort: Use tech to optimize picking.
              </li>
            </ul>
          </>
        ),
        imageUrl: "./images/Barcode-Solutions.png",
      },
    ],
    automobile_manufacturing: [
      {
        description: (
          <>
            <p>
              Streamlining Manufacturing Operations with Tailored Barcode
              Solutions. Contemporary manufacturing environments grapple with
              intricate material and subassembly tracking, rigorous quality
              control procedures, and the need for precise Bill of Materials
              (BOM) management. Additionally, maintaining a smooth production
              workflow, effectively managing subcontractor work orders, and
              tracking outsourced jobs pose significant hurdles. These
              challenges are further compounded by the high capital investment
              required for specialized raw materials and equipment, often
              dispersed across diverse locations.
            </p>
            <p>
              By adopting our tailored barcode solutions, manufacturers can
              overcome traditional operational hurdles in a cost-effective and
              timely manner. This translates to significant time and cost
              savings.
            </p>
            <h4>Features and Benefits:</h4>
            <ul>
              <li>User-friendly application with high adaptability.</li>
              <li>
                Get things done on your schedule with customizable alerts.
              </li>
              <li>
                Simplify work order management, production monitoring, finished
                product inventory control, and outsourced job oversight.
              </li>
              <li>
                Well-organized inventory enables swift problem identification.
              </li>
              <li>
                Highlights the connection between accurate information and
                achieving better results.
              </li>
              <li>
                Barcode labels make it easy to quickly and accurately identify
                products or components.
              </li>
              <li>Emphasizes measures to ensure all steps are completed.</li>
              <li>Automatic shell recognition.</li>
              <li>
                Never lose track of your shipment! Easy monitoring from packing
                to delivery.
              </li>
              <li>Minimizes errors by eliminating duplicate work efforts.</li>
            </ul>
          </>
        ),
        imageUrl: "./images/Barcode-Solutions.png",
      },
    ],
    scm_logistics: [
      {
        description: (
          <>
            <p>
              The Streamlined Flow of Goods: Supply Chain Management with
              Barcodes. Imagine a complex dance where raw materials transform
              into finished products, delivered seamlessly from origin to
              customer. That's the essence of Supply Chain Management (SCM). It
              orchestrates the flow of goods and services, including storage,
              production, and transportation. The key to successful SCM lies in
              having the right information at the right time. You need accurate
              figures from vendors, suppliers, and every stage of production.
            </p>
            <p>
              Here's where barcodes come in, providing a simple and
              cost-effective solution. Barcode technology acts like a digital
              fingerprint for your products. Each unique code allows for quick
              and precise identification and tracking. By eliminating manual
              data entry, barcodes minimize errors caused by human oversight or
              typos. Scanning barcodes streamlines processes, saving valuable
              time and resources. Reduced errors and faster operations lead to
              overall cost savings in your SCM and logistics endeavors.
            </p>
            <h4>Features and Benefits:</h4>
            <ul>
              <li>
                User-focused application that is easy to learn and navigate.
              </li>
              <li>
                Creates personalized to-do lists and reminds you when tasks are
                due.
              </li>
              <li>
                Boosts data capture efficiency by reducing processing time and
                human mistakes.
              </li>
              <li>Revolutionizes how goods move in every industry.</li>
              <li>
                Dedicated team for precise distribution list management for
                successful deliveries.
              </li>
              <li>
                Save time and peace of mind with clear tracking of your regular
                shipments.
              </li>
              <li>
                Real-time shipment tracking for all your transportation needs.
              </li>
              <li>Tracking Goods In Warehouse(s) with Barcodes.</li>
              <li>Streamlined inventory visibility throughout its journey.</li>
              <li>Smooth Deliveries: Shipping Control Explained.</li>
              <li>
                Keeping Tabs on Your Moving Goods: Mastering Inventory Transfers
                and In-Transit Stock.
              </li>
            </ul>
          </>
        ),
        imageUrl: "./images/Barcode-Solutions.png",
      },
    ],
    healthcare_pharmaceutical: [
      {
        description: (
          <>
            <p>
              The Critical Role of Barcode Technology in Enhancing Healthcare
              Efficiency and Patient Safety. The integration of barcode
              technology has revolutionized healthcare and pharmaceutical
              operations, fostering significant improvements in efficiency and
              patient safety. Ensuring the well-being of patients is the
              cornerstone of every healthcare system, demanding meticulous
              attention from all stakeholders – doctors, nurses, administrators,
              and support staff.
            </p>
            <p>
              Modern healthcare environments confront a multitude of challenges
              related to patient safety. Managing the ever-growing volume of
              patient data, including medical records, specimen collections, and
              inventory control, proves to be a time-consuming task prone to
              human error. Traditional manual processes can significantly hinder
              workflow and contribute to inaccuracies. Accurate patient
              identification and medication administration through barcode
              scanning minimize the risk of errors. Rapid data capture via
              barcodes frees up valuable time for healthcare professionals,
              allowing them to focus on patient care. Barcode-driven tracking
              systems ensure efficient inventory control and timely
              identification of potential issues.
            </p>
            <h4>Features and Benefits:</h4>
            <ul>
              <li>Faster Workflows & Smarter Stock.</li>
              <li>
                Keeps patients safe and helps doctors and nurses do their jobs
                well.
              </li>
              <li>Safe blood: Check twice, clear labels: No mistakes.</li>
              <li>
                Get it right: Right med, right amount, right time, right person,
                right way.
              </li>
              <li>Wristbands with barcodes track patients in the hospital.</li>
              <li>Safer meds, faster: Improving hospital pharmacy.</li>
              <li>Scan barcodes wirelessly to track batches in pharma.</li>
              <li>
                Barcodes help stores like groceries, clothes, and big stores
                keep track.
              </li>
              <li>
                Doctors can see patient info right away by scanning a sticker.
              </li>
            </ul>
          </>
        ),
        imageUrl: "./images/Barcode-Solutions.png",
        
      },
    ],
    retail: [
      {
        description: (
          <>
            <p>
              Empowering businesses of all sizes with barcode solutions designed
              to boost competitiveness and elevate customer service.
            </p>
            <h4>Features and Benefits:</h4>
            <ul>
              <li>
                Making sure the price is right. Knowing why something costs what
                it does.
              </li>
              <li>Get customers helped faster by reducing wait times.</li>
              <li>Enjoy the convenience of self-checkout.</li>
              <li>
                Reorder level triggers restocks based on sales & lead time to
                avoid stockouts.
              </li>
              <li>Reduced billing mistakes.</li>
              <li>Easy-find products, find-if-lost items.</li>
              <li>
                Shopper cards let stores reward regular customers with
                discounts.
              </li>
            </ul>
          </>
        ),
        
      },
    ],
  };

  const IconBox = ({ title, icon, description, imageUrl }) => (
    <div className="col-lg-9">
      <div className="iconbox_block text-start p-0 shadow-none bg-transparent">
        <div className="iconbox_content">
          <h1 className="iconbox_title mb-0">
            <i className={`fas fa-${icon} me-2`}></i>
            {title}
          </h1>
          <div className="image_wrap d-flex justify-content-center">
            <img
              src={imageUrl}
              alt={title}
              className="img-fluid"
              height={200}
            />
          </div>
          <br />
          {description}
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
      <Navbar1 />
      <main className="page_content ">
        <section className="about_section section_space bg-light" >
          <Container>
            <Row className="align-items-center justify-content-lg-between" style={{marginTop:'40px'}}>
              <div className="col-lg-6" >
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

        <section className="policy_section section_space bg-light ">
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
        <section className="service_details_section section_space bg-light ">
          <div className="container">
            {/* <div className="details_item_image position-relative mb-4">
              <img
                src="./images/resource/ERP-for-Logistics.jpg"
                alt="Service Details Image"
                className="w-100 rounded shadow"
              />
              <a
                className="video_btn ripple_effect position-absolute"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
                style={{ bottom: "20px", left: "20px" }}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div> */}
            <h2 className="details_item_title text-center mb-4">
              Streamline Your Manufacturing with Powerful Barcode Solutions
            </h2>
            <p>
              In today's competitive landscape, manufacturers need efficient
              operations to control costs and ensure quality. Barcode technology
              offers a proven solution to automate manual processes and gain
              real-time data insights. At Mapol, we provide a comprehensive
              range of barcode solutions tailored to your specific manufacturing
              needs. We leverage cutting-edge technology and industry trends to
              create a seamless system for:
            </p>
            <ul className="list-unstyled mb-4">
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Easily track raw materials, work-in-progress, and finished goods
                for better control and reduced waste.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Automate tasks and gain real-time data to optimize production
                processes and increase productivity.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Reduce errors and ensure product consistency with accurate data
                capture.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Minimize waste, streamline operations, and ultimately improve
                your bottom line.
              </li>
            </ul>
            <p>We offer a one-stop shop for all your barcode needs:</p>
            <ul className="list-unstyled mb-4">
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Get the right barcode scanners, printers, and software tailored
                to your specific use case.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Design barcode labels that meet your unique requirements for
                various applications.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Benefit from our partnerships with leading industry brands like
                Zebra and Motorola.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Keep your barcode system running smoothly with essential
                supplies like labels, ribbons, and scanner parts.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Move products faster through your production line.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Eliminate waste and optimize resource allocation.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary me-2"></i>
                Deliver high-quality products on time and every time.
              </li>
            </ul>
          </div>

          <div className="section_space">
            <div className="heading_block text-center">
              {/* <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage:
                    'url("assets/images/shapes/shape_title_under_line.svg")',
                }}
              >
                Barcode Solutions
              </div> */}
              <h2 className="heading_text mb-0">
                 Barcode <mark>Solutions</mark>
              </h2>
            </div>

            <div className="tab_block_wrapper">
              <ul className="nav justify-content-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "warehouse_inventory" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("warehouse_inventory")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "warehouse_inventory"}
                  >
                    <i className="fas fa-warehouse me-2"></i>
                    Warehouse & Inventory
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "automobile_manufacturing" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("automobile_manufacturing")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "automobile_manufacturing"}
                  >
                    <i className="fas fa-car me-2"></i>
                    Automobile & Manufacturing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "scm_logistics" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("scm_logistics")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "scm_logistics"}
                  >
                    <i className="fas fa-truck me-2"></i>
                    SCM & Logistics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "healthcare_pharmaceutical" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("healthcare_pharmaceutical")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "healthcare_pharmaceutical"}
                  >
                    <i className="fas fa-heartbeat me-2"></i>
                    Healthcare & Pharmaceutical
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "retail" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("retail")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "retail"}
                  >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Retail
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-4">
                <div
                  className={`tab-pane fade ${
                    activeTab === "warehouse_inventory" ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <TechnologiesTabContent
                    technologies={technologies.warehouse_inventory}
                  />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "automobile_manufacturing"
                      ? "show active"
                      : ""
                  }`}
                  role="tabpanel"
                >
                  <TechnologiesTabContent
                    technologies={technologies.automobile_manufacturing}
                  />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "scm_logistics" ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <TechnologiesTabContent
                    technologies={technologies.scm_logistics}
                  />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "healthcare_pharmaceutical"
                      ? "show active"
                      : ""
                  }`}
                  role="tabpanel"
                >
                  <TechnologiesTabContent
                    technologies={technologies.healthcare_pharmaceutical}
                  />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "retail" ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <TechnologiesTabContent technologies={technologies.retail} />
                </div>
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
