import React, { Component } from "react";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

class Links extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button
          color="inherit"
          size="large"
          endIcon={<DescriptionIcon />}
          href="https://drive.google.com/file/d/1-qxb6JoYa0_H91GQ5TgIzP15mTk2zHXB/view?usp=sharing"
        ></Button>
        <Button
          color="inherit"
          endIcon={<GitHubIcon />}
          href="https://github.com/Nahue256"
        ></Button>
        <Button
          color="inherit"
          endIcon={<ContactMailIcon />}
          href="mailto: nahuecarabajal@gmail.com"
        ></Button>
        <Button
          color="inherit"
          endIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/nahuel-carabajal-5b77b1180/"
        ></Button>
        <Button
          color="inherit"
          endIcon={<InstagramIcon />}
          href="https://www.instagram.com/nahuecarabajal/"
        ></Button>
      </div>
    );
  }
}

export default Links;
