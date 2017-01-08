import React from "react";

import Diagram9495 from "../../stores/Diagram9495";

const diagram = Diagram9495.getAll();
const Pinout = diagram.map((pin) => {
  if (pin.function === '') {
    return false;
  } else {
    return <tr key={pin.id}><td class="text-center">{pin.id}</td><td>{pin.fullfunction}</td><td>{pin.pin}</td><td>{pin.fullcolor}</td></tr>;
  }
});

export default class Table9495 extends React.Component {
  render() {
      return (
        <div class="col-lg-9 topPad">
          <table class="table table-striped table-hover">
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

      );
  }
}
