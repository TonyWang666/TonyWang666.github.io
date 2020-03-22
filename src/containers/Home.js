import React from "react";
// import React from '../../node_modules/react';
import { homePicture } from "../content/images";
import { Avatar, Typography, Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Links } from "../components";

const useStyles = makeStyles(theme => ({
    small: {
        width: theme.spacing(50),
        height: theme.spacing(50),
    },
}));
const Home = (props) => {
    const classes = useStyles();
    return(
        <div className='home-parent'>
            <div className='homeHead' >
                <Avatar src = {homePicture} alt="PictureOfTony" variant='circle' className={classes.small} />
                <div className='intro'>
                    <Typography variant="h3" gutterBottom>Hi, this is Tony!</Typography>
                    <Typography variant="h5" gutterBottom>I am a fourth year undergrad at the University Of California, Irvine.</Typography>
                    <br />
                    <Typography variant="h5" gutterBottom>I am actively looking for full-time software engineer position starting from June 2020.</Typography>
                    <br />
                    <Typography variant="h5" gutterBottom>Nice to meet you and below are my expertises: </Typography>
                </div>
            </div>
            <div className='card'> 
                <div>
                    <Card>
                        <CardHeader 
                            title="Front-End"
                        />
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader 
                            title="Back-End"
                        />
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader 
                            title="Others"
                        />
                    </Card>
                </div>
            </div>
            <footer> <Links /> </footer>    
        </div>
    // <Fragment>
    //     <div className="split left text">
    //         <Typography variant="h5">
    //             <Box>
    //                 <strong>Hi, I'm Tony!</strong> <br /> <br />
    //                 I'm a
    //                 Currently, I am computer science major student at <strong>University of California, Irvine</strong>. <br />
    //                 My expected gradutating time is <strong> June 2020 </strong>. <br />
    //                 I have experience both with the <strong>Front-end </strong>and <strong>Back-end</strong> developing.
    //             </Box>
    //             <br />
    //             <Box>
    //                 Below is my work experience: <br />
    //                 Front-End Developer, Baidu Inc. Shenzhen, China
    //                 <br />
    //                 Software Development Intern, Ardent Labs, Irvine, CA
    //             </Box>
    //         </Typography>
    //         <footer> <Links /> </footer>
    //     </div>
    //     <div className = "split right text">
    //         <img src = {homePicture} alt="PictureOfTony" width="700" height="800" />
    //     </div>
    // </Fragment>  
    )
}

export default Home;