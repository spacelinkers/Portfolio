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
              Hello, my name is M A Hasan Molla. As I am a Web Developer and
              Python Developer, I have good knowledge in Django. I also know
              React, Git. I completed my undergraduate program from Chittagong
              University of Engineering and Technology (CUET) and my major was
              CSE.
            </p>
            <p className="para">
              As you know my name, let's talk about somethings else about me. I
              was born in February 21 in Gazipur, Bangladesh. But I grow up in
              Dhaka. I love programming and I am passionate at programming
              contest. I myself took part in both the online and onsite contest.
              I have interest in Data Engineering and Machine Learning. Physics
              and Astrophysics are another sites that I have keen interest and I
              also love traveling. I am strongly believed in open source and I
              prefer using linux. All of my work is open source and I think
              always will be. I have great interest in linux kernel. I strongly
              want to contribute in linux kernel project in future.
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
