import React from "react";

export default class Wire extends React.Component {
  render(i) {
    var color = "wire " + this.props.color;
    return (
      <div className={color}>
      </div>
    );
  }
}
