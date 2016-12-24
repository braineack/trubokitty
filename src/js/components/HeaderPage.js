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
        <h1 className="logo">
            <span className="text-highlight">Trubo</span><span class="text-bold">Kitty</span>
        </h1>
        </div>
        <Nav title={this.props.title} />
      </div>
      </header>
    );
  }
}
