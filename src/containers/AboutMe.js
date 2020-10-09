import React, { Fragment } from "react";
import { aboutMePicture } from "../content/images";
import { Box, Typography } from "@material-ui/core/";
import { Links } from "../components";

const AboutMe = () => (
    <Fragment>
        <div className = "split left">
            <img src = {aboutMePicture} alt="aboutMe" width="500" height="500" />
        </div>
        <div className="split right text">
            <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                    Hi! This is Jiaxiang Wang. You can just call me Tony.
                    Welcom to My Portfolia.
                </Box>
                <br />
                <Box>
                    I am currently a full-stack engineer at Roblox China(罗布乐思/Luobulesi).
                    I graduated from the University of California, Irvine with computer science major in June 2020. 
                    I have 2 years work experience before and familiar with the front-end and back-end developing.
                </Box>
            </Typography>

            <br/>
            <Links />
        </div>
    </Fragment>
);

export default AboutMe;