import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

class Certification extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="certification">
            <h1 className="title secondary-text  mg-b5">
              Online Courses & Certifications
            </h1>
            <div>
              <h3 className="sub-title">Online Courses</h3>
              <div>
                <ul style={{ paddingLeft: "35px" }}>
                  <li>
                    <a>React: State Management</a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                  <li>
                    <a>
                      AWS Lambda and the Serverless Framework - Hands On
                      Learning!
                    </a>
                    <p className="primary-text">Udemy </p>
                  </li>
                  <li>
                    <a>Serverless Architecture</a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                  <li>
                    <a>Securing Cryptocurrencies</a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                  <li>
                    <a>
                      Blockchain for Developers: Hyperledger Fabric on Azure
                    </a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                  <li>
                    <a>Blockchain: Beyond the Basics</a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                  <li>
                    <a>Blockchain Basics</a>
                    <p className="primary-text">LinkedIn </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Certification;
