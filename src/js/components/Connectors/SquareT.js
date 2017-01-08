import React from "react";

export default class SquareT extends React.Component {
  render(i) {
    var color = "squaret " + this.props.squarecolor;
    return (
      <div className={color}>
        {this.props.value}<br />
        {this.props.wirecolor}
      </div>
    );
  }
}
