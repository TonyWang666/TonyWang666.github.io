import React from "react";
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
  cardHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
                  title={<div className={classes.cardHead}><Typography variant="h5" >Movie Zone</Typography></div>}
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
                  title={<div className={classes.cardHead}><Typography variant="h5" >Yeppy</Typography></div>}
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
                  title={<div className={classes.cardHead}><Typography variant="h5" >Spotify Browser</Typography></div>}
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
                  title={<div className={classes.cardHead}><Typography variant="h5" >Data Manager</Typography></div>}
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