import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar.js";
import Heading from "./components/Heading.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="MainSection">
        <main className="MyTopbar">
          <NavBar />
        </main>
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
        <main>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
