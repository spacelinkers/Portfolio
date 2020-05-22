import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./App.css";

import NavBar from "./components/NavBar.js";
import Heading from "./components/Heading.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";

class App extends Component {
  render() {
    return (
      <div>
        <Row noGutter>
          <Col log={3} className="p-0">
            <main>
              <NavBar />
            </main>
          </Col>
          <Col lg={9} className="p-0 scroll">
            <main>
              <Heading />
            </main>
            <main>
              <About />
            </main>
            <main>
              <Work />
            </main>
            <main>
              <Contact />
            </main>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
