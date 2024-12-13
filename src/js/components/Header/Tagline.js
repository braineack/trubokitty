import React from "react";


export default class Tagline extends React.Component {
  render() {
    return (
      <div className="tagline">
          <h3>Created with <i className="fa fa-heart"></i> for miataturbo.net members</h3>
          <p className="lead">Made possible by the generous support of:</p>
          <a href="http://www.mkturbo.com" target="_blank">
            <img src="assets/images/MKTURBO_PinkLogo150x30.png" alt="mkturbo.com logo" />
            <span className="sr-only">MKTurbo.com</span>
          </a>
      </div>
    );
  }
}
