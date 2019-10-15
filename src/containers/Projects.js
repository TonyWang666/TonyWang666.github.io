import React, { Fragment } from "react";

import { Typography } from "@material-ui/core/";

const Projects = () => (
  <Fragment>
    <div className="split left">
      <header className="App-header">
        <Typography variant="h1">Projects Under Construction</Typography>
        <Typography variant="h4">Choose one of the projects below</Typography>
      </header>
    </div>
    <div className="split right">
      <Typography variant="h4">
        Project Description of the Project selected
      </Typography>
    </div>
  </Fragment>
);

export default Projects;
