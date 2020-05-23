import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationModal from "../components/EducationModal";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: [],
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
          <div className="Section" id="education">
            <h1 className="title secondary-text  mg-b5">Education</h1>

            <h3 className="sub-title">Undergragduate</h3>
            <h4 className="headings">
              Chittagong University of Engineeering and Technology
            </h4>
            <p>
              BSc in CSE{" "}
              <span className="primary-text">
                (January, 2012 - December, 2017)
              </span>
            </p>

            <div>
              <a
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => this.showItem(this.state.activeItem)}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="fa-3x icon-bg"
                />
              </a>
            </div>
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

export default Education;
