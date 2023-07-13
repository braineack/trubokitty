import React from "react";

import Diagram9697 from "../../stores/Diagram9697";

const diagram = Diagram9697.getAll();

export default class Table9697 extends React.Component {
  constructor() {
    super()
    this.state = {
      view: "all",
    };
  }

  getMS() {
    this.setState({view: "MS"});
  }
  getAll() {
    this.setState({view: "all"});
  }
  getX() {
    this.setState({view: "X"});
  }

  render() {
    if (this.state.view === "all") {
      var Pinout = diagram.map((pin) => {
        if (pin.function) {
          return <tr key={pin.id}><td class="text-center">{pin.id}</td><td>{pin.fullfunction}</td><td>{pin.pin}</td><td>{pin.fullcolor}</td></tr>;
        }
      });
    } else if (this.state.view === "MS") {
      var Pinout = diagram.map((pin) => {
        if (pin.pin.includes("MS")) {
          return <tr key={pin.id}><td class="text-center">{pin.id}</td><td>{pin.fullfunction}</td><td>{pin.pin}</td><td>{pin.fullcolor}</td></tr>;
        }
      });
    } else if (this.state.view === "X") {
      var Pinout = diagram.map((pin) => {
        if (pin.pin.includes("X")) {
          return <tr key={pin.id}><td class="text-center">{pin.id}</td><td>{pin.fullfunction}</td><td>{pin.pin}</td><td>{pin.fullcolor}</td></tr>;
        }
      });
    }
      return (
        <div class="row">
          <div class="col-lg-12 topPad">
            <h3>Pinout</h3>
          </div>
          <div class="col-lg-12 buttons-row">
            <button class="btn-primary btn" onClick={this.getMS.bind(this)}>Show only PCB Pins</button>&nbsp;
            <button class="btn-primary btn" onClick={this.getX.bind(this)}>Show only Expander Pins</button>&nbsp;
            <button class="btn-primary btn" onClick={this.getAll.bind(this)}>Show All Pins</button>&nbsp;
          </div>
          <div class="col-lg-9 topPad">
            <table class="table table-striped table-hover topPad">
              <thead>
                <tr>
                  <th class="text-center">Connector Pin</th>
                  <th>Function</th>
                  <th>DB37 Pin</th>
                  <th>Wire Color</th>
                </tr>
              </thead>
              <tbody>
                { Pinout }
              </tbody>
            </table>
          </div>
        </div>

      );
  }
}
