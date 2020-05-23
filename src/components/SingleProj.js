import React, { Component, Fragment } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";

import WorkModal from "./WorkModal";

class SingleProj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
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
              <h5 className="headings">{this.state.activeItem.title}</h5>
            </CardTitle>
            <CardSubtitle>
              <a style={{ fontSize: 12, color: "grey" }}>
                <i className="fa fa-tags pr-2" />
                {this.state.activeItem.tag.map(function (taglist, index) {
                  return <a className="mr-2">{taglist.tag_name}</a>;
                })}
              </a>
            </CardSubtitle>
          </CardBody>
        </Card>

        {this.state.modal ? (
          <WorkModal activeItem={this.state.activeItem} toggle={this.toggle} />
        ) : null}
      </Fragment>
    );
  }
}

export default SingleProj;
