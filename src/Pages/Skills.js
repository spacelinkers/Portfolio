import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import EducationModal from "../components/EducationModal";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: [],
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  showItem(activeItem) {
    this.setState({ activeItem: activeItem, modal: !this.state.modal });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="skills">
            <h1 className="title secondary-text mg-b5">Skills</h1>

            <Row noGutters>
              <Col></Col>
            </Row>
            <p className="mt-4">
              I am a book lover and I have deep affection in reading books. My
              favorite bengali writter is Sarat Chandra Chattopadhyay and
              foreign writter is Dan Brown. Moreover I am also a book collector
              and it is my hobby. I have few hundred books in my collection.
            </p>
            <Row />
            <Row>
              <Col>
                <h3>Things I love</h3>
                <div className="Custom-flex">
                  <div className="about-flex-box">
                    <a
                      href="https://www.linux.com/"
                      target="_blank"
                      style={{ color: "#39b54a" }}
                    >
                      <i className="fa fa-linux fa-3x " />
                    </a>
                  </div>
                  <div className="about-flex-box">
                    <a
                      href="https://www.loc.gov/"
                      target="_blank"
                      style={{ color: "#39b54a" }}
                    >
                      <i className="fa fa-book fa-3x" />
                    </a>
                  </div>
                  <div className="about-flex-box">
                    <a
                      href="https://icpc.baylor.edu/"
                      target="_blank"
                      style={{ color: "#39b54a" }}
                    >
                      <i className="fa fa-code fa-3x" />
                    </a>
                  </div>
                </div>
                <Col className="mt-5 pl-0">
                  <h3>Education</h3>
                  <div className="Custom-flex">
                    <div className="about-flex-box">
                      <i
                        className="ml-5 fa fa-graduation-cap fa-3x "
                        style={{ color: "black", cursor: "pointer" }}
                        onClick={() => this.showItem(this.state.activeItem)}
                      />
                    </div>
                  </div>
                </Col>
              </Col>

              <Col>
                <h3>Things I can do</h3>
                <Row noGutters>
                  <Col>
                    <a>
                      <i className="fa fa-plus"> Web Development</i>
                    </a>
                    <br />
                    <a>
                      <i className="fa fa-plus"> Android Development</i>
                    </a>
                    <br />
                    <a>
                      <i className="fa fa-plus"> OOP</i>
                    </a>
                    <br />
                  </Col>
                  <Col>
                    <i className="fa fa-plus"> C/C++</i>
                    <br />
                    <i className="fa fa-plus"> Python</i>
                    <br />
                    <i className="fa fa-plus"> Django</i>
                    <br />
                    <i className="fa fa-plus"> JAVA/Kotlin</i>
                    <br />
                    <i className="fa fa-plus"> React</i>
                    <br />
                    <i className="fa fa-plus"> HTML/CSS</i>
                    <br />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        {this.state.modal ? (
          <EducationModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Skills;
