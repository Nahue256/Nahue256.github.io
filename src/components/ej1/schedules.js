import React, { Component } from "react";
import Schedule from "./schedule";
import Counter from "./counter";

class Schedules extends Component {
  state = {
    horarios: this.props.horarios,
    contador: 8,
  };

  handleIncrement = (horarioId) => {
    const horario = this.state.horarios.find(
      (element) => element.id == horarioId
    );
    if (horario.occupied && this.state.contador >= 0) {
      this.ToggleOccupied(horarioId);
      this.IncrementCounter(horarioId);
    } else if (!horario.occupied && this.state.contador > 0) {
      this.ToggleOccupied(horarioId);
      this.DecrementCounter(horarioId);
    }
  };

  ToggleOccupied(horarioId) {
    const horarios = this.state.horarios;
    const horario = this.state.horarios.find(
      (element) => element.id == horarioId
    );
    horario.occupied = horario.occupied == true ? false : true;

    console.log(horario);
    horarios[horarioId - 1] = horario;
    this.setState(horarios);
  }

  DecrementCounter(horarioId) {
    const i = horarioId - 1;
    console.log("decrementado el horario numero " + horarioId);
    const contador = this.state.contador - 1;
    this.setState({ contador });
    return i;
  }
  IncrementCounter(horarioId) {
    const i = horarioId - 1;
    console.log("Incrementado el horario numero " + horarioId);
    const contador = this.state.contador + 1;
    this.setState({ contador });
    return i;
  }
  GetBadgeClasses = (horario) => {
    const occupied = horario.occupied;

    if (occupied == false && this.state.contador == 0) {
      return "btn btn-sm btn-danger";
    } else if (occupied == false) {
      return "btn btn-sm btn-secondary";
    } else if (occupied == true) {
      return "btn btn-sm btn-success";
    }
  };

  render() {
    return (
      <div>
        <Counter counter={this.state.contador} />
        {this.state.horarios.map((horario) => (
          <Schedule
            onIncrement={this.handleIncrement}
            key={horario.id}
            horario={horario}
            bottonClass={this.GetBadgeClasses(horario)}
          />
        ))}
      </div>
    );
  }
}

export default Schedules;
