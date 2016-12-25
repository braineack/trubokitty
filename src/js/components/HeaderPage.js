import React from "react";

import Logo from "./Header/Logo";
import Nav from "./Header/Nav";
import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Trubo Kitty",
      style: "header",
    };
  }

  render() {
    return (
      <header className={this.state.style}>
      <div className="container">
        <div className="branding">
          <Logo size="24" />
        </div>
        <Nav title={this.props.title} />
      </div>
      </header>
    );
  }
}
