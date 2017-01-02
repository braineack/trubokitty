import React from "react";

import Connector9093 from "./Connectors/Connector9093";
import Connector9495 from "./Connectors/Connector9495";
import Connector9900 from "./Connectors/Connector9900";

export default class ConnectorBoard extends React.Component {
  constructor() {
   super();
   this.state = {
     status: "Choose a Wiring Diagram",
     show9093: false,
     show9495: false,
     show9900: false,
   };
 }
 toggle9093() {
    var vis = (this.state.show9093 : false) ? false : true;
    this.setState({show9093:vis, show9495: false, show9900: false,});
 }
 toggle9495() {
    var vis = (this.state.show9495 : false) ? false : true;
    this.setState({show9495:vis, show9093: false, show9900: false,});
 }
 toggle9900() {
     var vis = (this.state.show9900 : false) ? false : true;
     this.setState({show9900:vis, show9495: false, show9093: false,});
  }
  render() {
    return (
      <div className="game-board">
        <h1 className="status">{this.state.status}</h1>
        <button class="btn-primary btn" onClick={this.toggle9093.bind(this)} >90-93</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle9495.bind(this)} >94-95</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle9900.bind(this)} >99-00</button>
        { this.state.show9093 ? <Connector9093 /> : '' }
        { this.state.show9495 ? <Connector9495 /> : '' }
        { this.state.show9900 ? <Connector9900 /> : '' }
      </div>
    );
  }
}
