import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="Section" id="about" style={{ marginTop: "80px" }}>
            <h2 className="super-title secondary-text">
              M A <span className="primary-text">HASAN </span>MOLLA
            </h2>
            <p className="headings mg-b5">
              Dhaka, Bangladesh |{" "}
              <span className="primary-text">josen221@gmail.com</span>
            </p>
            <p className="para">
            I am a passionate Software Developer experience with Django, React, 
            PostgreSQL, and AWS, also having good exposure to Blockchain and Cryptocurrency 
            based technologies like Ethereum and Tron. Working as an Engineer at 
            Samsung R&D Institute Bangladesh for 1.5 years. Love to participate in 
            programming contests and an enthusiastic team player.
            </p>
            <p className="para">
            Let's talk about something else about me. I was born on February 21 
            in Gazipur, Bangladesh. But I grow up in Dhaka. Love to read books 
            and also love to travel. 
            </p>
            <div className="mg-t5">
              <a
                className=""
                href="https://github.com/spacelinkers"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-3x icon-bg" />
              </a>

              <a
                href="https://www.linkedin.com/in/m-a-hasan-molla-907139126/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="fa-3x icon-bg"
                />
              </a>

              <a href="https://twitter.com/spacelinkers" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="fa-3x icon-bg" />
              </a>

              <a>
                <FontAwesomeIcon icon={faFacebook} className="fa-3x icon-bg" />
              </a>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default About;
