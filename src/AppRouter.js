import React from "react"
import { Route, Switch } from "react-router-dom";
import {Home, Resume, Projects} from "./containers"
import { Movie_Zone, Spotify_Browser, Yeppy, Cassandra_Data_Manager } from './components';
const AppRouter = props => (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/Resume" render={() => <Resume />} />
      <Route path="/Projects" render={() => <Projects />} />
      <Route path="/Movie_Zone" render={() => <Movie_Zone />} />
      <Route path="/Spotify_Browser" render={() => <Spotify_Browser />} />
      <Route path="/Yeppy" render={() => <Yeppy />} />
      <Route path="/Cassandra_Data_Manager" render={() => <Cassandra_Data_Manager />} />
    </Switch>
  );
  
  export default AppRouter;