import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a 
          className="button is-primary"
          href="/files/BDResume.pdf" download
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>MongoDB, Express.js, React.hs, Node.js (MERN)</li>
            <li>Git</li>
            <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;