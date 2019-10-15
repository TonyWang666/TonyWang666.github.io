import React from "react"
import { Route, Switch } from "react-router-dom";
import {AboutMe, Resume, Projects} from "./containers"
const AppRouter = props => (
    <Switch>
      {/* <Route exact path="/" render={() => <Home />} /> */}
      <Route exact path="/" render={() => <AboutMe />} />
      <Route path="/Resume" render={() => <Resume />} />
      <Route path="/Projects" render={() => <Projects />} />
    </Switch>
  );
  
  export default AppRouter;