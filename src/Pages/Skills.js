import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";

import Work from "../components/Work";

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="skills">
            <h1 className="title secondary-text mg-b5">Skills</h1>

            <div>
              <h3 className="sub-title">Programming Languages & Tools</h3>

              <i className="fa fa-plus secondary-text"> C/C++</i>
              <br />
              <i className="fa fa-plus secondary-text"> Python</i>
              <br />
              <i className="fa fa-plus secondary-text"> Django</i>
              <br />
              <i className="fa fa-plus secondary-text"> React</i>
              <br />
              <i className="fa fa-plus secondary-text"> AWS Lambda</i>
              <br />
              <i className="fa fa-plus secondary-text"> JAVA/Kotlin</i>
              <br />
              <i className="fa fa-plus secondary-text"> HTML/CSS</i>
              <br />
            </div>
            <div>
              <h3 className="sub-title mg-t5">Things I can do</h3>

              <a>
                <i className="fa fa-plus secondary-text"> Web Development</i>
              </a>
              <br />

              <a>
                <i className="fa fa-plus secondary-text">
                  {" "}
                  Android Development
                </i>
              </a>
              <br />
              <a>
                <i className="fa fa-plus secondary-text"> OOP</i>
              </a>
              <br />
            </div>
            <div>
              <Work />
            </div>
            <div>
              <h3 className="sub-title mg-t5">Things I love</h3>

              <a href="https://www.linux.com/" target="_blank">
                <FontAwesomeIcon icon={faLinux} className="fa-3x icon-bg" />
              </a>

              <a href="https://www.loc.gov/" target="_blank">
                <FontAwesomeIcon icon={faBook} className="fa-3x icon-bg" />
              </a>
              <a href="https://icpc.baylor.edu/" target="_blank">
                <FontAwesomeIcon icon={faCode} className="fa-3x icon-bg" />
              </a>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Skills;
