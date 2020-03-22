import React, { Fragment, useState }from "react";
import {resume, de_anza_transcript, recommendation, UCI_transcript} from "../content/documents"
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Links } from "../components";

const options = [
  { data: resume, label: 'Resume' },
  { data: recommendation, label: 'Recommendation' },
  { data: UCI_transcript, label: 'UCI transcript' },
  { data: de_anza_transcript, label: 'De Anza Transcript' },
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Resume = (props) => {
  const [doc, setDoc] = useState(resume);
  const classes = useStyles();
  return(
      <Fragment>
        <div className="split left">
          {/* <Typography variant="h1">{doc.toString}</Typography> */}
          <div style={{ width: "500px" }}>
            <FormControl
              className={classes.formControl}
            >
              <InputLabel htmlFor="doc-label">Choose A File To View:</InputLabel>
              <Select
                labelId="doc-select-label"
                id="doc-select"
                value={doc}
                onChange={(element) => {setDoc(element.target.value)}}
              >
                {options.map((element) =>{
                  return (<MenuItem value={element.data}>{element.label}</MenuItem>)
                })}
              </Select>
            </FormControl>
        </div>
          <br />
          <footer> <Links /> </footer>
        </div>
        <div className="split right">
          <iframe
            title="resume"
            src={doc}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Fragment>
  )
}

export default Resume;
