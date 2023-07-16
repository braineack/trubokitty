import React from "react";
import Header from "../components/Header";
import { Link } from "react-router";
import Article from "../components/Articles";
import ArticlesStore from "../stores/ArticlesStore";
import ImageModal from "../components/Modal";


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
            <p>Welcome to TruboKitty.com. This site is dedicated to assist in the assembly of Plug-and-Play Megasquirt 3x and DIYPNP units for 1990-2005 Mazda Miata installs.  My guides will cover what to order, what tools are required, how to build your megasquirt--all the way through installation and tuning.</p>
            <p>These guides were created from over 10 years and hundreds of Megasquirt assemblies under my belt, and include all the special tricks and tips that I--<strong>Braineack</strong>--learned and utilize myself to this day.</p>
            <p>If you have any questions, find me on miatatubo.net</p>
            </div>
            <div class="links-wrapper mb-3">
            {Articles}
            </div>
            <div className="mtlogo-holder">
              <div><a href="http://www.miataturbo.net" target="_blank"><img className="img-responsive" src="assets/images/logo.png" alt="miatatubo.net logo" /><span className="sr-only">Miataturbo.net</span></a></div>
              <div><a href="https://www.facebook.com/groups/miataturbonet" target="_blank" ><i className="fab fa-facebook"></i><span className="sr-only">Follow Miataturbo.net on Facebook</span></a></div>
            </div>
          </div>
        </section>
      </div>
    );

  }
}
