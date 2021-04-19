import React, { Component } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

import StaticDrawer from "./drawer";

const Projects = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StaticDrawer />
      <div className={classes.content}>
        <Box my={10}>
          <Typography variant="h3" align="center">
            <Box my={5}>Proyectos</Box>
          </Typography>
        </Box>
        <Box my={10}>
          <Typography variant="body1" align="center">
            <Box my={5}>
              <Typography variant="h4" align="center">
                GameReviews
              </Typography>
              <br /> https://dinamoweb.000webhostapp.com <br />
              Implemente lo aprendido en desarrollo web para crear una página
              donde podés subir las reseñas de un videojuegos que elijas y poder
              ver las reseñas que las demás personas suban. Tecnologías
              implementadas: Bootstrap, CSS, HTML, NodeJS, MongoDB, Mongoose,
              ExpressJS, Heroku, API restful.
            </Box>
            <Box my={5}>
              <Typography variant="h4" align="center">
                Listado de tareas
              </Typography>
              <br /> http://nahue256.github.io/ <br />
              Desarrolle una aplicación web donde podes anotar tus tareas,
              acumulándolas y podes marcar estas tareas para eliminarlas una vez
              completadas. <br />
              Tecnologías implementadas: Bootstrap, CSS, HTML, Javascript.
            </Box>
            <Box my={5}>
              <Typography variant="h4" align="center">
                Pack de juegos
              </Typography>
              <br /> http://nahue256.github.io/ <br />
              Desarrolle un pack de juegos basado en un video hecho por el
              youtuber holamundo, en donde propone realizar 5 ejercicios para el
              portfolio <br />
              Tecnologías implementadas: React, Bootstrap, CSS, HTML,
              Javascript.
            </Box>

            <Box my={5}>
              <Typography variant="h4" align="center">
                Portfolio
              </Typography>
              <br /> http://nahue256.github.io/ <br />
              Desarrolle un portfolio de 0, donde las personas interesadas
              pueden entrar y ver informacion acerca de mi, y a que me dedico
              <br />
              Tecnologías implementadas: React, Material-UI, CSS, HTML,
              Javascript.
            </Box>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
