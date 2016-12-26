import React from "react";
import Header from "../components/Header";
import { Link } from "react-router";
import Article from "../components/Articles";
import ArticlesStore from "../stores/ArticlesStore";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "cards-section text-center",
      title: "Getting squirted is easy!",
      pages: ArticlesStore.getAll(),
    };
  }

  render() {
    const { pages } = this.state;
    const Articles = pages.map((page) => {
      return <div key={page.id}><Link to={page.link} params={page.color}><Article {...page} /></Link></div>;
    });
    var siteName = 'truboKitty.com -- Plug & Play Megasquirt ECUs Assembly Guide for 1900-2005 Mazda Miatas'
    document.title = siteName;
    return (
      <div class="landing-page">
        <Header />
        <section className={this.state.style}>
          <div className="container">
            <h2 className="title">{this.state.title}</h2>
            <div className="intro">
            <p>Welcome to TruboKitty.com. This site is dedicated to assist in the assembly of PnP Megasquirt 3x and DIYPNP units for 1990-2005 Mazda Miata installs.  My guides will cover what to order, what tools are required, how to build your megasquirt, all the way through installation and tuning.</p>
            <p>These guides were created from over 10 years of Megasquirt assemblies under my belt, and include all the special tricks and tips that I{"''"}ve learned and ultize myself to this day.</p>
            </div>
            <div class="cards-wrapper row">
            {Articles}
            </div>
          </div>
        </section>
      </div>
    );

  }
}
