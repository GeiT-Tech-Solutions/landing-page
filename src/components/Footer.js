import React from "react";
import "../assets/styles/components/Footer.scss";
import footerBackground from "../assets/images/Footer/footer-bg.jpg";
import iconGT from "../assets/images/icons/logo.png";
import { Container, Row, Navbar } from "react-bootstrap";
const Footer = () => (
  <>
    <div className="footer-background">
      <div className="footer-bg-overlay">

      </div>

      <Container className="footer-bg-content">
        <Row className="footer-bg-content-center">
          <div className="mx-auto">
            <Navbar.Brand href="#home" className="item-center">
              <div className="d-flex align-items-center">
                <img src={iconGT} className="resizeIconFooter" />
                <h4 className="footer-icon-title">GEIT TECH SOLUTIONS</h4>
              </div>
            </Navbar.Brand>
          </div>

          <div className="mx-auto contact-footer-overlay">
            <div className="col d-flex align-items-center contact-footer">
              <p className="col-2">
                <strong>Address</strong>
              </p>
              <p className="contact-footer-para col-10">
                <a href="#">
                  45/6 Bui Quang La str, Section 12, Go Vap District, Ho Chi Minh
                  city
                </a>
              </p>
            </div>

            <div className="col d-flex align-items-center contact-footer">
              <p className="col-2">
                <strong>Tel</strong>
              </p>
              <p className="contact-footer-para col-10"> 
              <a href="#">
              (+84)83 333 727 12
              </a>
              </p>
            </div>

            <div className="col d-flex align-items-center contact-footer">
              <p className="col-2">
                <strong>Email</strong>
              </p>
              <p className="contact-footer-para col-10">
                <a href="#">
                company@geittechsolution.com
                </a>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  </>
);

export default Footer;
