import React from "react";

export default class Center extends React.Component {
  render() {
    return (
      <div class="col-lg-4">
        <div className="board-row">
          {this.renderLabelSquare(22)}
          {this.renderLabelSquare(24)}
          {this.renderLabelSquare(26)}
          {this.renderLabelSquare(28)}
          {this.renderLabelSquare(30)}
          {this.renderLabelSquare(32)}
          {this.renderLabelSquare(34)}
          {this.renderLabelSquare(36)}
        </div>
        <div className="board-row">
          {this.renderTopSquare(22)}
          {this.renderTopSquare(24)}
          {this.renderTopSquare(26)}
          {this.renderTopSquare(28)}
          {this.renderTopSquare(30)}
          {this.renderTopSquare(32)}
          {this.renderTopSquare(34)}
          {this.renderTopSquare(36)}
        </div>
        <div className="board-row">
          {this.renderSquare(22)}
          {this.renderSquare(24)}
          {this.renderSquare(26)}
          {this.renderSquare(28)}
          {this.renderSquare(30)}
          {this.renderSquare(32)}
          {this.renderSquare(34)}
          {this.renderSquare(36)}
        </div>
        <div className="board-row">
          {this.renderSquare(23)}
          {this.renderSquare(25)}
          {this.renderSquare(27)}
          {this.renderSquare(29)}
          {this.renderSquare(31)}
          {this.renderSquare(33)}
          {this.renderSquare(35)}
          {this.renderSquare(37)}
        </div>
        <div className="board-row">
          {this.renderTopSquare(23)}
          {this.renderTopSquare(25)}
          {this.renderTopSquare(27)}
          {this.renderTopSquare(29)}
          {this.renderTopSquare(31)}
          {this.renderTopSquare(33)}
          {this.renderTopSquare(35)}
          {this.renderTopSquare(37)}
        </div>
        <div className="board-row">
          {this.renderLabelSquare(23)}
          {this.renderLabelSquare(25)}
          {this.renderLabelSquare(27)}
          {this.renderLabelSquare(29)}
          {this.renderLabelSquare(31)}
          {this.renderLabelSquare(33)}
          {this.renderLabelSquare(35)}
          {this.renderLabelSquare(37)}
        </div>
      </div>
    );
  }
}
