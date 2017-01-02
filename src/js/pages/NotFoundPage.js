import React from "react";
import HeaderPage from "../components/HeaderPage";
import ArticlesStore from "../stores/ArticlesStore";

export default class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: ArticlesStore.getAll(),
    };
  }
  render() {
    const { pages } = this.state;
    var id = this.props.route.path;
    var info = pages.filter(function ( info ) {
      return info.link === id;
    })[0];
    var bodyColor = 'body-' + info.color;
    return (
        <div class={bodyColor}>
          <HeaderPage title={info.title} class={info.color} />
          <div class="doc-wrapper">
            <div class="container">
              <div id="doc-header" class="doc-header text-center">
                <h1 class="doc-title"><span aria-hidden="true" class={info.icon}></span> {info.title}</h1>
                <div class="meta"><i class="fa fa-clock-o"></i>
                 &nbsp; Last updated: Dec 28th, 2016
                </div>
                <div className="not-found">
                <h1>404</h1>
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
