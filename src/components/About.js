import React, { Component, Fragment } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Row,
  Col
} from "reactstrap";

import me from "../me.png";
import EducationModal from "./EducationModal";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: []
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
          <div className="Section" id="about">
            <h1 className="heading-text">About me</h1>

            <Row noGutters>
              <Col style={{ textAlign: "center" }}>
                <img src={me} height="350" />
              </Col>
              <Col>
                <p>
                  I'm obsessed with making things and even more obsessed with
                  making things better. I've been in the business of creating
                  since I hung my first painting on the fridge when I was 3.
                  After graduating from the University of Kentucky, I've been
                  actively involved in the web design community for the last 10
                  years. I've designed websites for small businesses,
                  corporations, nonprofits, churches, musicians and more. I also
                  started a design blog, Visual Swirl, where I share
                  inspiration, tutorials, and resources.
                </p>
                <br />
                <p>
                  My specialty is full website strategy, design and development,
                  making pixel magic in photoshop and turning it into beautiful,
                  semantic HTML & CSS. My interests, however, extend beyond the
                  web and I love helping people with branding, print design and
                  marketing strategy. I even love making designs move by
                  creating professional motion graphics and video.
                </p>
              </Col>
            </Row>
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

export default About;
