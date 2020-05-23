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

            <h3 className="sub-title ">Software Engineer</h3>
            <h4 className="headings">Samsung R&D Institue Bangladesh</h4>

            <p className="para">
              I am a book lover and I have deep affection in reading books. My
              favorite bengali writter is Sarat Chandra Chattopadhyay and
              foreign writter is Dan Brown. Moreover I am also a book collector
              and it is my hobby. I have few hundred books in my collection.
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Experience;
