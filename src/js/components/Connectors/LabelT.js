import React from "react";

export default class LabelT extends React.Component {
  render(i) {
    return (
      <div className="labelt">
        <b>{this.props.function}</b><br/>
        {this.props.pin}<br/>
        {this.props.output}
      </div>
    );
  }
}
