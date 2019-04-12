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
              Hello, my name is M A Hasan Molla. I'm a Web Developer, UI
              Developer and Online Business Consultant based in Louisville, KY.
              I also have major skills in branding, motion graphics, video, and
              print design. If you have a project or creative need that I can
              help with, please get in touch
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Heading;
