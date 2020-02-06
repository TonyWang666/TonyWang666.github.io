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
                    My name is Jiaxiang Wang(Tony).<br />
                    Currently, I am computer science major student at <strong>University of California, Irvine</strong>. <br />
                    My expected gradutating time is <strong> June 2020 </strong>. <br />
                    I have experience both with the <strong>Front-end </strong>and <strong>Back-end</strong> developing.
                </Box>
                <br />
                <Box>
                    Below is my work experience: <br />
                    Front-End Developer, Baidu Inc. Shenzhen, China
                    <br />
                    Software Development Intern, Ardent Labs, Irvine, CA
                </Box>
            </Typography>
            <footer> <Links /> </footer>
        </div>
        <div className = "split right text">
            <img src = {HomePicture} alt="PictureOfTony" width="500" height="500" />
        </div>
    </Fragment>
);

export default Home;