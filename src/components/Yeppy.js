import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MovieImage, FoodImage, MusicImage, CassandraImage } from '../content/images';
import { Typography, CardMedia, Card, CardHeader, GridList, GridListTile, GridListTileBar, IconButton, Chip, ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelSummary, ExpansionPanelDetails, Divider } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player';
import { landingPage, homePage, Like, recommend, SearchResult, SearchingMexican, SortBy } from '../content/images';

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
        // height: 200,
        // width: 400,
        // marginTop: 50,
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
const Yeppy = (props) => {
    const classes = useStyles()
    const yeppy_stack = ['Java', 'React', 'JavaScript', 'HTML/CSS', 'PostgreSQL']
    const intro = 'Yeppy is an Personal Event and Restaurant Recommendation System. The ultimate goal of this system is to learn its user’s habits and preferences and provide recommendations on events and restaurants that the user might be interested in. The system is friendly for all users regardless of their professions or their education background as long as they know how to utilize a smart device. It is very user-favorable considering the fact that the system is going to provide users recommendation when they are seeking for places and ideas.'
    const tileData = [{title: 'Landing Page', img: landingPage}, {title: 'Home Page', img: homePage}, {title: 'Like', img: Like}, {title: 'Recommendation', img: recommend}, {title:'Searching Mexican', img: SearchingMexican}, {title: 'Searched Result', img: SearchResult}, {title: 'Sort By Rating', img: SortBy}]
    const  chllngAndAct = [
        {title: 'How to provide user favorite events/restaurant?', sol: 'Solution: Content-Based algorithm', content: "Most people like people or things of similar characteristics. Given item profiles (category, price, etc.) of users' favorite, the system will recommend items that are similar to what users liked before."}, 
        {title: 'What kind of information we should collect for analyzing user?', sol: 'Answer: Building Personal Model', content: 'The Personal Model includes User Location, Restaurant Visit History, Top Restaurant Categories, and Event Like History.'}, 
        {title: 'How to collect information of the user?', sol: 'Solution: React Built-in function and User Actions', content: 'For the User Location, we use React Built-in function. For others, we analyzed based on user activities such as Like frequency for the specific category of the restaurant and restaurant visiting history.'}]
    return(
        <div className={classes.homeParent}>
            <div className={classes.homeHead} >
                <div>
                    <Typography variant="h2" color='primary' style={{marginLeft: '60px'}}> Yeppy Project </Typography>
                    {yeppy_stack.map((element) => 
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
                    <Card style={{minWidth: '430px'}}>
                        <CardHeader
                            title="Technology Stack"
                        />
                        <CardMedia
                            className={classes.media}
                            image={FoodImage}
                            title='food'
                        />
                        <div className={classes.stack}>
                            <Typography>Front-End: JavaScrpt, React.js</Typography>
                            <Typography>Back-End: Java</Typography>
                            <Typography>Database: PostgerSQL</Typography>
                            <Typography>Type: Content-Based Recommend System</Typography>
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
                <ReactPlayer url='https://youtu.be/EioU2T6qlZw' playing />
            </div>
            <Divider />
            <div style={{margin: '100px auto'}}>
                <Typography variant='h2'  >Thanks for watching</Typography>
            </div>
        </div>
    )
}

export default Yeppy;