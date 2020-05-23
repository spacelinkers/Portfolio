import React, { Component, Fragment } from "react";
import "./App.css";

import SideBar from "./Pages/SideBar";
import About from "./Pages/About.js";
import Experience from "./Pages/Experience.js";
import Skills from "./Pages/Skills.js";
import Education from "./Pages/Education.js";
import Contact from "./Pages/Contact.js";

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
          <div>
            <Experience />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Education />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
