import React, { Fragment } from "react";
import { Typography } from "@material-ui/core/";
import { Links } from "../components"
const Projects = () => (
  <Fragment>
    <div className="split left">
      <header className="App-header">
        <Typography variant="h1">Project List</Typography>
          <br />
          <ul>Movie Zone</ul>
          <ul>Peer Genius</ul>
          <ul>Predicting Year of Song</ul>
      </header>
      <footer> <Links /> </footer>
    </div>
    <div className="split right">
      <h1> Project Description</h1>
      <p className = "des text">The Movie Zone is a website I made in class 122B. Honestly, it is my child. I spent 3 months on this product with all my passion and tons of "hairs"
      <br /><br />I used microservice with MySql for its database. There are 4 databases work separately and independently.
      <br /><br />I implemented the back-end with Java, which is my most proficient language.
      <br /><br />The front-end I used JavaScript and jQuery.
      </p>
    </div>
  </Fragment>
);

export default Projects;
