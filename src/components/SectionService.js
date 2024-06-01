import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../assets/styles/components/SectionService.scss';
import sv1 from "../assets/images/section_services/services_section.webp";
import sv2 from "../assets/images/section_services/services_section_2.webp";
import sv3 from "../assets/images/section_services/services_section_3.webp";

const SectionService = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="sectionTitle">our service</h1>
                        <hr className="styleHr" />
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>

            <Container style={{marginTop: "15px"}}>
                <Row className="d-flex justify-content-evenly">
                    <Col>
                        <div className="card card-fix" style={{height:"500px"}}>
                            <img className="card-img-top" src={sv2} />
                            <div className="card-body">
                                <h4>Landing Page Design</h4>
                                <p className="card-text">
                                    Create stunning and high-converting landing pages tailored to your marketing goals.
                                    Our designs are optimized for user engagement and lead generation.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card card-fix" style={{height:"500px"}}>
                            <img className="card-img-top" src={sv1} />
                            <div className="card-body">
                                <h4>E-commerce Development</h4>
                                <p className="card-text">
                                    Build robust and scalable e-commerce websites that provide a seamless shopping experience.
                                    Our solutions include secure payment integration, inventory management, and customer analytics.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card card-fix" style={{height:"500px"}}>
                            <img className=" card-img-top" src={sv3} />
                            <div className="card-body">
                                <h4>ERP Development</h4>
                                <p className="card-text">
                                    Develop comprehensive ERP systems tailored to your business processes.
                                    Our ERP solutions enhance productivity, streamline operations, and provide real-time business insights.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SectionService;