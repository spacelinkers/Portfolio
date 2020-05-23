import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class WorkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  render() {
    const { toggle } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle} className="modal-lg">
        <ModalHeader className="sub-title" toggle={toggle}>
          {this.state.activeItem.title}
        </ModalHeader>

        <ModalBody style={{ overflow: "auto" }}>
          <Row noGutters>
            <Col lg={3} style={{ border: 2 }}>
              <img
                src={this.state.activeItem.image}
                className="mb-3"
                style={{ height: 150, width: 150, borderRadius: 4 }}
              />
            </Col>
            <Col lg={9}>
              <p
                className="para"
                dangerouslySetInnerHTML={{
                  __html: this.state.activeItem.summery,
                }}
              />
            </Col>
          </Row>
          <Row noGutters>
            <a
              href={this.state.activeItem.github}
              target="blank"
              className="mr-2"
            >
              <i
                className="fa fa-github"
                style={{ fontSize: 12, color: "grey" }}
              >
                {" "}
                Source in Github
              </i>
            </a>
            <a href={this.state.activeItem.visit} target="blank">
              <i className="fa fa-eye" style={{ fontSize: 12, color: "grey" }}>
                {" "}
                Visit
              </i>
            </a>
          </Row>
        </ModalBody>

        <ModalFooter>
          <a style={{ fontSize: 12, color: "grey" }}>
            <i className="fa fa-tags pr-2" />
            {this.state.activeItem.tag.map(function (taglist, index) {
              return <a className="mr-2">{taglist.tag_name} </a>;
            })}
          </a>
        </ModalFooter>
      </Modal>
    );
  }
}

export default WorkModal;
