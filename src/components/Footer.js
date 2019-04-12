import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="Footer">
          <Container>
            <Row noGutters>
              <Col>
                <h3 className="Footer-text">M A Hasan Molla</h3>
                <div className="Custom-flex">
                  <div className="Footer-flex-box">
                    <a
                      href="https://www.linkedin.com/in/m-a-hasan-molla-907139126/"
                      target="_blank"
                      className="socail-media"
                    >
                      <i className="fa fa-linkedin fa-2x " />
                    </a>
                  </div>
                  <div className="Footer-flex-box">
                    <a
                      href="https://twitter.com/spacelinkers"
                      target="_blank"
                      className="socail-media"
                    >
                      <i className="fa fa-twitter fa-2x" />
                    </a>
                  </div>
                  <div className="Footer-flex-box">
                    <a
                      href="https://github.com/spacelinkers"
                      target="_blank"
                      className="socail-media"
                    >
                      <i className="fa fa-github fa-2x" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
