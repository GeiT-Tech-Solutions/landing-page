import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/components/SectionWhy.scss";
import iconCost from "../assets/images/section_why/Icon-cost.png";
import iconEfficiency from "../assets/images/section_why/Icon-efficiency.png";
import iconQuality from "../assets/images/section_why/Icon-quality.png";
import iconSpeed from "../assets/images/section_why/Icon-speed.png";
import { t } from "i18next";

const SectionWhy = () => {
  return (
    <>
      <div className="why-bg">
        <div className="why-bg-overlay">
          <Container className="why-bg-content">
            <Row>
              <h2>{t('bodyWhy.whyTitle')}</h2>
              <p>
              {t('bodyWhy.whyPara')}
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
