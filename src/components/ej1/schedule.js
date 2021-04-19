import React, { Component } from "react";

class Schedule extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-dark m-2">{this.props.horario.id}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.horario.id)}
          className={this.props.bottonClass}
        >
          {this.props.horario.time}
        </button>
      </div>
    );
  }
}

export default Schedule;
