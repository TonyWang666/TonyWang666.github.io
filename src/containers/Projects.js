import React, { useState } from "react";
import { Typography, Card, CardHeader, CardActionArea, CardContent, Link, CardMedia, Chip } from "@material-ui/core";
import { Links } from "../components"
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { MovieImage, FoodImage, MusicImage, CassandraImage } from '../content/images';

const useStyles = makeStyles(theme => ({
  homeParent: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  homeHead: {
    display: 'flex',
    backgroundColor: '#42a5f5',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 90,
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  project: {
    margin: '50px auto',
    display: 'flex',
  },
  card: {
    width: 300,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  chip: {
    margin: '4px 1px',   
  }
}));
const Projects = (props) => {
  const classes = useStyles();
  const movie_stack = ['Java', 'JQuery', 'HTML/CSS', 'Microservies', 'MySQL']
  const yeppy_stack = ['JavaScript', 'React.js', 'Java', 'PostgreSQL', 'RESTful APIs', 'Recommendation System']
  const spotify_stack = ['Angular', 'Node.js', 'Express', 'OAuth', 'TypeScript']
  const cassandra_stack = ['Apache Cassandra', 'NoSQL', 'CQL']
  return(
    <div className={classes.homeParent}>
      <div className={classes.homeHead} >
            <Typography variant="h2" color='primary'> Projects </Typography>
      </div>
      <div className={classes.projects}>
        <div className={classes.project}>
          <Link underline='none' component={RouterLink} to='/Movie_Zone'>
            <Card className={classes.card}>
              <CardActionArea>
                <CardHeader
                  title='Movie_Zone'
                />
                <CardMedia
                  className={classes.media}
                  image={MovieImage}
                  title='Movie'
                />
                <CardContent>
                  {movie_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="secondary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
        <div className={classes.project}>
          <Link underline='none' component={RouterLink} to='/Yeppy'>
            <Card className={classes.card}>
              <CardActionArea>
                <CardHeader
                  title='Yeppy'
                />
                <CardMedia
                  className={classes.media}
                  image={FoodImage}
                  title='Yeppy'
                />
                <CardContent>
                  {yeppy_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="secondary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
        <div className={classes.project}>
          <Link underline='none' component={RouterLink} to='/Spotify_Browser'>
            <Card className={classes.card}>
              <CardActionArea>
                <CardHeader
                  title='Spotify_Browser'
                />
                <CardMedia
                  className={classes.media}
                  image={MusicImage}
                  title='Spotify_Browser'
                />
                <CardContent>
                  {spotify_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="secondary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
        <div className={classes.project}>
          <Link underline='none' component={RouterLink} to='/Cassandra_Data_Manager'>
            <Card className={classes.card}>
              <CardActionArea>
                <CardHeader
                  title='Data Manager'
                />
                <CardMedia
                  className={classes.media}
                  image={CassandraImage}
                  title='Cassandra_Data_Manager'
                />
                <CardContent>
                  {cassandra_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="secondary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </div>
      <Links />
    </div>
  )
}
export default Projects;


// class Projects extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       option: 1,
//     }
//     this.change = this.change.bind(this);
//   }
//   change(x = 0){
//     console.log("Inside change, x is: " + x);
//     this.setState({
//       option : x
//     });
//     console.log("after change, option is: " + this.state.option);
//   }
//   render(){
//     return (
//       <Fragment>
//         <div className="split left">
//           <header className="App-header">
//             <Typography variant="h1">Project List</Typography>
//               <br />
//               <Button onClick={() => this.change(0)}>Movie Zone</Button>
//               <Button onClick={() => this.change(1)}>Peer Genius</Button>
//               <Button onClick={() => this.change(2)}>Predicting Year of Song</Button>
//           </header>
//           <footer> <Links /> </footer>
//         </div>
//         <div className="split right">
//           {console.log("option here is : " + this.state.option)}
//           { this.state.option === 0 ? <MovieZone/> : this.state.option === 1 ? <Voluntu /> : <YearOfSong />}
//         </div> 
//       </Fragment>
//     )
//   }
// }
// export default Projects;
