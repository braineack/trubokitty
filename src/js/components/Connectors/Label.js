import React from "react";

export default class Label extends React.Component {
  render(i) {
    return (
      <div className="label">
        <b>{this.props.function}</b><br/>
        {this.props.pin}<br/>
        {this.props.output}
      </div>
    );
  }
}
