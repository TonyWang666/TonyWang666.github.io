import React, { Fragment, useState }from "react";
import {resume, de_anza_transcript, recommendation, UCI_transcript} from "../content/documents"
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Links } from "../components";

const options = [
  { data: resume, label: 'Resume' },
  { data: recommendation, label: 'Recommendation' },
  { data: UCI_transcript, label: 'Transcript of University Of California, Irvine' },
  { data: de_anza_transcript, label: 'Transcript of De Anza College' },
];

const useStyles = makeStyles(theme => ({
  head: {
    display: 'flex',
    backgroundColor: '#42a5f5',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },  
  head2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  word: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    maxWidth: 800,
    display: 'flex',
    marginTop: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  splitLeft: {
    display: 'flex',
    left: 64,
    flexDirection: 'column',
    height: 'calc(100% - 64px)',
    width: 'calc((100% - 64px) / 2)',
    position: 'fixed',
    zIndex: 1,
    overflowX: 'hidden',
  },
  splitRight: {
    display: 'flex',
    position: 'fixed',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'calc(100% - 64px)',
    width: 'calc((100% - 64px) / 2)',
    zIndex: 1,
    overflowX: 'hidden',
  }
}));

const Resume = (props) => {
  const [doc, setDoc] = useState(resume);
  const classes = useStyles();
  return(
      <Fragment>
        <div className={classes.splitLeft} >
          <div className={classes.head}>
              <Typography color="primary" variant="h2" style={{marginTop: 100}}>Documentataion</Typography>
          </div>
          <div className={classes.head2}>
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
        <div className={classes.splitRight}>
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
