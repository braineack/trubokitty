import React from "react";

import Logo from "./Header/Logo";
import Tagline from "./Header/Tagline";
import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Trubo Kitty",
      style: "header text-center",
    };
  }

  render() {
    return (
      <header className={this.state.style}>
      <div className="container">
        <div className="branding">
          <Logo />
        </div>
        <Tagline />
      </div>
      </header>
    );
  }
}
