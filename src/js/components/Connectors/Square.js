import React from "react";

export default class Square extends React.Component {
  render(i) {
    return (
      <div className="square">
        {this.props.value}<br />
        {this.props.wirecolor}
      </div>
    );
  }
}
