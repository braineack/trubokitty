import React from "react";
import { Link } from "react-router";


export default class Nav extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li className="active">{title}</li>
      </ol>
    );
  }
}
