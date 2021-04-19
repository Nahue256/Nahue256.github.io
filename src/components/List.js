import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";

import { useHistory } from "react-router-dom";

const Lista = () => {
  const history = useHistory();

  const handleClickFormation = () => {
    history.push("/formation");
  };

  const handleClickExperience = () => {
    history.push("/experience");
  };

  const handleClickProjects = () => {
    history.push("/projects");
  };

  const handleClickHome = () => {
    history.push("/");
  };
  return (
    <div>
      <List componenent="nav">
        <ListItem onClick={handleClickHome} button>
          <Divider />
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Inicio</ListItemText>
        </ListItem>
        <ListItem onClick={handleClickExperience} button>
          <Divider />
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>Experiencia</ListItemText>
        </ListItem>
        <ListItem onClick={handleClickFormation} button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText>Formacion</ListItemText>
        </ListItem>
        <ListItem onClick={handleClickProjects} button>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText>Proyectos</ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default Lista;
