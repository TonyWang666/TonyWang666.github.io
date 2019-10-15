import React, { Fragment } from "react";
import pdfProfile from "../content/documents/resume.pdf"
import { Typography } from "@material-ui/core/";
import { Links } from "../components";

const Resume = () => (
      <Fragment>
        <div className="split left">
          <Typography variant="h1">Resume</Typography>
          <br />
          <footer> <Links /> </footer>
        </div>
        <div className="split right">
          <iframe
            title="resume"
            src={ pdfProfile }
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Fragment>
);

export default Resume;
