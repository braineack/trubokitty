import React from "react";

import Connector9093 from "./Connectors/Connector9093";
import Connector9495 from "./Connectors/Connector9495";
import Connector9697 from "./Connectors/Connector9697";
import Connector9900 from "./Connectors/Connector9900";
import Connector0105 from "./Connectors/Connector0105";
import ConnectorMSM from "./Connectors/ConnectorMSM";

export default class ConnectorBoard extends React.Component {
  constructor() {
   super();
   this.state = {
     status: "Choose a Wiring Diagram",
     show9093: false,
     show9495: false,
     show9697: false,
     show9900: false,
     show0105: false,
     showMSM: false,
   };
 }
 toggle9093() {
    var vis = (this.state.show9093 : false) ? false : true;
    this.setState({show9093:vis, show9495: false, show9697: false, show9900: false, show0105: false, showMSM: false,});
 }
 toggle9495() {
    var vis = (this.state.show9495 : false) ? false : true;
    this.setState({show9495:vis, show9093: false, show9697: false, show9900: false, show0105: false, showMSM: false,});
 }
 toggle9697() {
     var vis = (this.state.show9697 : false) ? false : true;
     this.setState({show9697:vis, show9495: false, show9093: false, show9900: false, show0105: false, showMSM: false,});
  }
 toggle9900() {
     var vis = (this.state.show9900 : false) ? false : true;
     this.setState({show9900:vis, show9495: false, show9697: false, show9093: false, show0105: false, showMSM: false,});
  }
  toggle0105() {
      var vis = (this.state.show0105 : false) ? false : true;
      this.setState({show0105:vis, show9900: false, show9495: false, show9697: false, show9093: false, showMSM: false,});
  }
  toggleMSM() {
      var vis = (this.state.showMSM : false) ? false : true;
      this.setState({showMSM: vis, show0105: false, show9900: false, show9495: false, show9697: false, show9093: false,});
  }
  render() {
    return (
      <div className="game-board">
        <h1 className="status">{this.state.status}</h1>
        <button class="btn-primary btn" onClick={this.toggle9093.bind(this)} >90-93</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle9495.bind(this)} >94-95</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle9697.bind(this)} >96-97</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle9900.bind(this)} >99-00</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggle0105.bind(this)} >01-05</button>&nbsp;
        <button class="btn-primary btn" onClick={this.toggleMSM.bind(this)} >MSM</button>&nbsp;
        { this.state.show9093 ? <Connector9093 /> : '' }
        { this.state.show9495 ? <Connector9495 /> : '' }
        { this.state.show9697 ? <Connector9697 /> : '' }
        { this.state.show9900 ? <Connector9900 /> : '' }
        { this.state.show0105 ? <Connector0105 /> : '' }
        { this.state.showMSM ? <ConnectorMSM /> : '' }

      </div>
    );
  }
}
