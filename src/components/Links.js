
import React from "react";
import { githubIcon, gmailIcon, linkedinIcon } from "../content/images";

const Links = () => (
  <div className="Links">
    <a
      href="mailto:tonyjiaxiangwang@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={gmailIcon} alt="gmail-link" height="30px" width="30px" />
    </a>
    <a
      href="https://github.com/TonyWang666"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={githubIcon} alt="github-link" height="30px" width="30px" />
    </a>
    <a
      href="https://www.linkedin.com/in/jiaixiang-wang-02960913a"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn-link" height="30px" width="30px" />
    </a>
  </div>
);

export default Links;
