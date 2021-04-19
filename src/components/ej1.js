import React, { Component } from "react";

import Schedules from "./ej1/schedules";
import Horarios from "./ej1/data/data";

class Ej1 extends Component {
  state = {
    horarios: Horarios,
  };
  render() {
    return (
      <div>
        <Schedules horarios={this.state.horarios} />
      </div>
    );
  }
}

export default Ej1;
