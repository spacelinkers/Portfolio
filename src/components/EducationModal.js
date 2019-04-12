import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";

class EducationModal extends Component {
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
        <ModalHeader toggle={toggle}>
          <h3>Education</h3>
        </ModalHeader>
        <ModalBody style={{ overflow: "auto" }}>
          <div>
            <div>
              <Card
                className="mt-4 mb-4"
                style={{ maxWidth: 766, maxHeight: 300, cursor: "pointer" }}
              >
                <CardBody>
                  <CardTitle>
                    <a href="https://www.cuet.ac.bd/" target="_blank">
                      <h5
                        style={{
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: "#39b54a"
                        }}
                      >
                        CSE Graduate from Chittagong University of Engineering
                        and Technology
                      </h5>
                    </a>
                  </CardTitle>
                </CardBody>
              </Card>

              <Card
                className="mt-4 mb-4"
                style={{ maxWidth: 766, maxHeight: 600 }}
              >
                <CardBody>
                  <CardTitle>
                    <h4>Undergraduate Project</h4>
                    <hr />
                  </CardTitle>

                  <CardSubtitle>
                    <Table borderless>
                      <tr>
                        <th>
                          <h6>Title:</h6>
                        </th>
                        <th>
                          <h6>Human Activity Recognition by kNN Algorithm</h6>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <h6>Technology Used:</h6>
                        </th>
                        <th>
                          <h6>Python, OpenCV, Machine Learning</h6>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <h6>Description:</h6>
                        </th>
                        <th>
                          <h6>
                            In this project we address the recognition of human
                            activities from video sequences. We use spatial
                            interest points as feature. For feature detection we
                            use Harris corner detector. We use classification
                            algorithm for recognition. For this recognition
                            purpose we use k-NN algorithm. We recognize five
                            activities, hands-up, brushing, up-down, walking and
                            running
                          </h6>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <h6>Github Link:</h6>
                        </th>
                        <th>
                          <a
                            style={{ color: "#39b54a" }}
                            target="_blank"
                            href="https://github.com/spacelinkers/Human-Activity-Recognition-by-kNN-algorithm-using-python"
                          >
                            Github Link
                          </a>
                        </th>
                      </tr>
                    </Table>
                  </CardSubtitle>
                </CardBody>
              </Card>
              <Card
                className="mt-4 mb-4"
                style={{ maxWidth: 766, maxHeight: 600 }}
              >
                <CardBody>
                  <CardTitle>
                    <h4>Achievement</h4>
                    <hr />
                  </CardTitle>

                  <CardSubtitle>
                    <Table borderless>
                      <tr>
                        <th>
                          <h6>Programming Contest:</h6>
                        </th>
                      </tr>
                      <ul>
                        <li>
                          <h6>5 th in USTC IUPC in 2016</h6>
                        </li>
                        <li>
                          <Row noGutters>
                            <Col>
                              <h6>
                                35 th in ACM ICPC Dhaka Regional 2014{" "}
                                <a
                                  href="https://drive.google.com/file/d/1pLyW2FisRtYeXwGx0nYQYwoxcf3V5dda/view?usp=sharing"
                                  target="_blank"
                                  style={{ color: "#39b54a" }}
                                >
                                  <i className="fa  fa-certificate " s />
                                </a>
                              </h6>
                            </Col>
                          </Row>
                        </li>
                      </ul>
                    </Table>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default EducationModal;
