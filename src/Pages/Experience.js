import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import EducationModal from "../components/EducationModal";

class Experience extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="experience">
            <h1 className="title secondary-text  mg-b5">Experience</h1>

            <h3 className="sub-title">Software Engineer</h3>
            <div>
              <h4 className="headings">Samsung R&D Institue Bangladesh</h4>
              <p className="para">
                Software Engineer
                <span className="primary-text">
                  {" "}
                  (December, 2019 - present)
                </span>
              </p>

              <ul style={{ paddingLeft: "35px" }}>
                <li>
                  <p className="para">Tizen.NET</p>
                </li>
                <li>
                  <p className="para">Samsung Blockchain</p>
                </li>
                <li>
                  <p className="para">Android Development</p>
                </li>
              </ul>
            </div>
            <div className="mg-t5">
              <h4 className="headings">Samsung R&D Institue Bangladesh</h4>
              <p className="para">
                Constructual
                <span className="primary-text">
                  {" "}
                  (June, 2019 - December, 2019)
                </span>
              </p>

              <ul style={{ paddingLeft: "35px" }}>
                <li>
                  <p className="para">Samsung Blockchain</p>
                </li>
                <li>
                  <p className="para">Android Development</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Experience;
