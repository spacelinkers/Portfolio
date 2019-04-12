import React, { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";

import SingleProj from "./SingleProj.js";

// var activeItem = [
//   {
//     name: "Library",
//     description: "This is a libarary.",
//     tag: "Django, React",
//     image: library
//   },
//   {
//     name: "Library1",
//     description: "This is a libarary1.",
//     tag: "Django, React",
//     image: library
//   }
// ];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://spacelinkers.pythonanywhere.com/project/list/")
      .then(projlist => projlist.json())
      .then(projlist => this.setState({ activeItem: projlist }));
  }

  render() {
    var workList = this.state.activeItem.map(activeItem => (
      <SingleProj activeItem={activeItem} />
    ));
    return (
      <Fragment>
        <Container>
          <div className="Section" id="work">
            <h1 className="heading-text">MY WORK</h1>
            <Row noGutters>{workList}</Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Work;
