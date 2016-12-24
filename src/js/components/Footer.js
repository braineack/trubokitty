import React from "react";
const currentYear = require("current-year");

export default class Footer extends React.Component {

  constructor() {
    super();
    this.state = {
      style: "footer text-center",
      year: currentYear(),
    };
  }

  render() {

    return (
      <footer className={this.state.style}>
        <small className="copyright"><i class="fa fa-copyright"></i> 2007-{this.state.year} Brainwerks Enterprises. All Rights Reserved.</small>
      </footer>
    );
  }
}
