import React from "react";
import { profileImage } from "../content/images";
import { Avatar, Typography, Card, CardHeader, Divider, CardContent, Chip } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import DoneIcon from '@material-ui/icons/Done';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import WbCloudyOutlinedIcon from '@material-ui/icons/WbCloudyOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Links } from "../components";
import { Front_End2, Back_End, others } from "../content/images";

const useStyles = makeStyles(theme => ({
    homeParent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    homeHead: {
        marginTop: '64px',
        display: 'flex',
        backgroundColor: '#42a5f5',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    small: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
    intro: {
        margin: '20px',
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    root: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },
    card: {
        width: 350,
    },
    chip: {
        margin: '4px 1px',   
    }
}));



const Home = (props) => {
    const classes = useStyles();

    const colortheme = createMuiTheme({
        palette: {
          primary: { main: lightBlue[50], contrastText: lightBlue[50] },
          secondary: { main: "#42a5f5", contrastText: "#42a5f5" }
        }
    });
    
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    const front_end_arr = ['React/Redux', 'JavaScript', 'Node.js', 'HTML/CSS/SASS', 'Angular.js', 'Ionic', 'GraphQL', 'jQuery', 'RESTful APIs']
    const back_end_arr = ['Java', 'JavaScript', 'Python', 'PostgreSQL/MySQL', 'Microservices', 'Mongo DB', 'Apache Cassandra', 'Couchbase(N1QL)', 'Graph DB(Neo4j)', 'Apache Spark']
    const others_arr = ['1+ Years Work Experience', 'Agile Development', 'Project Management', 'Public Speaking', 'Social Media Marketing', 'Hosting Events', 'Good Communication Skill', 'Strong Sense Of Responsibility']
    return(
        <MuiThemeProvider theme={colortheme}>
            <div className={classes.homeParent}>
                <div className={classes.homeHead} >
                    <Avatar src = {profileImage} alt="PictureOfTony" variant='circle' className={classes.small} />
                        <div className={classes.intro}>
                            <Typography variant="h5" color='primary'>Hi, this is </Typography>
                            <Typography variant="h1" color='primary' gutterBottom>Tony Wang</Typography>
                            <Typography variant="h5" color='primary' gutterBottom>I am currently a full-stack engineer at Roblox China(罗布乐思/Luobulesi).</Typography>
                            <br />
                            <Typography variant="h5" color='primary' gutterBottom>I graduated from the University of California, Irvine with computer science major in June 2020.</Typography>
                            <br />
                            <Typography variant="h5" color='primary' gutterBottom>Nice to meet you and below are my expertises: </Typography>
                        </div> 
                </div>
                <Divider />
                <div className={classes.root}> 
                    <Card className={classes.card} style={{marginLeft: '100px'}}>
                        <CardHeader 
                            title="Front-End"
                            titleTypographyProps={{variant:'h5' }}
                            avatar={
                                <Avatar alt="Front-End" src={Front_End2} className={classes.avatar}/>
                            }
                        />
                        <CardContent>
                                {front_end_arr.map((element) =>
                                    <div>
                                        <Chip
                                            className={classes.chip}
                                            icon={<BuildOutlinedIcon />}
                                            clickable
                                            color="secondary"
                                            label={element}
                                            onDelete={handleDelete}
                                            deleteIcon={<DoneIcon />}
                                            variant='outlined'
                                        /> 
                                    </div>
                                )}
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader 
                            title="Back-End"
                            titleTypographyProps={{variant:'h5' }}
                            avatar={
                                <Avatar alt="Front-End" src={Back_End} className={classes.avatar}/>
                            }
                        />
                        <CardContent>
                            {back_end_arr.map((element) =>
                                <div className={classes.chip}>
                                    <Chip
                                        className={classes.chip}
                                        icon={<WbCloudyOutlinedIcon />}
                                        clickable
                                        color="secondary"
                                        label={element}
                                        onDelete={handleDelete}
                                        deleteIcon={<DoneIcon />}
                                        variant='outlined'
                                    /> 
                                </div>
                            )
                            }
                        </CardContent>
                    </Card>
                    <Card className={classes.card} style={{marginRight: '100px'}}>
                        <CardHeader 
                            title="Others"
                            titleTypographyProps={{variant:'h5' }}
                            avatar={
                                <Avatar alt="others" src={others} className={classes.avatar}/>
                            }
                        />
                        <CardContent>
                            {others_arr.map((element) =>
                                <div className={classes.chip}>
                                    <Chip
                                        className={classes.chip}
                                        icon={<ThumbUpOutlinedIcon />}
                                        clickable
                                        color="secondary"
                                        label={element}
                                        onDelete={handleDelete}
                                        deleteIcon={<DoneIcon />}
                                        variant='outlined'
                                    /> 
                                </div>
                            )
                            }
                        </CardContent>
                    </Card>
                </div>
                <footer> <Links /> </footer>    
            </div>
        </MuiThemeProvider>

    )
}

export default Home;