import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./SideBar";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toogleSidebar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Col>
            <SideBar toggle={this.toogleSidebar} isOpen={this.state.isOpen} />
          </Col>
        </div>
      </Router>
    );
  }
}

export default NavBar;
