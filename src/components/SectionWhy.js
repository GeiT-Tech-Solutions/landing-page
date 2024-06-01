import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/components/SectionWhy.scss"
import sectionWhyImg from "../assets/images/section_why/background-dgital-transformation-solution.webp";
import iconCost from "../assets/images/section_why/Icon-cost.png";
import iconEfficiency from "../assets/images/section_why/Icon-efficiency.png";
import iconQuality from "../assets/images/section_why/Icon-quality.png";
import iconSpeed from "../assets/images/section_why/Icon-speed.png";

const SectionWhy = () => {
    return (
        <>
            <Container fluid>
                <Row className="fix-row">
                    <img src={sectionWhyImg} />
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <h1>why us</h1>
                    <p>
                        At <strong>GeitTech Solution</strong>, we elevate business efficiency with our comprehensive software solutions.
                        From intuitive CRM and HRM systems to robust MRP and WMS integrations, we tailor every solution to meet your specific needs. Our expertise ensures seamless,
                        user-friendly designs that streamline your operations.
                        Experience innovation, customized service, and impactful results as we drive your business success forward with our all-in-one, customer-focused solutions.
                    </p>
                </Row>

                <Row className="d-flex justify-content-evenly">
                    <Col>
                        <div className="card">
                            <img className="card-img-top" src={iconEfficiency} />
                        </div>
                    </Col>
                   
                    <Col>
                        <div className="card">
                            <img className="card-img-top" src={iconQuality} />
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="card">
                            <img className="card-img-top" src={iconSpeed} />
                        </div>
                    </Col>

                    <Col>
                        <div className="card">
                            <img className="card-img-top" src={iconCost} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>


    )
}

export default SectionWhy;