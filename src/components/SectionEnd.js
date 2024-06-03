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
import shop from "../assets/images/section-end/shop-icon.png";

const SectionEnd = () => {
  return (
    <Container>
      <Row className="row-section-end">
        <h1>How we help you</h1>
        <p>
          We work hard on using cutting-edge method and process to satisfy our
          customer demand
        </p>
      </Row>

      <Row className="row-section-content-end">
        <hr className="hr-section-style" />
        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={examineImg} />
            <div className="card-body">
              <h4 className="section-end-title">Customer Requirement Survey</h4>
              <p className="card-text section-end-content">
                Survey the current IT application status and business needs.
                Gather detailed requirements from customers through interviews
                and surveys. Analyze the real-life situation to identify issues
                and improvement opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={analyseImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                Solution Analysis and Fit Gap Assessment
              </h4>
              <p className="card-text  section-end-content">
                Analyze customer requirements and current status. Assess the
                fit-gap between the software solution and user needs. Report the
                current status, propose suitable solutions, and evaluate
                benefits.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={solutionImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                Solution Consultation and Planning
              </h4>
              <p className="card-text  section-end-content">
                Provide detailed consultation on the ERP solution that matches
                the customer's needs and current status. Develop a detailed
                implementation plan, including costs and timelines. Present the
                plan to the customer, address any questions, and make
                adjustments if necessary.
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card">
            <img className="card-img-top section-end-icon" src={implementImg} />
            <div className="card-body">
              <h4 className="section-end-title">
                Implementation and Data Gathering
              </h4>
              <p className="card-text  section-end-content">
                Implement the ERP system according to the discussed plan.
                Install, train users, migrate data, and provide deployment
                support. Collect and analyze data from real-life operations to
                evaluate the solution's effectiveness.
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-section-style" />
      </Row>

      <Container>
        <Row className="row-section-detail-end">
          <div className="col-6">
            <h3 className="row-section-detail-end-title">landing page</h3>

            <div className="col m-8">
              <div className="col d-flex align-items-center">
                <img src={maketing2} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">
                  beautiful visual effects
                </p>
              </div>
              <div className="col d-flex align-items-center">
                <img src={maketing1} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">
                  Marketing efficiently
                </p>
              </div>
              <div className="col d-flex align-items-center">
                <img src={maketing3} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">
                  Customer information gather
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h3 className="row-section-detail-end-title">erp system</h3>

            <div className="col d-flex align-items-center">
              <img src={HRM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                human resources management (HRM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={FM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                financial management (FM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={IM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                inventory management (IM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={CRM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                customer relationship management (CRM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={MRP} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                Manufacturing resource planning (MRP)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={SCM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                supply chain management (SCM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={PM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                Project management (PM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={BI} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                business intelligence (BI)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={CM} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                compliance management (CM)
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img src={ecommerce} className="row-section-detail-end-icon" />
              <p className="row-section-detail-end-para">
                e-Commerce integration (ECI)
              </p>
            </div>
          </div>
        </Row>

        <Row className="row-section-detail-end">
          <div className="col-6">
            <h3 className="row-section-detail-end-title">e - commerce</h3>

            <div className="col m-8">
              <div className="col d-flex align-items-center">
                <img src={ecommerce} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">
                  Online selling point
                </p>
              </div>

              <div className="col d-flex align-items-center">
                <img src={payment} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">Online payment</p>
              </div>

              <div className="col d-flex align-items-center">
                <img src={IM} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">Inventory manager</p>
              </div>

              <div className="col d-flex align-items-center">
                <img src={Customer} className="row-section-detail-end-icon" />
                <p className="row-section-detail-end-para">Customer manager</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default SectionEnd;
