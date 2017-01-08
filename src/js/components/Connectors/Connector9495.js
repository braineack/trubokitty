import React from "react";

import Diagram9495 from "../../stores/Diagram9495";
import Square from "./Square";
import Spacer from "./Spacer";
import Wire from "./wire";
import Label from "./Label";
import Table9495 from "./Table9495";

const diagram = Diagram9495.getAll();

export default class Connector9495 extends React.Component {
  renderSquare(i) {
    return <Square value={diagram[i]["id"]}
                   wirecolor={diagram[i]["wirecolor"]}
                   {...diagram[i]}
                   />;
  }
  renderTopSquare(i) {
    return <Wire color={diagram[i]["mscolor"]} />;
  }
  renderLabelSquare(i) {
    return <Label function={diagram[i]["function"]}
                  pin={diagram[i]["pin"]}
                  output={diagram[i]["output"]}
                  />;
  }
  renderSpacer() {
    return <Spacer />;
  }
  render() {
      return (
        <div>
        <h1>94-95 MS3x Wiring Diagram</h1>
          <div class="row">
            <div class="col-lg-5 zoom topPad">
              <div className="board-row">
                {this.renderLabelSquare(0)}
                {this.renderLabelSquare(2)}
                {this.renderSpacer()}
                {this.renderLabelSquare(4)}
                {this.renderLabelSquare(6)}
                {this.renderLabelSquare(8)}
                {this.renderLabelSquare(10)}
                {this.renderLabelSquare(12)}
                {this.renderLabelSquare(14)}
                {this.renderLabelSquare(16)}
                {this.renderLabelSquare(18)}
                {this.renderSpacer()}
                {this.renderLabelSquare(20)}
              </div>
              <div className="board-row">
                {this.renderTopSquare(0)}
                {this.renderTopSquare(2)}
                {this.renderSpacer()}
                {this.renderTopSquare(4)}
                {this.renderTopSquare(6)}
                {this.renderTopSquare(8)}
                {this.renderTopSquare(10)}
                {this.renderTopSquare(12)}
                {this.renderTopSquare(14)}
                {this.renderTopSquare(16)}
                {this.renderTopSquare(18)}
                {this.renderSpacer()}
                {this.renderTopSquare(20)}
              </div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(2)}
                {this.renderSpacer()}
                {this.renderSquare(4)}
                {this.renderSquare(6)}
                {this.renderSquare(8)}
                {this.renderSquare(10)}
                {this.renderSquare(12)}
                {this.renderSquare(14)}
                {this.renderSquare(16)}
                {this.renderSquare(18)}
                {this.renderSpacer()}
                {this.renderSquare(20)}
              </div>
              <div className="board-row">
                {this.renderSquare(1)}
                {this.renderSquare(3)}
                {this.renderSpacer()}
                {this.renderSquare(5)}
                {this.renderSquare(7)}
                {this.renderSquare(9)}
                {this.renderSquare(11)}
                {this.renderSquare(13)}
                {this.renderSquare(15)}
                {this.renderSquare(17)}
                {this.renderSquare(19)}
                {this.renderSpacer()}
                {this.renderSquare(21)}
              </div>
              <div className="board-row">
                {this.renderTopSquare(1)}
                {this.renderTopSquare(3)}
                {this.renderSpacer()}
                {this.renderTopSquare(5)}
                {this.renderTopSquare(7)}
                {this.renderTopSquare(9)}
                {this.renderTopSquare(11)}
                {this.renderTopSquare(13)}
                {this.renderTopSquare(15)}
                {this.renderTopSquare(17)}
                {this.renderTopSquare(19)}
                {this.renderSpacer()}
                {this.renderTopSquare(21)}
              </div>
              <div className="board-row">
                {this.renderLabelSquare(1)}
                {this.renderLabelSquare(3)}
                {this.renderSpacer()}
                {this.renderLabelSquare(5)}
                {this.renderLabelSquare(7)}
                {this.renderLabelSquare(9)}
                {this.renderLabelSquare(11)}
                {this.renderLabelSquare(13)}
                {this.renderLabelSquare(15)}
                {this.renderLabelSquare(17)}
                {this.renderLabelSquare(19)}
                {this.renderSpacer()}
                {this.renderLabelSquare(21)}
              </div>
            </div>
            <div class="col-lg-6 zoom topPad">
              <div className="board-row">
                {this.renderLabelSquare(22)}
                {this.renderLabelSquare(24)}
                {this.renderSpacer()}
                {this.renderLabelSquare(26)}
                {this.renderLabelSquare(28)}
                {this.renderLabelSquare(30)}
                {this.renderLabelSquare(32)}
                {this.renderLabelSquare(34)}
                {this.renderLabelSquare(36)}
                {this.renderLabelSquare(38)}
                {this.renderLabelSquare(40)}
                {this.renderSpacer()}
                {this.renderLabelSquare(42)}
                {this.renderLabelSquare(44)}
                {this.renderLabelSquare(46)}
              </div>
              <div className="board-row">
                {this.renderTopSquare(22)}
                {this.renderTopSquare(24)}
                {this.renderSpacer()}
                {this.renderTopSquare(26)}
                {this.renderTopSquare(28)}
                {this.renderTopSquare(30)}
                {this.renderTopSquare(32)}
                {this.renderTopSquare(34)}
                {this.renderTopSquare(36)}
                {this.renderTopSquare(38)}
                {this.renderTopSquare(40)}
                {this.renderSpacer()}
                {this.renderTopSquare(42)}
                {this.renderTopSquare(44)}
                {this.renderTopSquare(46)}
              </div>
              <div className="board-row">
                {this.renderSquare(22)}
                {this.renderSquare(24)}
                {this.renderSpacer()}
                {this.renderSquare(26)}
                {this.renderSquare(28)}
                {this.renderSquare(30)}
                {this.renderSquare(32)}
                {this.renderSquare(34)}
                {this.renderSquare(36)}
                {this.renderSquare(38)}
                {this.renderSquare(40)}
                {this.renderSpacer()}
                {this.renderSquare(42)}
                {this.renderSquare(44)}
                {this.renderSquare(46)}
              </div>
              <div className="board-row">
                {this.renderSquare(23)}
                {this.renderSquare(25)}
                {this.renderSpacer()}
                {this.renderSquare(27)}
                {this.renderSquare(29)}
                {this.renderSquare(31)}
                {this.renderSquare(33)}
                {this.renderSquare(35)}
                {this.renderSquare(37)}
                {this.renderSquare(39)}
                {this.renderSquare(41)}
                {this.renderSpacer()}
                {this.renderSquare(43)}
                {this.renderSquare(45)}
                {this.renderSquare(47)}
              </div>
              <div className="board-row">
                {this.renderTopSquare(23)}
                {this.renderTopSquare(25)}
                {this.renderSpacer()}
                {this.renderTopSquare(27)}
                {this.renderTopSquare(29)}
                {this.renderTopSquare(31)}
                {this.renderTopSquare(33)}
                {this.renderTopSquare(35)}
                {this.renderTopSquare(37)}
                {this.renderTopSquare(39)}
                {this.renderTopSquare(41)}
                {this.renderSpacer()}
                {this.renderTopSquare(43)}
                {this.renderTopSquare(45)}
                {this.renderTopSquare(47)}
              </div>
              <div className="board-row">
                {this.renderLabelSquare(23)}
                {this.renderLabelSquare(25)}
                {this.renderSpacer()}
                {this.renderLabelSquare(27)}
                {this.renderLabelSquare(29)}
                {this.renderLabelSquare(31)}
                {this.renderLabelSquare(33)}
                {this.renderLabelSquare(35)}
                {this.renderLabelSquare(37)}
                {this.renderLabelSquare(39)}
                {this.renderLabelSquare(41)}
                {this.renderSpacer()}
                {this.renderLabelSquare(43)}
                {this.renderLabelSquare(45)}
                {this.renderLabelSquare(47)}
              </div>
            </div>
          </div>
          <Table9495 />
        </div>

      );
  }
}
