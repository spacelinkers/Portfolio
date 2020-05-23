import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import SingleProj from "./SingleProj.js";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("https://spacelinkers.pythonanywhere.com/project/list/")
      .then((projlist) => projlist.json())
      .then((projlist) => this.setState({ activeItem: projlist }));
  }

  render() {
    return (
      <div>
        <h3 className="sub-title mg-t5">Projects</h3>
        <Row noGutters>
          {this.state.activeItem.map((allProjects) => {
            return (
              <Col lg={4} className="mb-2">
                <SingleProj activeItem={allProjects} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Work;
