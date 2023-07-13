import React from "react";
import HeaderPage from "../components/HeaderPage";
import ArticlesStore from "../stores/ArticlesStore";
import DiypnpTable from "../components/DiypnpTable";
import ImageModal from "../components/Modal";
import { Scrollspy } from 'react-scrollspy';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Scrollchor from "react-scrollchor";

export default class Diypnp extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: ArticlesStore.getAll(),
    };
  }
  render() {
    const AffixNav = (
      <AutoAffix viewportOffsetTop={20} container={this}>
        <Scrollspy items={ ['shopping', 'tools', 'assembly'] } currentClassName="active" id="doc-menu" className="nav doc-menu hidden-sm hidden-xs">
            <li><Scrollchor to="#shopping">Shopping List</Scrollchor></li>
            <li><Scrollchor to="#tools">Required Tools</Scrollchor></li>
            <li><Scrollchor to="#assembly">Main PCB Assembly</Scrollchor>
              <Scrollspy items={ ['pcb',] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#pcb">Populating the PCB</Scrollchor></li>
              </Scrollspy>
            </li>
            <li><Scrollchor to="#jumpertable">Jumper Configuration</Scrollchor></li>
            <li><Scrollchor to="#sequential">Adding Seq. Injection</Scrollchor>
              <Scrollspy items={ ['circuit', 'seq',] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#circuit">Sequential Injection Circuit</Scrollchor></li>
                <li><Scrollchor to="#seq">90-93 Sequential Fueling</Scrollchor></li>
              </Scrollspy>
            </li>
        </Scrollspy>
        </AutoAffix>
    );
    const { pages } = this.state;
    var id = this.props.route.path;
    var info = pages.filter(function ( info ) {
      return info.link === id;
    })[0];
    var bodyColor = 'body-' + info.color;
    var siteName = 'truboKitty.com -- '
    document.title = siteName + info.title;
    return (
        <div class={bodyColor}>
          <HeaderPage title={info.title} class={info.color} />
          <div class="doc-wrapper">
            <div class="container">
              <div id="doc-header" class="doc-header text-center">
                <h1 class="doc-title"><span aria-hidden="true" class={info.icon}></span> {info.title}</h1>
                <div class="meta"><i class="fa fa-clock-o"></i>
                 &nbsp; Last updated: July 13th, 2023
                </div>
              </div>

              <div className="doc-body">
                <div className="doc-content">
                  <div className="content-inner">

                    <section id="warning" className="doc-section">
                      <div className="callout-block callout-danger">
                        <div className="icon-holder">
                          <i className="fa fa-exclamation-triangle" />
                        </div>{/*//icon-holder*/}
                        <div className="content">
                          <h4 className="callout-title">Word of Caution:</h4>
                          <p>I don{"'"}t recommend using the DIYPNP for 99+ installs. Not only do they require building a circuit to control the alternator, the number of inputs and outputs in the MS2 software is limiting for all the standard features required to run an NB miata.  Therefore I have only outlined 90-97 installations in this guide.</p>
                        </div>{/*//content*/}
                      </div>{/*//callout-block*/}
                    </section>

                    <section id="shopping" className="doc-section">
                      <h2 className="section-title">Shopping List</h2>
                      <div className="section-block">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>The Megasquirt 3x Kit and required parts to build and install your ECU can all be purchased at <a href="https://www.diyautotune.com/" target="_blank">diyautotune.com</a></p>
                            <ul>
                              <li>DIYPNP Nippon Denso 76 Pin Unassembled Kit</li>
                              <li>MSPNP and DIYPNP IAT Sensor Kit</li>
                            </ul>
                            <h6>For Sequential Injection:</h6>
                            <ul>
                              <li>DIYPNP Upgrade: Sequential Injection Kit</li>
                              <br /><p>Or:</p>
                              <li>(2) VND5N07 FETs</li>
                              <li>(2) 1K ohm 1/4 watt resistors</li>
                              <li>(2) 100K ohm 1/4 watt resistors</li>
                            </ul>
                          </div>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="tools" className="doc-section">
                      <h2 className="section-title">Required Tools</h2>
                      <div className="section-block">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <ul>
                              <li>Soldering Iron with a fine tip</li>
                              <li>Solder (Resin-Core 60/40 .030{'"'})</li>
                              <li>Wire Cutters & Strippers</li>
                              <li>Screwdriver (both flat and phillips )</li>
                              <br /><p>Optional:</p>
                              <li>Desoldering Braid (in case of screwups)</li>
                              <li>Spool of 22-20awg stranded Copper Wire (if provided amount with MS kit not sufficent)</li>
                            </ul>
                          </div>
                        </div>
                        <br />
                        <div className="callout-block callout-info">
                          <div className="icon-holder">
                            <i className="fa fa-info-circle" />
                          </div>{/*//icon-holder*/}
                          <div className="content">
                            <h4 className="callout-title">Pro-tip-of-the-day:</h4>
                            <p>The <a href="https://www.amazon.com/Weller-WLC100-40-Watt-Soldering-Station/dp/B000AS28UC/ref=sr_1_1?s=hi&ie=UTF8&qid=1483283443&sr=1-1&keywords=weller+soldering+iron" target="_blank"> Weller WLC100 40-Watt Soldering Station</a> available at Amazon is a great variable-temperature budget iron that will get the job done.  I highly recommend the <a href="https://www.amazon.com/Weller-ST7-0-03-X0-79-Conical/dp/B000B607OC/ref=sr_1_2?s=hi&ie=UTF8&qid=1483283499&sr=1-2&keywords=weller+tip">ST7 Conical Tip</a> along with it.</p>
                            <p>A <strong>{'"'}Helping Hand Soldering Stand{'"'}</strong> is extremely useful when installing and soldering components on the PCB. They come in all all sorts of configurations and price points.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="assembly" className="doc-section">
                      <h2 className="section-title">Main Printed Circuit Board (PCB) Assembly</h2>
                      <div className="section-block">
                        <p>Not everything provided in theDIYPNP Nippon Denso 76 Pin Unassembled Kit is required to be populated in order to run the MS on your miata. The DIYPNP is designed to install on all sorts of different makes/models/configurations&mdash;you can chose to install it all, or just install what I recommend below.  I personally install the least amount of components required; this will save time and wasted effort.</p>
                      </div>{/*//section-block*/}

                      <div id="pcb" className="section-block">
                        <h3 className="block-title">Populating the PCB</h3>
                        <p>Below is a completed DIYPNP PCB&mdash;this is often referred to as the mainboard.</p>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">
                            <ImageModal img="assets/images/diypnp_component_map.jpg" title="DIYPNP Minimum Components Map" caption="" />
                          </div>
                        </div>
                        <p>The Microsquirt MS2 Module used in the DIYPNP does not have all the required circuits nessecary to run your miata. For example, there is no onboard MAP sensor, so the DIYPNP mainboard provides these nessecary circuits and components to run most modern engines.</p>
                        <p>Pictured is what I consider the standard required to populate on the DIYPNP for any 90-97 installation, but you may choose to install even less.  For exmaple, if you have no need to run boost control on your ECU (circled in green), it does not make sense to install the components. The relays (circled in purple) are also unused in most installations, so you could omit them as well.</p>
                        <p>For more information on the DIYPNP and the circuits available on the mainboard: I recommend reading through the <a href="https://www.diyautotune.com/support/tech/hardware/diypnp/documentation/diypnp-v1-5/" target="_blank">DIYAUTOTUNE.com DIYPNP v1.5 documentation</a>. There you will find more in-depth step-by-step, section-by-section guides to assembling the DIYPNP.</p>
                      </div>{/*//section-block*/}


                    </section>{/*//doc-section*/}

                    <section id="jumpertable" className="doc-section">
                      <h2 className="section-title">DIYPNP Jumper Configuration</h2>
                      <div className="section-block">
                      <p>Once you have completed the mainboard assembly it{"'"}s time to tackle the connector board.  This is what puts the PNP in DIYPNP. Using wire, you bridge the edge connections on the mainboard to the correct pin postion for the harness on the connector board.</p>
                      <p>Select your model year below to view the jumper pinout for your DIYPNP:</p>
                        <DiypnpTable />
                      </div>
                    </section>


                    <section id="sequential" className="doc-section">
                      <h2 className="section-title">Adding Sequential Injection</h2>
                      <div id="circuit" className="section-block">
                      <h3 className="block-title">Sequential Injection Circuit</h3>
                      <p>94+ Miatas are wired standard for Sequential injection, however, the Microsquirt Module only has (2) injector drivers built in.  So we must add an additional (2) injector drivers in order to continue utilizing sequential injection, something I highly recommend.</p>
                      <p>You can buy and install the DIYPNP Upgrade: Sequential Injection Kit, following the directions from DIYAUTOTUNE.com to install it, or build the circuit yourself as outlined below:</p>
                      <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                          <h6>Sequential Injection Circuit Diagram</h6>
                          <p>Built into the proto area of the mainboard, follow the diagram below to build the circuit.</p>
                          <ImageModal img="assets/images/diypnp_sequential.jpg" title="DIYPNP Minimum Components Map" caption="" />
                          <p><strong>Note: </strong>the wires going to (3) and (4) only provide the signal to the matching edge connection pins just above the INJ2 and INJ1 pins. Those jumpers wires still need to connect to the connector board.</p>
                        </div>
                      </div>
                    </div>{/*//section-block*/}

                    <div id="seq" className="section-block">
                      <h3 className="block-title">90-93 Sequential Fueling</h3>
                      <p>The 90-93 1.6L Fuel Injector Harness is wired in batches: Injectors (1 &amp; 3) are paired and Injectors (2 &amp; 4) are paired together respectively. </p>
                      <p>As shown above, the DIYPNP supports sequential injection, however, your 1.6L injector harness needs to be modified in order to run it. This will allow you to drive each injector individually instead of firing two at a time.  This upgrade increases mpg efficiency, increases power output, and allows easier control of larger sized injectors.</p>
                      <p>To perform this upgrade, you will need to modify your injector harness as seen below to remove the batched pairings and run an output to each individual injector.  Two new wires from INJ 3 and INJ 4 from the harness must be run into the engine bay (via the DB15 I/O Pigtail) and the wires on the connector board must be swapped around to ensure the correct outputs go to the correct cylinder.</p>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <h6>Normal DIYPNP Installation</h6>
                          <ImageModal img="assets/images/oe_1_6L_harness_diypnp.png" title="Normal DIYPNP Installation" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <h6>Seq. Fueling Modified DIYPNP Installation</h6>
                          <ImageModal img="assets/images/seq_1_6L_harness_diypnp.png" title="Seq. Fueling Modified DIYPNP Installation" />
                        </div>
                      </div>{/*//row*/}
                      <h6>Firing Order</h6>
                      <pre className=" language-php"><code className=" language-php">You must wire <span className="token constant">INJ</span> A<span className="token punctuation">,</span> B<span className="token punctuation">,</span> C<span className="token punctuation">,</span> <span className="token operator">&amp;</span> D in the firing order<span className="token punctuation">:</span> <span className="token number">1</span><span className="token punctuation">,</span><span className="token number">3</span><span className="token punctuation">,</span><span className="token number">4</span><span className="token punctuation">,</span><span className="token number">2</span><span className="token punctuation">.</span>{"\n"}<span className="token constant">INJ</span> A – Cylinder <span className="token number">1</span>{"\n"}<span className="token constant">INJ</span> B – Cylinder <span className="token number">3</span>{"\n"}<span className="token constant">INJ</span> C – Cylinder <span className="token number">4</span>{"\n"}<span className="token constant">INJ</span> D – Cylinder <span className="token number">2</span>{"\n"}</code></pre>
                    </div>{/*//section-block*/}


                    </section>

                  </div>
                </div>

                <div className="doc-sidebar affix-top">
                  <nav id="nav-doc">
                    {AffixNav}
                  </nav>
                </div>{/*//doc-sidebar*/}

              </div>


            </div>
          </div>
        </div>
    );

  }
}
