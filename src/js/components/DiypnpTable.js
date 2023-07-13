import React from "react";

import DiyPNPDiagram from "../stores/Diypnp9097"

export default class DiypnpTable extends React.Component {
  constructor() {
   super();
   var empty = [{pin:'', id:'', in:'', out:''}];
   this.state = {
     diagram: Array(34).fill(empty),
   };
 }

 get9093() {
   this.setState({diagram: DiyPNPDiagram.get9093(), status: "90-93 Mazda Miata DIYPNP" });
 }
 get9495() {
   this.setState({diagram: DiyPNPDiagram.get9495(), status: "94-95 Mazda Miata DIYPNP"});
 }
 get9697() {
   this.setState({diagram: DiyPNPDiagram.get9697(), status: "96-97 Mazda Miata DIYPNP"});
 }
 //diyValue(i) {
//   return {diag[i]["pin"]};
// }
  render() {
    return (
      <div>

        <button class="btn-primary btn" onClick={this.get9093.bind(this)} >90-93</button>&nbsp;
        <button class="btn-primary btn" onClick={this.get9495.bind(this)} >94-95</button>&nbsp;
        <button class="btn-primary btn" onClick={this.get9697.bind(this)} >96-97</button>&nbsp;

        <table class="table table-hover  topPad">
          <thead>
            <tr>
              <th colSpan={5}>{this.state.status}</th>
            </tr>
          </thead>

          <tbody>
          <tr>
            <th colSpan={2}>Connector Pins</th>
            <th colSpan={3}>Pull-up Jumpers</th>
          </tr>
          <tr>
            <th width={"25%"}>Main Board</th>
            <th width={"25%"}>Connector Board</th>
            <th width={"16%"}>Pin</th>
            <th width={"16%"}>Component</th>
            <th width={"16%"}>Voltage</th>
          </tr>
          <tr>
            <td class="success">AIT</td>
            <td class="success">{this.state.diagram[0].pin}</td>
            <td class="info">IAC</td>
            <td class="info">Diode</td>
            <td class="info">Banded side to 12v</td>
          </tr>
          <tr>
            <td class="success">CLT</td>
            <td class="success">{this.state.diagram[1].pin}</td>
            <td class="info">VR2</td>
            <td class="info">470ohm</td>
            <td class="info">5v</td>
          </tr>
          <tr>
            <td class="success">TPS SIG</td>
            <td class="success">{this.state.diagram[2].pin}</td>
            <td class="info">OPTO+</td>
            <td class="info">470ohm</td>
            <td class="info">12v</td>
          </tr>
          <tr>
            <td class="success">O2</td>
            <td class="success">{this.state.diagram[3].pin}</td>
            <td class="info">WLED</td>
            <td class="info"></td>
            <td class="info"></td>
          </tr>
          <tr>
            <td class="success">VR IN +</td>
            <td class="success">{this.state.diagram[4].pin}</td>
            <td class="info">ALED</td>
            <td class="info"></td>
            <td class="info"></td>
          </tr>
          <tr>
            <td class="success">VR IN -</td>
            <td class="success">{this.state.diagram[5].pin}</td>
            <th colSpan={3}>I/O Circuits</th>
          </tr>
          <tr>
            <td class="success">OPTO IN +</td>
            <td class="success">{this.state.diagram[6].pin}</td>
            <th>Pin</th>
            <th>IN</th>
            <th>OUT</th>
          </tr>
          <tr>
            <td class="success">OPTO IN -</td>
            <td class="success">{this.state.diagram[7].pin}</td>
            <td class="warning">Relay 1</td>
            <td class="warning"></td>
            <td class="warning"></td>
          </tr>
          <tr>
            <td class="success">VR2 IN +</td>
            <td class="success">{this.state.diagram[8].pin}</td>
            <td class="warning">Relay 2</td>
            <td class="warning"></td>
            <td class="warning"></td>
          </tr>
          <tr>
            <td class="success">IAC</td>
            <td class="success">{this.state.diagram[9].pin}</td>
            <td class="warning">Input 1 (A/C)</td>
            <td class="warning">{this.state.diagram[29].in}</td>
            <td class="warning">{this.state.diagram[29].out}</td>
          </tr>
          <tr>
            <td class="success">TACH OUT</td>
            <td class="success">{this.state.diagram[10].pin}</td>
            <td class="warning">Input 2 (Clutch)</td>
            <td class="warning">{this.state.diagram[30].in}</td>
            <td class="warning">{this.state.diagram[30].out}</td>
          </tr>
          <tr>
            <td class="success">FUEL PUMP</td>
            <td class="success">{this.state.diagram[11].pin}</td>
            <td class="warning">Boost</td>
            <td class="warning">{this.state.diagram[31].in}</td>
            <td class="warning">{this.state.diagram[31].out}</td>
          </tr>
          <tr>
            <td class="success">INJ 2</td>
            <td class="success">{this.state.diagram[12].pin}</td>
            <td class="warning"></td>
            <td class="warning"></td>
            <td class="warning"></td>
          </tr>
          <tr>
            <td class="success">INJ 1</td>
            <td class="success">{this.state.diagram[13].pin}</td>
            <th colSpan={3}>Sequential Injection Wiring</th>
          </tr>
          <tr>
            <td class="success">12V</td>
            <td class="success">{this.state.diagram[14].pin}</td>
            <th >Injector</th>
            <th colSpan={2}>Connector Board</th>
          </tr>
          <tr>
            <td class="success">12v</td>
            <td class="success">{this.state.diagram[15].pin}</td>
            <td class="danger">INJ 1</td>
            <td class="danger" colSpan={2}>{this.state.diagram[32].inj1}</td>
          </tr>
          <tr>
            <td class="success">12v</td>
            <td class="success">{this.state.diagram[16].pin}</td>
            <td class="danger">INJ 2</td>
            <td class="danger" colSpan={2}>{this.state.diagram[32].inj2}</td>
          </tr>
          <tr>
            <td class="success">5VREF</td>
            <td class="success">{this.state.diagram[17].pin}</td>
            <td class="danger">INJ 3</td>
            <td class="danger" colSpan={2}>{this.state.diagram[32].inj3}</td>
          </tr>
          <tr>
            <td class="success">5v</td>
            <td class="success">{this.state.diagram[18].pin}</td>
            <td class="danger">INJ 4</td>
            <td class="danger" colSpan={2}>{this.state.diagram[32].inj4}</td>
          </tr>
          <tr>
            <td class="success">SG</td>
            <td class="success">{this.state.diagram[19].pin}</td>
            <th colSpan={3}>Notes</th>
          </tr>
          <tr>
            <td class="success">SG</td>
            <td class="success">{this.state.diagram[20].pin}</td>
            <td  colSpan={3} rowSpan={9}>{this.state.diagram[33].note}</td>
          </tr>
          <tr>
            <td class="success">GND</td>
            <td class="success">{this.state.diagram[21].pin}</td>

          </tr>
          <tr>
            <td class="success">GND</td>
            <td class="success">{this.state.diagram[22].pin}</td>

          </tr>
          <tr>
            <td class="success">GND</td>
            <td class="success">{this.state.diagram[23].pin}</td>

          </tr>
          <tr>
            <td class="success">GND</td>
            <td class="success">{this.state.diagram[24].pin}</td>

          </tr>
          <tr>
            <td class="success">IGN1</td>
            <td class="success">{this.state.diagram[25].pin}</td>

          </tr>
          <tr>
            <td class="success">IGN2</td>
            <td class="success">{this.state.diagram[26].pin}</td>

          </tr>
          <tr>
            <td class="success">WLED</td>
            <td class="success">{this.state.diagram[27].pin}</td>

          </tr>
          <tr>
            <td class="success">ALED</td>
            <td class="success">{this.state.diagram[28].pin}</td>

          </tr>

          </tbody>
        </table>
      </div>



    );
  }
}
