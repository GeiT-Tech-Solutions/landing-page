import React, { useState } from "react";
import mainLogo from "../assets/images/icons/logo.png";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavDropdown,
  Button,
} from "react-bootstrap";
import "../assets/styles/components/Header.scss";
import { changeLanguage, t } from "i18next";
import VietNamIcon from "../assets/images/icons/Vietnam.png";
import English from "../assets/images/icons/English.png";

const Header = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 20) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <header>
      <div className="">
        <Container className="containerHeader" fluid>
          <div
            style={{
              paddingTop: "5px",
            }}
          >
            <Container className="d-flex justify-content-between">
              <p>Email us: sale@geittechsolution.com</p>
              <p>Contact us: (+84) 833 372 712</p>
              <div className="d-flex">
                <p className="" href="#">
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginRight: "10px",
                    }}
                    onClick={() => changeLanguage("en")}
                  >
                    <img src={English} style={{ height: "30px" }} />
                  </a>
                </p>

                <p className="" href="#">
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                    onClick={() => changeLanguage("vi")}
                  >
                    {/*use icon here*/}
                    <img src={VietNamIcon} style={{ height: "30px" }} />
                  </a>
                </p>
              </div>
            </Container>
          </div>
        </Container>

        <Navbar
          expand="lg"
          className={
            fix
              ? "sticky-header backgroundNav-scroll"
              : "sticky-header-scroll backgroundNav"
          }
        >
          <Container className="item-center ">
            <div className="d-flex justify-content-between mr-25vw">
              <Navbar.Brand href="#home" className="item-center">
                <div className="d-flex align-items-center">
                  <img
                    src={mainLogo}
                    className={fix ? "resizeIcon " : "resizeIcon-scroll"}
                  />
                  <h4 style={{ textTransform: "uppercase" }}>
                    geittech solution
                  </h4>
                </div>
              </Navbar.Brand>
            </div>

            <div className="">
              <Navbar.Toggle aria-controls="header-navbar-nav" />
              <Navbar.Collapse id="header-navbar-nav" className="item-center">
                <Nav className="ml-auto">
                  <Nav.Link
                    href="#home"
                    style={{ borderRadius: "10px" }}
                    className="fix"
                  >
                    {t("headerNav.home")}
                  </Nav.Link>
                  <Nav.Link
                    href="#services"
                    style={{ borderRadius: "10px" }}
                    className="fix"
                  >
                    {t("headerNav.services")}
                  </Nav.Link>
                  <Nav.Link
                    href="#projects"
                    style={{ borderRadius: "10px" }}
                    className="fix"
                  >
                    {t("headerNav.projects")}
                  </Nav.Link>
                  <Nav.Link
                    href="#contact"
                    style={{ borderRadius: "10px" }}
                    className="fix"
                  >
                    {t("headerNav.contact")}
                  </Nav.Link>
                  <Nav.Link
                    href="#blog"
                    style={{ borderRadius: "10px" }}
                    className="fix"
                  >
                    {t("headerNav.blog")}
                  </Nav.Link>

                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("headerNav.langButton")}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => changeLanguage("en")}
                        >
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => changeLanguage("vi")}
                        >
                          Tiếng Việt
                        </a>
                      </li>
                    </ul>
                  </li> */}
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
