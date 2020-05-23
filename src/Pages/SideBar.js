import React, { Component, Fragment, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-scroll";

import me from "../me.png";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      layoutMode: this.getLayoutMode(),
    };
    this.toggle = this.toggle.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.setState({
      layoutMode: this.getLayoutMode(),
    });
  }

  getLayoutMode() {
    console.log(window.innerWidth);
    return window.innerWidth > 1000 ? "desktop" : "mobile";
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar
          id={this.state.layoutMode === "desktop" ? "sidebar" : ""}
          className="navbar fixed-top primary-bg navbar-dark"
          expand="md"
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav vertical className="list-unstyled pb-3">
              <NavItem>
                <NavLink>
                  <img src={me} className="image-circle" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a href="">About</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a href="">Experience</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a href="">Skills</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a href="">Education</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="certification"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a href="">Certification</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://dry-lake-78525.herokuapp.com/blog/"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default SideBar;
