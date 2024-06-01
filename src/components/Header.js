import React from 'react';
import mainLogo from '../assets/images/icons/logo.png';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/components/Header.scss'

const Header = () => {
    return (
        <header>
            {/* Information header */}
            <Container className='containerHeader' fluid>
                <Row style={{ paddingTop: "15px" }}>
                    <Col>
                        <p>
                            Email us: sale@geittechsolution.com
                        </p>
                    </Col>
                    <div className='col'>
                        <p>
                            Contact us: (+84) 833 372 712
                        </p>
                    </div>
                </Row>
            </Container>


            <Navbar expand="lg" className='backgroundNav'>
                <Container>
                    <div className='col-4'>
                        <Navbar.Brand href="#home">
                            <div className='d-flex align-items-center'>
                                <img src={mainLogo} className='resizeIcon' />
                                <h6>GEIT TECH SOLUTIONS</h6>
                            </div>
                        </Navbar.Brand>
                    </div>

                    <div className='col-6 fixTop'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home" className='fix'>Home</Nav.Link>
                                <Nav.Link href="#services" className='fix'>Services</Nav.Link>
                                <Nav.Link href="#projects" className='fix'>Projects</Nav.Link>
                                <Nav.Link href="#contact" className='fix'>Contact</Nav.Link>
                                <Nav.Link href="#blog" className='fix'>Blog</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </div>

                </Container>
            </Navbar>

        </header>
    )
};

export default Header;

