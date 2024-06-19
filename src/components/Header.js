import React, { useState } from "react";
import mainLogo from "../assets/images/icons/logo.png";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "../assets/styles/components/Header.scss";

const Header = () => {
 
  const [fix, setFix] = useState(false)
  function setFixed() {
    if(window.scrollY >= 20){
      setFix(true)
    }else{
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)
  return (
    <header >
      <div className="">
      <Container className="containerHeader" fluid>
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          <Container className="d-flex justify-content-between">
            <p>Email us: sale@geittechsolution.com</p>
            <p>Contact us: (+84) 833 372 712</p>
          </Container>
        </div>
      </Container>

      <Navbar expand="lg" className={fix ? 'sticky-header backgroundNav-scroll' : 'sticky-header-scroll backgroundNav'}>
        <Container className="item-center ">
          <div className="d-flex justify-content-between mr-25vw">
            <Navbar.Brand href="#home" className="item-center">
              <div className="d-flex align-items-center">
                <img src={mainLogo} className="resizeIcon" />
                <h4>GEIT TECH SOLUTIONS</h4>
              </div>
            </Navbar.Brand>
          </div>

          <div className="">
            <Navbar.Toggle aria-controls="header-navbar-nav" />
            <Navbar.Collapse id="header-navbar-nav" className="item-center">
              <Nav className="ml-auto">
                <Nav.Link href="#home" className="fix">
                  Home
                </Nav.Link>
                <Nav.Link href="#services" className="fix">
                  Services
                </Nav.Link>
                <Nav.Link href="#projects" className="fix">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contact" className="fix">
                  Contact
                </Nav.Link>
                <Nav.Link href="#blog" className="fix">
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      </div>
      {/* Information header */}
      </header>
  );
};

export default Header;
