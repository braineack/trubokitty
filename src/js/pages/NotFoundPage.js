import React from "react";
import HeaderPage from "../components/HeaderPage";
import { Link } from "react-router";

export default class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "404",
      icon: "fa fa-eye-slash icon",
      color: "pink"
    };
  }
  render() {
    const { pages } = this.state;
    var id = this.props.route.path;
    var bodyColor = 'body-pink';
    return (
        <div class={bodyColor}>
          <HeaderPage title={this.state.title} class={this.state.color} />
          <div class="doc-wrapper">
            <div class="container">
              <div id="doc-header" class="doc-header text-center">
                <h1 class="doc-title"><span aria-hidden="true" class={this.state.icon}></span> {this.state.title}</h1>
                <div className="not-found">
                <div className="screenshot-holder">
                  <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                      <Link to="/"><img className="img-responsive thumbnail" src="assets/images/404.jpg" alt="Lost Cat" /></Link>
                    </div>
                  </div>
                </div>
                <p>
                <Link to="/">Go Back to the main page</Link>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );

  }
}
