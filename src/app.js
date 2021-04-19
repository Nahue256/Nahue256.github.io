import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Main from "./components/main";
import Contact from "./components/contact";
import Formation from "./components/formation";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Ej1 from "./components/ej1";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Main}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/formation" component={Formation}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/ej1" component={Ej1}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
