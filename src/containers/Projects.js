import React, { Fragment, Component } from "react";
import { Typography, Button } from "@material-ui/core/";
import { Links } from "../components"
import {MovieZone, Voluntu, YearOfSong} from "./PastProjects";
class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      option: 1,
    }
    this.change = this.change.bind(this);
  }
  change(x = 0){
    console.log("Inside change, x is: " + x);
    this.setState({
      option : x
    });
    console.log("after change, option is: " + this.state.option);
  }
  render(){
    return (
      <Fragment>
        <div className="split left">
          <header className="App-header">
            <Typography variant="h1">Project List</Typography>
              <br />
              <Button onClick={() => this.change(0)}>Movie Zone</Button>
              <Button onClick={() => this.change(1)}>Peer Genius</Button>
              <Button onClick={() => this.change(2)}>Predicting Year of Song</Button>
          </header>
          <footer> <Links /> </footer>
        </div>
        <div className="split right">
          {console.log("option here is : " + this.state.option)}
          { this.state.option === 0 ? <MovieZone/> : this.state.option === 1 ? <Voluntu /> : <YearOfSong />}
        </div> 
      </Fragment>
    )
  }
}
export default Projects;
