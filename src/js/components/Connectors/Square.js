import React from "react";

export default class Square extends React.Component {
  render(i) {
    var color = "square " + this.props.squarecolor;
    return (
      <div className={color}>
        {this.props.value}<br />
        {this.props.wirecolor}
      </div>
    );
  }
}
