import React, { Fragment } from "react";
//import PDF from 'react-pdf-js';
import pdfProfile from "../content/documents/resume.pdf"
import { Typography } from "@material-ui/core/";
import { Links } from "../components";
//import { connect } from "react-redux";
//import { getResume } from "../redux/actions/resumeActions";

class Resume = () => (
      <Fragment>
        <div className="split left">
          <Typography variant="h1">Resume</Typography>
          <br />
          <Links />
        </div>
        <div className="split right">
          <h>Below is my resume</h>
          <iframe
            title="resume-viewer"
            src={ pdfProfile }
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Fragment>
);

export default Resume;

// const mapStateToProps = state => ({
//   resume: state.resume.item
// });

// export default connect(
//   mapStateToProps,
//   { getResume }
// )(Resume);
