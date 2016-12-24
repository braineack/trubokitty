import React from "react";


export default class Logo extends React.Component {
  render() {
    return (
      <h1 className="logo">
          <object type="image/svg+xml" data="assets/images/turbo_kitty.svg" width="30px">
              Your browser does not support SVG
          </object>
          <span className="text-highlight">Trubo</span><span class="text-bold">Kitty</span>
      </h1>
    );
  }
}
