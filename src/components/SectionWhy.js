import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/components/SectionWhy.scss";
import sectionWhyImg from "../assets/images/section_why/background-dgital-transformation-solution.webp";
import iconCost from "../assets/images/section_why/Icon-cost.png";
import iconEfficiency from "../assets/images/section_why/Icon-efficiency.png";
import iconQuality from "../assets/images/section_why/Icon-quality.png";
import iconSpeed from "../assets/images/section_why/Icon-speed.png";

const SectionWhy = () => {
  return (
    <>
      <div className="why-bg">
        <div className="why-bg-overlay">
        <Container className="why-bg-content">
          <Row>
            <h2>Why Us?</h2>
            <p>
              At <strong>GeitTech Solution</strong>, we elevate business
              efficiency with our comprehensive software solutions. From
              intuitive CRM and HRM systems to robust MRP and WMS integrations,
              we tailor every solution to meet your specific needs. Our
              expertise ensures seamless, user-friendly designs that streamline
              your operations. Experience innovation, customized service, and
              impactful results as we drive your business success forward with
              our all-in-one, customer-focused solutions.
            </p>
          </Row>

          <div className="why-icons">
            <img src={iconEfficiency} />
            <img src={iconQuality} />
            <img src={iconSpeed} />
            <img src={iconCost} />
          </div>
        </Container>
        </div>
        
      </div>
    </>
  );
};

export default SectionWhy;
