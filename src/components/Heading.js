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
  Col,
} from "reactstrap";

class Heading extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" style={{ marginTop: "80px" }}>
            <h2 className="name-style">
              M A <span className="primary-text">HASAN </span>MOLLA
            </h2>

            <p className="Headings">
              Hello, my name is <b style={{ fontSize: 30 }}>M A Hasan Molla</b>.
              As I am a Web Developer and Python Developer, I have good
              knowledge in Django. I also know React, Git. I completed my
              undergraduate program from Chittagong University of Engineering
              and Technology(CUET) and my major was CSE.
            </p>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Heading;
