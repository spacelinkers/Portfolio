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

class Heading extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section">
            <p className="Headings">
              Hello, my name is <b style={{ fontSize: 30 }}>M A Hasan Molla</b>.
              I am a Web Developer and Python Developer. I have good knowledge
              in Django. I also know React, Git. I finished my undergraduate
              program from Chittagong University of Engineering and
              Technology(CUET) and my major was CSE.
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Heading;
