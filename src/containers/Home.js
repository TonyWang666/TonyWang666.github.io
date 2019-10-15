import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core/";
import { Links } from "../components";

const Home = () => (
  <header className="App-header">
    <script>
      {setTimeout(function() {
        window.location.href = "/AboutMe";
      }, 3000)}
    </script>
    <Link to="/AboutMe" style={{ color: "black", textDecoration: "none" }}>
      <div className="typewriter1">
        <Typography variant="h1">Jiaxiang</Typography>
      </div>
      <div className="typewriter2">
        <Typography variant="h1">Wang</Typography>
      </div>
    </Link>
    <Links />
  </header>
);

export default Home;
