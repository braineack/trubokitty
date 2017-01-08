import React from "react";

export default class WireT extends React.Component {
  render(i) {
    var color = "wiret " + this.props.color;
    return (
      <div className={color}>
      </div>
    );
  }
}
