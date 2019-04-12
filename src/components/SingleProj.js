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

import WorkModal from "./WorkModal";

class SingleProj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
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
        <Col className="mb-3 col-4">
          <Card style={{ maxWidth: 310, maxHeight: 310 }}>
            <CardBody>
              <CardImg
                top
                width="100%"
                src={this.state.activeItem.image}
                className="pb-3"
                style={{ maxHeight: 210, cursor: "pointer" }}
                onClick={() => this.showItem(this.state.activeItem)}
              />
              <CardTitle>
                <h4>{this.state.activeItem.title}</h4>
              </CardTitle>
              <CardSubtitle>
                <a>
                  <i
                    className="fa fa-tags"
                    style={{ fontSize: 12, color: "grey" }}
                  >
                    {this.state.activeItem.tag.map(function(taglist, index) {
                      return <a className="mr-2">{taglist.tag_name}</a>;
                    })}
                    {/* {this.state.activeItem.tag} */}
                  </i>
                </a>
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        {this.state.modal ? (
          <WorkModal activeItem={this.state.activeItem} toggle={this.toggle} />
        ) : null}
      </Fragment>
    );
  }
}

export default SingleProj;
