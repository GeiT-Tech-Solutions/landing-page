import { React, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/styles/components/SectionService.scss";
import sv1 from "../assets/images/section_services/services_section.webp";
import sv2 from "../assets/images/section_services/services_section_2.webp";
import sv3 from "../assets/images/section_services/services_section_3.webp";
import ReactCardFlip from "react-card-flip";
import { t } from "i18next";


const SectionService = () => {
  const [flip, setFlip] = useState(false)
  const [flip2, setFlip2] = useState(false)
  const [flip3, setFlip3] = useState(false)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="sectionTitle">{t('bodyServices.servicesTitle')}</h1>
            <hr className="styleHr" />
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "15px" }}>
        <Row className="d-flex justify-content-evenly">

          <Col>
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
              <div className="card card-fix mh-500" onClick={() => setFlip(!flip)}>
                <img className="card-img-top" src={sv2} />
                <div className="card-body">
                  <h4>{t('bodyServices.servicesFirst.title')}</h4>
                  <p className="card-text para-dark-blue">
                  {t('bodyServices.servicesFirst.para')}
                  </p>
                </div>
              </div>

              <div className="card card-fix mh-500" onClick={() => setFlip(!flip)}>
                <img className="card-img-top" src={sv2} />
                <div className="card-body">
                  <h4>Landing Page Design</h4>
                  <p className="card-text para-dark-blue">
                    Create stunning and high-converting landing pages tailored to
                    your marketing goals. Our designs are optimized for user
                    engagement and lead generation.
                  </p>
                </div>
              </div>
            </ReactCardFlip>

          </Col>

          <Col>
            <ReactCardFlip isFlipped={flip2} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
              <div className="card card-fix mh-500" onClick={() => setFlip2(!flip2)}>
                <img className="card-img-top" src={sv1} />
                <div className="card-body">
                  <h4>{t('bodyServices.servicesSec.title')}</h4>
                  <p className="card-text para-dark-blue">
                  {t('bodyServices.servicesSec.para')}
                  </p>
                </div>
              </div>
              <div className="card card-fix mh-500" onClick={() => setFlip2(!flip2)}>
                <img className="card-img-top" src={sv1} />
                <div className="card-body">
                  <h4>E-commerce Development</h4>
                  <p className="card-text para-dark-blue">
                    Build robust and scalable e-commerce websites that provide a
                    seamless shopping experience. Our solutions include secure
                    payment integration, inventory management, and customer
                    analytics.
                  </p>
                </div>
              </div>
            </ReactCardFlip>
          </Col>

          <Col>
            <ReactCardFlip isFlipped={flip3} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
              <div className="card card-fix mh-500" onClick={() => setFlip3(!flip3)}>
                <img className=" card-img-top" src={sv3} />
                <div className="card-body">
                  <h4>{t('bodyServices.servicesThird.title')}</h4>
                  <p className="card-text para-dark-blue">
                  {t('bodyServices.servicesThird.para')}
                  </p>
                </div>
              </div>
              <div className="card card-fix mh-500" onClick={() => setFlip3(!flip3)}>
                <img className=" card-img-top" src={sv3} />
                <div className="card-body">
                  <h4>ERP Development</h4>
                  <p className="card-text para-dark-blue">
                    Develop comprehensive ERP systems tailored to your business
                    processes. Our ERP solutions enhance productivity, streamline
                    operations, and provide real-time business insights.
                  </p>
                </div>
              </div>
            </ReactCardFlip>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default SectionService;
