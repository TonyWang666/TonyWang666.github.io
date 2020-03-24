import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MovieImage, FoodImage, MusicImage, CassandraImage } from '../content/images';
import { Typography, CardMedia, Card, CardHeader, Chip, ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelSummary, ExpansionPanelDetails, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    chip: {
        margin: '20px 20px',   
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flexbox: {
        margin: '100px',
        display: 'flex',
    },
    media: {
        display: 'flex',
        paddingTop: '56.25%', // 16:9
    },
    stack: {
        margin: '20px'
    },
    chanllangesAndActions: {
        margin: '50px auto',
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    expansion: {
        display: 'flex',
        flexDirection: 'column',
    },

}));
const Spotify_Browser = (props) => {
    const classes = useStyles()
    const spotify_stack = ['Angular', 'Node.js', 'HTML/CSS', 'Express', 'TypeScript', 'OAuth']
    const intro = 'Spotify Browser is a music website for the user to browse the Spotify music and search by name, album, categories and artists. At the same time, it is also a Full-Stack school project from the University of California, Irvine.'
    const chllngAndAct = [{title: 'How to develop a Front-End in a short term?', sol:'Solution: Using Angular', content:'Angular is using MVC(Model-View-Control) architecture, which is easy for developer to implement. At the same time, Angular  organizes code into buckets, whether it is components, directives, pipes, or services. Modules make the development easy and secure.'},
        {title:'How to provide User-friendly UI for the user?', sol:'Solution: Sample from the Internet', content:'Collecting and learning the sample website from the internet and gather the advantages among them. At the same time, import the other UI libraries such material-ui to decorate each module.'},
        {title:'How to get the fresh music data?', sol:'Solution: Spotify API', content:'Building RESTful APIs to connect and fetch data from the Back-End of the spotify.'},
        {title:'How to deal with CORS Mechanism to fetch data from the spotify server?', sol:'Solution: Local Spotify Client Proxy ', content:'Since the CORS(Cross-Origin Resource Sharing) forbiddens the Cross-Orgin fetching, I implemented a local spotify Proxy to fetch the data from the Spotify Back-End with the same domain. After fetching the data, then I pass the data to each Angular modules to display.'}]
    return(
        <div className={classes.homeParent}>
            <div className={classes.homeHead} >
                <div>
                <Typography variant="h2" color='primary'> Spotify Browser Project </Typography>
                {spotify_stack.map((element) => 
                    <Chip
                      className={classes.chip}
                      clickable
                      color="primary"
                      label={element}
                      variant='outlined'
                    /> 
                  )}
                </div>
            </div>
            <Divider />
            <div className={classes.wrapper}>
                <div className={classes.flexbox}>
                    <div>
                    <Typography variant="h3" gutterBottom>Project Introduction</Typography>
                    <Typography variant='h6' gutterBottom> {intro} </Typography>
                    </div>
                </div>
                <div className={classes.flexbox}>
                    <Card style={{minWidth: '450px'}}>
                        <CardHeader
                            title="Technology Stack"
                        />
                        <CardMedia
                            className={classes.media}
                            image={MusicImage}
                            title='music'
                        />
                        <div className={classes.stack}>
                            <Typography>Front-End: TypeScript, Angular, HTML/CSS</Typography>
                            <Typography>Back-End:  JavaScript, Node.js, Express, OAuth</Typography>
                            <Typography>Database: the database of Spotify</Typography>
                        </div>
                    </Card>
                </div>
            </div>
            <Divider />
            <div className={classes.chanllangesAndActions}>
                <Typography variant='h3' style={{margin: '50px'}}>Challenges And Actions</Typography>
                {chllngAndAct.map((element) => {
                    return(
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}>{element.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.expansion}>
                                <Typography variant='h4' > {element.sol} </Typography>
                                <Typography variant='h6'>
                                    {element.content}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })}
            </div>
            <Divider />
            <div style={{margin: '100px auto'}}>
                <Typography variant='h2'  >Thanks for watching</Typography>
            </div>
        </div>
    )
}

export default Spotify_Browser;