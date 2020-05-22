import React, { Component, Fragment } from "react";
import "./App.css";

import Heading from "./components/Heading.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <SideBar />
        </div>

        <div className="details_style">
          <div>
            <Heading />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Work />
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
