import React, { Component, Fragment } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Row,
  Col
} from "reactstrap";

import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Fragment>
        <div>
          <Navbar className="navbar sticky-top" expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
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
                      <a href="">ABOUT</a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <a href="">WORK</a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <a href="">CONTACT</a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://dry-lake-78525.herokuapp.com/blog/"
                    target="_blank"
                  >
                    BLOG
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
