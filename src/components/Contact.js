import React, { Component, Fragment } from "react";
import { Container, Table, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="contact">
            <h1 className="heading-text">CONTACT WITH ME</h1>
            <p>
              Have something in mind? Have any question abou me and my work?
              Feel free to contact with me anytime. It's ok to just say hi. I
              like that too.
            </p>
            <Row noGutters>
              <Col>
                <div>
                  <h3>Have Something in Mind?</h3>
                </div>
              </Col>
              <Col>
                <div>
                  <h3>Contact Me Directly</h3>
                  <Table borderless>
                    <tbody>
                      <tr>M A Hasan Molla</tr>
                      <tr>Khilgaon, Dhaka, Bangladesh</tr>
                      <tr>+880-1754-076-657</tr>
                      <tr>hasan.spacelinkers@gmail.com</tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <Row noGutters>
              <Col>
                <h3>Follow Me Online</h3>
                <a
                  href="https://www.linkedin.com/in/m-a-hasan-molla-907139126/"
                  target="_blank"
                >
                  <i className="fa fa-plus"> Linkedin</i>
                </a>
                <br />
                <a href="https://twitter.com/spacelinkers" target="_blank">
                  <i className="fa fa-plus"> Twitter</i>
                </a>
                <br />
                <a href="https://github.com/spacelinkers" target="_blank">
                  <i className="fa fa-plus"> Github</i>
                </a>
                <br />
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
