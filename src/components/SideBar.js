import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import me from "../me.png";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar ", { "is-open": isOpen })}>
    <div className="side-menu vertical-center">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink>
            <img src={me} height="80" />
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
              About
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
              Experience
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
              Skills
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
              Education
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
              Contact
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
    </div>
  </div>
);

export default SideBar;
