import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import TextyAnim from "rc-texty";

class Title extends Component {
  state = {};

  getEnter = (e) => {
    switch (e.index) {
      default:
        return {
          opacity: 0,
        };
    }
  };
  render() {
    return (
      <div>
        <Typography variant="h5" align="center">
          <TextyAnim enter={this.getEnter} leave={this.getEnter}>
            Mi nombre es
          </TextyAnim>
        </Typography>
        <Typography variant="h2" align="center">
          <TextyAnim enter={this.getEnter} leave={this.getEnter}>
            Nahuel Carabajal
          </TextyAnim>
        </Typography>
        <Typography variant="h5" align="center">
          <TextyAnim enter={this.getEnter} leave={this.getEnter}>
            Desarrollador FullStack
          </TextyAnim>
          <br />
        </Typography>
      </div>
    );
  }
}

export default Title;
