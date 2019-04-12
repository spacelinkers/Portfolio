import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class WorkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  render() {
    const { toggle } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>{this.state.activeItem.title}</ModalHeader>
        <ModalBody>
          <div>
            <Row noGutters>
              <Col style={{ border: 2 }}>
                <img
                  src={this.state.activeItem.image}
                  className="mb-3"
                  style={{ height: 350, width: 300, borderRadius: 4 }}
                />
              </Col>
              <Col className="ml-3 pl-3">
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.state.activeItem.summery
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
                <i
                  className="fa fa-eye"
                  style={{ fontSize: 12, color: "grey" }}
                >
                  {" "}
                  Visit
                </i>
              </a>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <a href="">
            <i className="fa fa-tags" style={{ fontSize: 12, color: "grey" }}>
              {this.state.activeItem.tag.map(function(taglist, index) {
                return <a className="mr-2">{taglist.tag_name} </a>;
              })}
              {/* {this.state.activeItem.tag} */}
            </i>
          </a>
        </ModalFooter>
      </Modal>
    );
  }
}

export default WorkModal;
