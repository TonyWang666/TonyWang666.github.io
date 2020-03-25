import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MovieImage, FoodImage, MusicImage, CassandraImage } from '../content/images';
import { Typography, CardMedia, Card, CardHeader, GridList, GridListTile, GridListTileBar, IconButton, Chip, ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelSummary, ExpansionPanelDetails, Divider } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player';
import { microservices, mainPage, advanceSearch, Paypal1, Paypal2, SearchedData } from '../content/images';

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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: '50px'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
const Move_Zone = (props) => {
    const classes = useStyles()
    const movie_stack = ['Java', 'JQuery', 'HTML/CSS', 'Microservies', 'MySQL', 'JavaScript']
    const intro = 'Movie Zone is an online movie shopping website. In the Movie Zone, the user are able to browse most of the movies from 1960 to 2010, do advance search(based on Title, Genre, Year, Director, etc), and manage shopping cart and pay the movie wih the Paypal.'
    const tileData = [{title: 'Microservices', img: microservices}, {title: 'Main Page', img: mainPage}, {title: 'Advance Search', img: advanceSearch}, {title: 'Pay with Paypal1', img: Paypal1}, {title:'Pay with Paypal2', img: Paypal2}, {title: 'Searched Data', img: SearchedData}]
    const chllngAndAct = [
        {title: 'Too many data entries slowing down the output of Back-End?', sol: 'Solution: Multi-threading', content: 'Using Java to implement a multi-thread program to handle and process different requests at the same time. It ends up by increasing the throughput of the whole Back-End.'},
        {title: 'The user experience is bad if it takes time to wait?', sol: 'Solution: API Gateway.', content: 'Using API Gateway to store the request from the user and send back Result Code 204 immediately back to user to show that the Back-End is processing instead of showing blank space to user. Once the processing of the data is finished, the Back-End will send the result and data to the Gateway. Using the transaction id to track each request and return the data back to the user. '}, 
        {title: 'How to build a stable and secure database?', sol: 'Solution: Microservices', content: 'Using the microservices architecture to provide a stable and secure database. There are 4 databases in this system in total. Each database is separated and independent to run and process. Even if one database/server is broken by some reason, the other three databases are still working perfectly fine without losing any data among the three. '}, 
    ]
    return(
        <div className={classes.homeParent}>
            <div className={classes.homeHead} >
                <div>
                <Typography variant="h2" color='primary' style={{marginLeft: '60px'}}> Movie Zone Project </Typography>
                {movie_stack.map((element) => 
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
                    <Card style={{minWidth: '400px'}}>
                        <CardHeader
                            title="Technology Stack"
                        />
                        <CardMedia
                            className={classes.media}
                            image={MovieImage}
                            title='Movie'
                        />
                        <div className={classes.stack}>
                            <Typography>Front-End: JQuery, JavaScript</Typography>
                            <Typography>Back-End:  Java</Typography>
                            <Typography>Database: MySQL</Typography>
                            <Typography>Architecture: Mricroservices</Typography>
                        </div>
                    </Card>
                </div>
            </div>
            <Divider />
            <Typography variant='h3' style={{margin: '50px auto'}}>Sample Images</Typography>
            <div className={classes.root}>
                <GridList className={classes.gridList} cellHeight='600' cols={1.5}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
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
            <div className={classes.wrapper}>
                <Typography variant='h3' style={{margin: 'auto 0'}} >Video Demo</Typography>
                <ReactPlayer url='https://youtu.be/7Yc0nqA3Gd0' playing />
            </div>
            <Divider />
            <div style={{margin: '100px auto'}}>
                <Typography variant='h2'  >Thanks for watching</Typography>
            </div>
        </div>
    )
}

export default Move_Zone;