import React, { Fragment } from "react";
import { HomePicture } from "../content/images";
import { Box, Typography } from "@material-ui/core/";
import { Links } from "../components";

const Home = () => (
    <Fragment>
        <div className="split left text">
            <Typography variant="h5">
                <Box>
                    <strong>Welcome to Tony's website!</strong> <br /> <br />
                    My legal name is Jiaxiang Wang.<br />
                    I am a full-stack developer with 2 year work experience.
                </Box>
                <br />
                <Box>
                    Currently, I am computer science major student at <br /> <strong>University of California, Irvine</strong>. <br />
                    My expected gradutating time is <strong> June 2020 </strong>.
                    I have experience both with the <strong>Front-end </strong>and <strong>Back-end</strong> developing.
                </Box>
            </Typography>
            <br/>
            <footer> <Links /> </footer>
        </div>
        <div className = "split right text">
            <img src = {HomePicture} alt="PictureOfTony" width="500" height="500" />
        </div>
    </Fragment>
);

export default Home;