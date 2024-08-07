import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/components/SectionEnd.scss";
import examineImg from "../assets/images/section-end/examine-icon-removebg.png";
import analyseImg from "../assets/images/section-end/analyse-icon-removebg.png";
import solutionImg from "../assets/images/section-end/consultation-icon-removebg.png";
import implementImg from "../assets/images/section-end/implementation-icon-removebg.png";
import CM from "../assets/images/section-end/CM-icon.png";
import BI from "../assets/images/section-end/BI-icon.png";
import CRM from "../assets/images/section-end/CRM-icon.png";
import Customer from "../assets/images/section-end/customer-icon.png";
import ecommerce from "../assets/images/section-end/e-commerce.png";
import FM from "../assets/images/section-end/FM-icon.png";
import HRM from "../assets/images/section-end/HRM-icon.png";
import IM from "../assets/images/section-end/IM-icon.png";
import maketing1 from "../assets/images/section-end/marketing-icon.png";
import maketing2 from "../assets/images/section-end/marketing-icon-2.png";
import maketing3 from "../assets/images/section-end/marketing-icon-3.png";
import MRP from "../assets/images/section-end/MRP-icon.png";
import payment from "../assets/images/section-end/payment-icon.png";
import PM from "../assets/images/section-end/PM-icon.png";
import SCM from "../assets/images/section-end/SCM.png";
import { t } from "i18next";

const SectionEnd = () => {
  return (
    <Container>
      <Row className="row-section-end">
        <h1>{t("bodyEnd.endTitleOne")}</h1>
        <p>{t("bodyEnd.endPara")}</p>
      </Row>

      <Row className="row-section-content-end">
        <hr className="hr-section-style" />
        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={examineImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                {t("bodyEnd.endSolutionFirst")}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={analyseImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                {t("bodyEnd.endSolutionSec")}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={solutionImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                {t("bodyEnd.endSolutionThird")}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={implementImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                {t("bodyEnd.endSolutionFourth")}
              </h4>
            </div>
          </div>
        </div>
        <hr className="hr-section-style" />
      </Row>

      <Container>
        <Row className="row-section-detail-end">
          <div className="col-6">
            <div className="col">
              <h3 className="" style={{marginLeft:50}}>
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleOne.title"
                )}
              </h3>

              <div className="col" style={{}}>
                <div className="col d-flex align-items-center">
                  <img
                    src={ecommerce}
                    className="row-section-detail-end-icon"
                  />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleOne.paraOne"
                    )}
                  </p>
                </div>

                <div className="col d-flex align-items-center">
                  <img src={payment} className="row-section-detail-end-icon" />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleOne.paraSec"
                    )}
                  </p>
                </div>

                <div className="col d-flex align-items-center">
                  <img src={IM} className="row-section-detail-end-icon" />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleOne.paraThird"
                    )}
                  </p>
                </div>

                <div className="col d-flex align-items-center">
                  <img src={Customer} className="row-section-detail-end-icon" />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleOne.paraFourth"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <h3 className="row-section-detail-end-title">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleSec.title"
                )}
              </h3>
              <div className="col m-8">
                <div className="col d-flex align-items-center">
                  <img
                    src={maketing2}
                    className="row-section-detail-end-icon"
                  />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleSec.paraOne"
                    )}
                  </p>
                </div>
                <div className="col d-flex align-items-center">
                  <img
                    src={maketing1}
                    className="row-section-detail-end-icon"
                  />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleSec.paraSec"
                    )}
                  </p>
                </div>
                <div className="col d-flex align-items-center">
                  <img
                    src={maketing3}
                    className="row-section-detail-end-icon"
                  />
                  <p className="row-section-detail-end-para">
                    {t(
                      "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleSec.paraThird"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h3 className="row-section-detail-end-title">
              {t(
                "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.title"
              )}
            </h3>

            <div className="col d-flex align-items-center">
              <img src={HRM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraOne"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={FM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraSec"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={IM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraThird"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={CRM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraFourth"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={MRP} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraFifth"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={SCM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraSixth"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={PM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraSeventh"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={BI} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraEighth"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={CM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraNinth"
                )}
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={ecommerce} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                {t(
                  "bodyEnd.endSubSolution.endSubSolutionTitle.endSubSolutionTitleThird.paraTenth"
                )}
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default SectionEnd;
