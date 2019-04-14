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
                  As you know my name, let's talk about somethings else about
                  me. I was born in February 21 in Gazipur, Bangladesh. But I
                  grow up in Dhaka.
                </p>
                <p>
                  I love programming and I am a strong supporter of programming
                  contest. I myself took part in both the online and onsite
                  contest.
                </p>
                <p>
                  I have interest in Data Engineering and Machine Learning.
                  Physics and Astrophysics are another sites that I have keen
                  interest and I also love traveling.
                </p>
                <p>
                  I am strongly believed in open source and I am a linux user.
                  All of my work is open source and I think always will be. I
                  have great interest in linux kernel. I strongly want to
                  contribute in linux kernel project in future.
                </p>
              </Col>
            </Row>
            <p className="mt-4">
              I am a book lover. As a book lover I read many books. My favorite
              bengali writter is Sarat Chandra Chattopadhyay and foreign writter
              is Dan Brown. Moreover I am also a book collector and it is my
              hobby. I have few hundreds books in my collection.
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
