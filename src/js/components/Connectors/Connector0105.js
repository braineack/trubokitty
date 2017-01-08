import React from "react";

import Diagram0105 from "../../stores/Diagram0105";
import Blank from "./Blank";
import BlankT from "./BlankT";
import Square from "./Square";
import SquareT from "./SquareT";
import Spacer from "./Spacer";
import Wire from "./wire";
import WireT from "./wireT";
import Label from "./Label";
import LabelT from "./LabelT";

const diagram = Diagram0105.getAll();

export default class Connector0105 extends React.Component {
  renderSquare(i) {
    return <Square value={diagram[i]["id"]}
                   wirecolor={diagram[i]["wirecolor"]}
                  {...diagram[i]}
                   />;
  }
  renderSquareT(i) {
    return <SquareT value={diagram[i]["id"]}
                    wirecolor={diagram[i]["wirecolor"]}
                    {...diagram[i]}
                   />;
  }
  renderWireSquare(i) {
    return <Wire color={diagram[i]["mscolor"]} />;
  }
  renderTopSquare(i) {
    return <WireT color={diagram[i]["mscolor"]} />;
  }
  renderLabelSquare(i) {
    return <Label function={diagram[i]["function"]}
                  pin={diagram[i]["pin"]}
                  output={diagram[i]["output"]}
                  />;
  }
  renderLabelSquareT(i) {
    return <LabelT function={diagram[i]["function"]}
                  pin={diagram[i]["pin"]}
                  output={diagram[i]["output"]}
                  />;
  }
  renderSpacer() {
    return <Spacer />;
  }
  renderBlank() {
    return <Blank />;
  }
  renderBlankt() {
    return <BlankT />;
  }
  render() {
      return (
        <div>
        <h1>01-05 MS3x Wiring Diagram</h1>
        <div class="row">
          <div class="col-lg-4 topPad">
            <div className="board-row">
              {this.renderLabelSquare(0)}
              {this.renderLabelSquare(3)}
              {this.renderLabelSquare(6)}
              {this.renderLabelSquare(9)}
              {this.renderLabelSquare(11)}
              {this.renderLabelSquare(14)}
            </div>
            <div className="board-row">
              {this.renderWireSquare(0)}
              {this.renderWireSquare(3)}
              {this.renderWireSquare(6)}
              {this.renderWireSquare(9)}
              {this.renderWireSquare(11)}
              {this.renderWireSquare(14)}
            </div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(3)}
              {this.renderSquare(6)}
              {this.renderSquare(9)}
              {this.renderSquare(11)}
              {this.renderSquare(14)}
            </div>
            <div className="board-row">
              {this.renderSquare(1)}
              {this.renderSquare(4)}
              {this.renderSquare(7)}
              {this.renderSquare(10)}
              {this.renderSquare(12)}
              {this.renderSquare(15)}
            </div>
            <div className="board-row">
              {this.renderSquare(2)}
              {this.renderSquare(5)}
              {this.renderSquare(8)}
              {this.renderBlank()}
              {this.renderSquare(13)}
              {this.renderSquare(16)}
            </div>
            <div className="board-row">
              {this.renderWireSquare(2)}
              {this.renderWireSquare(1)}
              {this.renderWireSquare(8)}
              {this.renderWireSquare(10)}
              {this.renderWireSquare(12)}
              {this.renderWireSquare(15)}
            </div>
            <div className="board-row">
              {this.renderLabelSquare(2)}
              {this.renderLabelSquare(1)}
              {this.renderLabelSquare(8)}
              {this.renderLabelSquare(10)}
              {this.renderLabelSquare(12)}
              {this.renderLabelSquare(15)}
            </div>
          </div>
          <div class="col-lg-6 topPad">
            <div className="board-row">
              {this.renderLabelSquareT(17)}
              {this.renderLabelSquareT(20)}
              {this.renderBlankt()}
              {this.renderLabelSquareT(25)}
              {this.renderLabelSquareT(28)}
              {this.renderLabelSquareT(31)}
              {this.renderLabelSquareT(35)}
              {this.renderLabelSquareT(38)}
            </div>
            <div className="board-row">
              {this.renderTopSquare(17)}
              {this.renderTopSquare(20)}
              {this.renderBlankt()}
              {this.renderTopSquare(25)}
              {this.renderTopSquare(28)}
              {this.renderTopSquare(31)}
              {this.renderTopSquare(35)}
              {this.renderTopSquare(38)}
            </div>
            <div className="board-row">
              {this.renderSquareT(17)}
              {this.renderSquareT(20)}
              {this.renderBlankt()}
              {this.renderSquareT(25)}
              {this.renderSquareT(28)}
              {this.renderSquareT(31)}
              {this.renderSquareT(35)}
              {this.renderSquareT(38)}
            </div>
            <div className="board-row">
              {this.renderSquare(18)}
              {this.renderSquare(21)}
              {this.renderSquare(23)}
              {this.renderSquare(26)}
              {this.renderSquare(29)}
              {this.renderSquare(32)}
              {this.renderSquare(33)}
              {this.renderSquare(36)}
              {this.renderSquare(39)}
            </div>
            <div className="board-row">
              {this.renderSquare(19)}
              {this.renderSquare(22)}
              {this.renderSquare(24)}
              {this.renderSquare(27)}
              {this.renderSquare(30)}
              {this.renderBlank()}
              {this.renderSquare(34)}
              {this.renderSquare(37)}
              {this.renderSquare(40)}
            </div>
            <div className="board-row">
              {this.renderWireSquare(18)}
              {this.renderWireSquare(22)}
              {this.renderWireSquare(24)}
              {this.renderWireSquare(27)}
              {this.renderWireSquare(30)}
              {this.renderBlank()}
              {this.renderWireSquare(34)}
              {this.renderWireSquare(36)}
              {this.renderWireSquare(39)}
            </div>
            <div className="board-row">
              {this.renderLabelSquare(18)}
              {this.renderLabelSquare(22)}
              {this.renderLabelSquare(24)}
              {this.renderLabelSquare(27)}
              {this.renderLabelSquare(30)}
              {this.renderBlank()}
              {this.renderLabelSquare(34)}
              {this.renderLabelSquare(36)}
              {this.renderLabelSquare(39)}
            </div>
          </div>
          <div class="col-lg-6 topPad">
            <div className="board-row">
              {this.renderLabelSquareT(41)}
              {this.renderLabelSquareT(44)}
              {this.renderBlank()}
              {this.renderLabelSquareT(51)}
              {this.renderLabelSquareT(54)}
              {this.renderLabelSquareT(56)}
              {this.renderLabelSquareT(60)}
              {this.renderLabelSquareT(63)}
              {this.renderLabelSquareT(66)}
              {this.renderLabelSquareT(69)}
            </div>
            <div className="board-row">
              {this.renderTopSquare(41)}
              {this.renderTopSquare(44)}
              {this.renderBlank()}
              {this.renderTopSquare(51)}
              {this.renderTopSquare(54)}
              {this.renderTopSquare(56)}
              {this.renderTopSquare(60)}
              {this.renderTopSquare(63)}
              {this.renderTopSquare(66)}
              {this.renderTopSquare(69)}
            </div>
            <div className="board-row">
              {this.renderSquareT(41)}
              {this.renderSquareT(44)}
              {this.renderBlank()}
              {this.renderSquareT(51)}
              {this.renderSquareT(54)}
              {this.renderSquareT(56)}
              {this.renderSquareT(59)}
              {this.renderSquareT(63)}
              {this.renderSquareT(66)}
              {this.renderSquareT(69)}
            </div>
            <div className="board-row">
              {this.renderSquare(42)}
              {this.renderSquare(45)}
              {this.renderSquare(47)}
              {this.renderSquare(49)}
              {this.renderSquare(52)}
              {this.renderSquare(55)}
              {this.renderSquare(57)}
              {this.renderSquare(60)}
              {this.renderSquare(62)}
              {this.renderSquare(64)}
              {this.renderSquare(67)}
              {this.renderSquare(70)}
            </div>
            <div className="board-row">
              {this.renderSquare(43)}
              {this.renderSquare(46)}
              {this.renderSquare(48)}
              {this.renderSquare(50)}
              {this.renderSquare(53)}
              {this.renderBlank()}
              {this.renderSquare(58)}
              {this.renderSquare(61)}
              {this.renderBlank()}
              {this.renderSquare(65)}
              {this.renderSquare(68)}
              {this.renderSquare(71)}
            </div>
            <div className="board-row">
              {this.renderWireSquare(43)}
              {this.renderWireSquare(46)}
              {this.renderWireSquare(48)}
              {this.renderWireSquare(52)}
              {this.renderWireSquare(53)}
              {this.renderWireSquare(55)}
              {this.renderWireSquare(58)}
              {this.renderWireSquare(61)}
              {this.renderWireSquare(62)}
              {this.renderWireSquare(65)}
              {this.renderWireSquare(68)}
              {this.renderWireSquare(71)}
            </div>
            <div className="board-row">
              {this.renderLabelSquare(43)}
              {this.renderLabelSquare(46)}
              {this.renderLabelSquare(48)}
              {this.renderLabelSquare(52)}
              {this.renderLabelSquare(53)}
              {this.renderLabelSquare(55)}
              {this.renderLabelSquare(58)}
              {this.renderLabelSquare(61)}
              {this.renderLabelSquare(62)}
              {this.renderLabelSquare(65)}
              {this.renderLabelSquare(68)}
              {this.renderLabelSquare(71)}
            </div>
          </div>
        </div>
        </div>

      );
  }
}
