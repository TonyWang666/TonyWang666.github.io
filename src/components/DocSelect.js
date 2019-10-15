import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";


import { changeResume } from "./../redux/actions/resumeActions";

import resume from "../content/documents";
const options = [
  { value: resume, label: "Resume" },
];

class ResumeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: resume, label: "Resume" }
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.changeResume(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div style={{ width: "500px" }}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { changeResume }
)(ResumeSelect);
