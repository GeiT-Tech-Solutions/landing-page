import React, { useState } from "react";
import mainLogo from "../assets/images/icons/logo.png";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import "../assets/styles/components/Header.scss";
import { changeLanguage, t } from "i18next";

const Header = () => {

  const [fix, setFix] = useState(false)
  function setFixed() {
    if (window.scrollY >= 20) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)
  return (
    <header>
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
                  <h4 style={{ textTransform: 'uppercase' }}>geittech solution</h4>
                </div>
              </Navbar.Brand>
            </div>

            <div className="">
              <Navbar.Toggle aria-controls="header-navbar-nav" />
              <Navbar.Collapse id="header-navbar-nav" className="item-center">
                <Nav className="ml-auto">
                  <Nav.Link href="#home" className="fix">
                    {t('headerNav.home')}
                  </Nav.Link>
                  <Nav.Link href="#services" className="fix">
                  {t('headerNav.services')}
                  </Nav.Link>
                  <Nav.Link href="#projects" className="fix">
                  {t('headerNav.projects')}
                  </Nav.Link>
                  <Nav.Link href="#contact" className="fix">
                  {t('headerNav.contact')}
                  </Nav.Link>
                  <Nav.Link href="#blog" className="fix">
                  {t('headerNav.blog')}
                  </Nav.Link>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('headerNav.langButton')}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => changeLanguage('en')}>English</a>
                      </li>
                      <li>
                      <a className="dropdown-item" href="#" onClick={() => changeLanguage('vi')}>Tiếng Việt</a>
                      </li>
                    </ul>
                  </li>

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
