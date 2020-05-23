import React, { Component, Fragment } from "react";
import "./App.css";

import SideBar from "./Pages/SideBar";
import About from "./Pages/About.js";
import Experience from "./Pages/Experience.js";
import Skills from "./Pages/Skills.js";
import Education from "./Pages/Education.js";
import Certification from "./Pages/Certification.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <SideBar />
        </div>

        <div className="body-style">
          <div>
            <About />
          </div>
          <hr className="line" />

          <div className="mg-b5 mg-t7">
            <Experience />
          </div>
          <hr className="line" />

          <div className="mg-b5 mg-t7">
            <Skills />
          </div>
          <hr className="line" />

          <div className="mg-b5 mg-t7">
            <Education />
          </div>
          <hr className="line" />

          <div className="mg-b5 mg-t7">
            <Certification />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
