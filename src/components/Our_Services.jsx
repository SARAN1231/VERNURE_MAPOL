import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap";

const Our_Services = () => {
  return (
    <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{
              backgroundImage:
                'url("./images/shapes/shape_title_under_line.svg")',
            }}
          >
            Our Services
          </div>
          <h2 className="heading_text mb-0">
            How We Can <mark>Help</mark> You
          </h2>
        </div>

        <div className="row">
          {[
            {
              icon: "icon_code.svg",
              title: "ERP for Manufacturing",
              link: "service_details.html",
              services: [
                "Software architecture design",
                "System integration services",
                "Data migration services",
                "Legacy app modernization",
              ],
            },
            {
              icon: "icon_programming_tree.svg",
              title: "ERP for Logistics",
              link: "service_details.html",
              services: [
                "TechGuard Audit",
                "CyberSafe Audit & IT Consulting",
                "AssuranceEdge & IT Consulting",
                "IT Sentry Audit & IT Consulting",
              ],
            },
            {
              icon: "icon_monitor_2.svg",
              title: "ESG Automation",
              link: "service_details.html",
              services: [
                "Web app development services",
                "Web portal development services",
                "Website development services",
                "Offshore web development",
              ],
            },
            {
              icon: "icon_phone.svg",
              title: "Asset Tracking",
              link: "service_details.html",
              services: [
                "Android development services",
                "iOS app development services",
                "Mobile application design services",
                "Enterprise mobile app development",
              ],
            },
            {
              icon: "icon_bug.svg",
              title: "Paper Production Tracking",
              link: "service_details.html",
              services: [
                "PixelPerfection UI/UX Design",
                "DesignCraft UI/UX Design",
                "CreativeWave UI/UX Design",
                "InterfaceGenius UI/UX Design",
              ],
            },
            {
              icon: "icon_programming.svg",
              title: "FMEA Insight",
              link: "service_details.html",
              services: [
                "CareCraft Maintenance",
                "FixItPro Maintenance",
                "TechCare Maintenance",
                "AssistEdge Maintenance",
              ],
            },
          ].map((service, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service_block_2">
                <div className="service_icon">
                  <img
                    src={`./images/icons/${service.icon}`}
                    alt={`Techco - Service icon`}
                  />
                </div>
                <h3 className="service_title">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <ul className="icon_list unordered_list_block">
                  {service.services.map((item, i) => (
                    <li key={i}>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {[
        "shape_line_5.svg",
        "shape_line_6.svg",
        "shape_space_1.svg",
        "shape_angle_1.webp",
        "shape_angle_2.webp",
      ].map((shape, index) => (
        <div className={`decoration_item shape_image_${index + 1}`} key={index}>
          <img src={`./images/shapes/${shape}`} alt={`Techco Shape`} />
        </div>
      ))}
    </section>
  );
};

export default Our_Services;
