// import React, { Component } from "react";
// import { Select, MenuItem, FormControl } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// // import { connect } from "react-redux";
// // import Select from "react-select";


// // import { changeResume } from "./../redux/actions/resumeActions";
// import {resume, de_anza_transcript, recommendation, UCI_transcript} from "../content/documents"
// // import { DocSelect } from ".";

// const options = [
//   { value: resume, label: 'Resume' },
//   { value: de_anza_transcript, label: 'de_anza_transcript'},
//   { value: recommendation, label: 'recommendation'},
//   { value: UCI_transcript, label: 'UCI_transcript'}

// ];

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const DocSelect = props => {
//   const [doc, setDoc] = useState(resume);
//   return(

//   )
// }

// class DocSelect extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedOption: { value: resume, label: "Resume" }
//     };
//   }

//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//     this.props.changeResume(selectedOption);
//   };

//   render() {
//     const classes = useStyles();
//     const { selectedOption } = this.state;
//     return (
//       <div style={{ width: "500px" }}>
//         <FormControl
//           className={classes.formControl}
//         >
//           <Select
//             labelId="doc-select-label"
//             id="doc-select"
//             value={resume}
//             onChange={this.handleChange}
//           >
//             {options.map((element) =>{
//               return (<MenuItem value={element}>{element.label}</MenuItem>)
//             })}
//           </Select>
//         </FormControl>
//         {/* <Select
//           value={selectedOption}
//           onChange={this.handleChange}
//           options={options}
//         /> */}
//       </div>
//     );
//   }
// }

// export default DocSelect;
// // export default connect(
// //   null,
// //   { changeResume }
// // )(ResumeSelect);
