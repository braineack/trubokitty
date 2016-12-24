import React from "react";

import Footer from "./Footer";
import Index from "../pages/Index";


export default class Layout extends React.Component {
  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
