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
        <div className="mk-pre-footer">
          <a href="http://www.mkturbo.com" target="_blank"><img src="assets/images/MKTURBO_PinkLogo150x30.png" alt="mkturbo.com logo" /><span className="sr-only">MKTurbo.com</span></a>
        </div>
        <small className="copyright"><i class="fa fa-copyright"></i> 2007-{this.state.year} Brainwerks Enterprises. All Rights Reserved.</small>
      </footer>
    );
  }
}
