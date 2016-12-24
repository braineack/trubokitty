import React from "react";

export default class Articles extends React.Component {
  render() {
    var color = this.props.color;
    var styles = 'item col-md-4 col-sm-6 col-xs-6 item-' + color;
    const containerHeight = {
      height: "275px"
    };

    return (
      <div className={styles}>
        <div class="item-inner" style={containerHeight}>
          <div class="icon-holder">
            <span aria-hidden="true" class={this.props.icon}></span>
          </div>
          <h3 class="title">{this.props.title}</h3>
          <p class="intro">{this.props.text}</p>
          <p class="intro"><i>{this.props.subtext}</i></p>
        </div>
      </div>
    );
  }
}
