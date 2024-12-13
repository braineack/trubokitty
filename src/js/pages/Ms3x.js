import React from "react";

import HeaderPage from "../components/HeaderPage";
import ArticlesStore from "../stores/ArticlesStore";
import ConnectorBoard from "../components/ConnectorBoard";
import { Scrollspy } from 'react-scrollspy';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Scrollchor from "react-scrollchor";
import ImageModal from "../components/Modal";

export default class Ms3x extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: ArticlesStore.getAll(),
    };
  }

  render() {
    const AffixNav = (
      <AutoAffix viewportOffsetTop={20} container={this}>
        <Scrollspy items={ ['shopping', 'tools', 'assembly', 'nuances'] } currentClassName="active" id="doc-menu" className="nav doc-menu hidden-sm hidden-xs">
            <li><Scrollchor to="#shopping">Shopping List</Scrollchor></li>
            <li><Scrollchor to="#tools">Required Tools</Scrollchor></li>
            <li><Scrollchor to="#assembly">Main PCB Assembly</Scrollchor>
              <Scrollspy items={ ['pcb', 'resist', 'integrated', 'transistors', 'jumpers', 'daughterboard', 'expanderboard'] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#pcb">Populating the PCB</Scrollchor></li>
                <li><Scrollchor to="#resist">Resistors, capacitors, diodes</Scrollchor></li>
                <li><Scrollchor to="#integrated">Integrated circuits</Scrollchor></li>
                <li><Scrollchor to="#transistors">Transistors</Scrollchor></li>
                <li><Scrollchor to="#jumpers">Jumpers</Scrollchor></li>
                <li><Scrollchor to="#daughterboard">CPU Daughterboard</Scrollchor></li>
                <li><Scrollchor to="#expanderboard">Expander Board</Scrollchor></li>
              </Scrollspy>
            </li>
            <li><Scrollchor to="#harness">Patch Harness Assembly</Scrollchor>
              <Scrollspy items={ ['db37', 'ecu_connector', 'wiring'] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#db37">DB37 Connectors</Scrollchor></li>
                <li><Scrollchor to="#ecu_connector">ECU Connector</Scrollchor></li>
                <li><Scrollchor to="#wiring">Wiring Diagrams</Scrollchor></li>
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
                 &nbsp; Last updated: May 25th, 2024
                </div>
              </div>
              <div className="doc-body">
                <div className="doc-content">
                  <div className="content-inner">

                    <section id="shopping" className="doc-section">
                      <h2 className="section-title">Shopping List</h2>
                      <div className="section-block">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>The Megasquirt 3x Kit and required parts to build and install your ECU can all be purchased at <a href="https://www.diyautotune.com/" target="_blank">diyautotune.com</a></p>
                            <ul>
                              <li>MegaSquirt-III with PCB V3.0 – Unassembled Kit</li>
                              <li>MegaSquirt-III MS3X Expansion Card</li>
                              <li>MegaSquirt 3X Wiring Bundle – 23″</li>
                              <li>MegaSquirt Wiring Bundle – 23″</li>
                              <li>MSPNP and DIYPNP IAT Sensor Kit</li>
                            </ul>
                            <h6>For Harness Assembly:</h6>
                            <ul>
                              <li><i>(90-00)</i> - <a href="http://www.mouser.com/ProductDetail/TE-Connectivity-AMP/178764-1/?qs=sGAEpiMZZMtWuggIubTlf3ze41ns8Qha" target="_blank">178764-1</a> TE Connectivity Automotive Connector</li>
                              <li><i>(01-05)</i> - <a href="http://www.mouser.com/ProductDetail/TE-Connectivity/1123038-2/?qs=%2fha2pyFaduiz%2fiV5LwibmBlkdjZ46JkPunJ807ciz2w%3d" target="_blank">1123038-2</a> TE Connectivity Automotive Connector</li>
                              <br /><p>Optional:</p>
                              <li><i>(90-95)</i> - MSPNP 16 Pin Center Connector</li>
                            </ul>
                          </div>
                        </div>
                        <br />
                        <div className="callout-block callout-success">
                          <div className="icon-holder">
                            <i className="fa fa-money" />
                          </div>{/*//icon-holder*/}
                          <div className="content">
                            <h4 className="callout-title">Useful Tip:</h4>
                            <p>For loading firmware and bench testing your ECU, it is recommended that you also purchase the <strong>JimStim v1.5 MegaSquirt Stimulator with Wheel Simulator – Unassembled</strong>.</p>
                            <p>96+ Miatas are equipped with an OE knock sensor that the MS3x can utilize, this would also be your opportunity to purchase the addtional <strong>MS3 Knock Module Kit</strong>.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
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
                              <li>Heatshrink Tubing (3/32{'"'})</li>
                              <li>Wire Cutters & Strippers</li>
                              <li>Screwdriver (both flat and phillips )</li>
                              <li>Percision Flathead Screwdriver (for VR pot adjustments)</li>
                              <br /><p>Optional:</p>
                              <li>Desoldering Braid (in case of screwups)</li>
                              <li>Spool of 22-20awg stranded Copper Wire (if provided amount with MS kit not sufficent)</li>
                              <li>Hot Glue Gun (for harness)</li>
                              <li>Zipties or wire loom (for harness)</li>
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
                            <p>The <a href="https://www.amazon.com/Weller-WLC100-40-Watt-Soldering-Station/dp/B000AS28UC/ref=sr_1_1?s=hi&ie=UTF8&qid=1483283443&sr=1-1&keywords=weller+soldering+iron"> Weller WLC100 40-Watt Soldering Station</a> available at Amazon is a great variable-temperature budget iron that will get the job done.  I highly recommend the <a href="https://www.amazon.com/Weller-ST7-0-03-X0-79-Conical/dp/B000B607OC/ref=sr_1_2?s=hi&ie=UTF8&qid=1483283499&sr=1-2&keywords=weller+tip">ST7 Conical Tip</a> along with it.</p>
                            <p>A <strong>{'"'}Helping Hand Soldering Stand{'"'}</strong> is extremely useful when installing and soldering components on the PCB. They come in all all sorts of configurations and price points.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="assembly" className="doc-section">
                      <h2 className="section-title">Main Printed Circuit Board (PCB) Assembly</h2>
                      <div className="section-block">
                          <p>Not everything provided in the MegaSquirt-III Unassembled Kit is required to be populated in order to run the MS on your miata.  The MS3 kit is able to run all sorts of different makes/models/configurations&mdash;you can chose to install it all, or just install what I reccomend below.  I personally install the least amount of components required; this will save time and wasted effort.</p>
                          <p>With that being said, only a very few {'"'}modifications{'"'} must be made after assembly in order to configure the MS3 to work with the miata sensors.  All 90-95 model year MS3x units will be built the same way, with the exception only being the addtion of a few extra {'"'}mods{'"'} to handle the unqiue requirements of NBs.</p>
                      </div>{/*//section-block*/}
                      <div id="pcb" className="section-block">
                        <h3 className="block-title">Populating the PCB</h3>
                        <p>Below is the component map we will use to populate the PCB.  This is often referred to as the mainboard.</p>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">
                            <ImageModal img="assets/images/ms3x_component_map.jpg" title="MS3X Component Map" caption="Note two red circles on the image: one over R52 and the other over R13." />
                          </div>
                        </div>
                        <p>You will note two red circles on the image above: one over <code>R52</code> and the other over <code>R13</code>.</p>
                        <p>These are two of the modifications to the board mentioned eariler&mdash;courtesy of Frank Devocht&mdash;to make simplify the build process.</p>
                        <p>Replacing <strong>R52</strong> with the unused 100K resistor from <strong>R22</strong> prevents having to install and tune the variable resistor -- especially since we tune it to stay at 100K. So instead, I use a spare 100K ohm resistor, R22, and install it in the R52 position (outer two holes).</p>
                        <p>Installing a 1K resistor from the left position of <strong>R13</strong> to the right position of <strong>R45</strong> adds the 5v pullup nessecary for the crank sensor.  You can use the unused R19 resistor for this.</p>
                        <p>Besides those two mods, install the rest of the components as normal.</p>
                      </div>{/*//section-block*/}

                      <div id="resist" className="section-block">
                        <h3 className="block-title">Resistors, capacitors, diodes</h3>
                        <p>Start with populating the resistors. By setting up the Mainboard in a helping hands, you can position all the resistors you chose to install. (There is nothing wrong with assembling the entire MS, but those circuits/compoents are simply unused for miata installations).</p>
                        <p>There is nothing special about doing this, simply bend the legs into a "U" and place them into the designated holes. Once all resistors are populated, go through and solder them in place. I personally do this on the top of the board, holding the solder in my left hand I place the solder against the leg of the resistor right at the hole the component is residing in. Then I bring in the hot iron with my right hand and "melt" the solder into the hole. You can bend the leads back so you can flip the board over and solder them from the backside of the board, but I find it takes extra time without benefit.</p>
                        <p>Next, work through the diodes, then capacitors.  Pay special attention to the polarity of both. Three of the capacitors (C16, C17, & C22) are polarity specific&mdash;The longer leg goes into the hole stamped with a "+". The banded end of the diodes are labeled on the board with a thick white line.</p>
                        <p>Once all the resistors, capacitors, diodes, and purple "others" are installed and soldered onto the Mainboard, you can remove it form your Helping Hands, and cut off all the leads from the underside flush.</p>
                      </div>{/*//section-block*/}

                      <div id="integrated" className="section-block">
                        <h3 className="block-title">Integrated circuits</h3>
                        <p>After installing all the resistors, capacitors, and diodes, move on to the integrated circuits.</p>
                        <p>Go ahead and first install the <strong>DB9</strong> & <strong>DB37</strong> connectors. The DB37 connector must be installed before the MAP sensor, so I like to get them out of the way.</p>
                        <p>For <strong>U6</strong> & <strong>U7</strong>, you need to press the leads inward ever so slightly so they can fit into the holes.  I like to take one edge and press the entire row, gently, down against my table surface&mdash;just enough to squeeze them in a little.  Once in place on the mainboard, solder one or two leads from the top to hold it in place and finish the rest from the underside to ensure good contact.</p>
                        <p>Before installing <strong>U1</strong>, using a small piece of the included red wire in the MS3 Kit, connect <strong>S12C</strong> to <strong>JS9</strong>.  Once soldered, put U1 in place overtop of the jumper wire and solder.</p>
                        <p>Finally, install <strong>U5</strong> on the heaksink. Use small needlenose pliers to bend the leads and place a very small dab of the included thermal compound on the heatsink before fitting in place.  Secure it in place using one of the long screws and the shorter of the two standoffs that are included in the box the MS3 CPU Daughterboard was shipped in.  Don{"'"}t forget to solder the leads.</p>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">

                          </div>
                        </div>
                      </div>{/*//section-block*/}

                      <div id="transistors" className="section-block">
                        <h3 className="block-title">Transistors</h3>
                        <p>There is nothing much of note with the transistors but to be careful not to solder the leads together.  They can be tricky since they are so close together.  Make certain your iron is only touching one lead at a time.  I like to separte the leads on the otherside the best I can before soldering.  Keep the desoldering braid on hand here...</p>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">

                          </div>
                        </div>
                      </div>{/*//section-block*/}

                      <div id="jumpers" className="section-block">
                        <h3 className="block-title">Jumpers</h3>
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                          <p>Your PCB needs a few additional modifications beyond placing the two resistors in order to configure the MS3x to work with your miata.</p>
                          <ul>
                            <li>The <strong>(2)</strong> VR input jumpers: (<strong>TACHSELECT</strong> to <strong>VRIN</strong>) & (<strong>VROUT</strong> to <strong>TSEL</strong>) You can use leftover snippings for these.</li>
                            <li>12v Pull-up for the Expander Board from <strong>s12c</strong> to <strong>JS9</strong>. This should have already been performed if you followed above.</li>
                            <li>Flyback modification wire to <strong>s12</strong> to <strong>D1 (c)</strong> on the Expander Board. <a href="http://www.msextra.com/doc/pdf/html/MS3XV30_Hardware-1.4.pdf/MS3XV30_Hardware-1.4-232.html" target="_blank">See documentation on this here.</a></li>
                            <br /><p>For NB installations (99-05):</p>
                            <li>5v Pull-up using a 1K resistor to VVT on the Expander Board for the NB alternator control.</li>
                            <li>Extra 12v outputs for the idle valve and/or VVT solenoid. (Required only to make harness building easier)</li>
                          </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                          <ImageModal img="assets/images/ms3x_jumpers.jpg" title="MS3X Jumpers" caption="The NB only jumpers are simply used to provide extra +12v pins for the harness." />
                          </div>
                        </div>

                      </div>{/*//section-block*/}

                      <div id="daughterboard" className="section-block">
                        <h3 className="block-title">CPU Daughterboard</h3>
                        <p>At this point you should be ready to mount the MS3 CPU Daughterboard.</p>
                        <p>You should already have a standoff on <strong>U5</strong>, now install the other in the 4th hole on the heatsink. Press the extra 40pin socket on <strong>U1</strong>&mdash;there should be a third already pressed onto the Daughterboard itself&mdash;and fit the daugherboard into position.  The USB port on the Daughterboard should align just above the DB9 serial port on the Mainboard.</p>
                        <p>Fit the small brass washers between the standoffs and Daughtboard so it sits level, and secure with the remaining screws.</p>
                        <p>For additional documentation on this step, you can refer to <a href="http://www.msextra.com/doc/pdf/html/MS3XV30_Hardware-1.4.pdf/MS3XV30_Hardware-1.4-229.html" target="_blank"><strong>13.6</strong> MS3 CPU Card Mounting</a> in the msextra manuals.</p>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">

                          </div>
                        </div>
                      </div>{/*//section-block*/}

                      <div id="expanderboard" className="section-block">
                        <h3 className="block-title">Expander Board</h3>
                        <p>Before installing the Expander Board, take this opportunity to tune the VR input pot <strong>R56</strong> before you cover it with the the Expander.</p>
                        <p>Turn <strong>R56</strong> (12) turns to the fully counterclockwise, then turn it back 7½ turns clockwise.</p>
                        <p>Now do the same for the pots on the Expander itself:</p>
                        <p>Turn both <strong>R11</strong> & <strong>R32</strong> (6) turns to the fully counterclockwise. Turn <strong>R11</strong> back 3½ turns clockwise.  Do not turn R32 clockwise.</p>
                        <p>Finally, before fitting the ribbons and installing on the mainboard, with the remaining wire provided in the kit, solder the <a href="http://www.msextra.com/doc/pdf/html/MS3XV30_Hardware-1.4.pdf/MS3XV30_Hardware-1.4-232.html" target="_blank">Flyback modification</a> wire from <strong>s12</strong> on the Mainboard to <strong>D1 (c)</strong> on the Expander.  Use hot glue to secure the wire soldered on D1 to prevent any stress.</p>

                        <div className="row topPad">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <h6>For NB (99-05) installations:</h6>
                            <p>The Expander Board needs a 5v Pull-up using a 1K resistor on the VVT output to properly control the NB alternator.</p>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <p>Using an unused 1K resistor from the MS3 Kit, jump <strong>VCC</strong> to the <strong>VVT output</strong> pin as pictured above.  Use heatshrink over your solder joints to prevent any shortcircuiting.</p>
                            <ImageModal img="assets/images/alternator_pullup.jpg" title="VVT Output 5v Pull-up" caption="The Expander Board needs a 5v Pull-up using a 1K resistor on the VVT output to properly control the NB alternator." />
                          </div>
                        </div>

                      </div>{/*//section-block*/}

                    </section>{/*//doc-section*/}

                    <section id="harness" className="doc-section">
                      <h2 className="section-title">Patch Harness Assembly</h2>
                      <div className="section-block">
                        <p>There are various ways to connect your newly assembled MS3x to your miata. The method I like to employ is the Plug & Play (PnP) Patch Harness.  Building this harness will allow you to plug the MS3x unit directly into the OE ECU Harness. This method uses a spare ECU connector that you solder the two DB37 connectors to via the two wire looms noted in the shopping list. 90-95 installations can utilize the option 16-pin connector in the Shopping List to put any additioanl inputs and outputs.</p>
                        <br />
                        <div className="callout-block callout-success">
                          <div className="icon-holder">
                            <i className="fa fa-money" />
                          </div>{/*//icon-holder*/}
                          <div className="content">
                            <h4 className="callout-title">Useful Tip:</h4>
                            <p>If you prefer not to cut and solder directly onto the ECU Connector, the <a href="https://www.diyautotune.com/product/diybob-breakout-adapter-nippondenso-76-pin/" target="_blank">DIYBOB</a> was developed exactly for this type of harness.  It's a bit of a splurge, but it's easier to populate, looks cleaner, and much easier to make changes on.</p>
                            <p>It includes the ECU connector, and is available for all model year miatas 90-05 (NB2 use the <a href="https://www.diyautotune.com/product/diypnp-nippon-denso-122pin-unassembled-kit/" target="_blank">N122 kit</a>).  This allows you to source everything you need from one vendor.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
                      </div>{/*//section-block*/}

                      <div id="db37" className="section-block">
                        <h3 className="block-title">DB37 Connectors</h3>
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <h6>Mainboard DB37</h6>
                            <p>Populate the Mainboard DB37 following the diagram below.</p>
                            <ImageModal img="assets/images/ms3x_db37.jpg" title="Mainboard DB37" caption="" />
                            <ImageModal img="assets/images/ms3x_db37_soldered.jpg" title="Mainboard DB37 Soldered" caption="" />
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <h6>Expander DB37</h6>
                            <p>Populate the Expander Board DB37 following the diagram below. I only populate the wires I plan on using, you can use the model-year wiring diagrams in the next section to determine these.</p>
                            <ImageModal img="assets/images/ms3x_expander.png" title="Expander Board DB37" caption="" />
                            <ImageModal img="assets/images/ms3x_expander_soldered.jpg" title="Expander DB37 Soldered" caption="Note: Only the nessecary wires were soldered onto the DB37&mdash;this saves time/effort and keeps the harness free of loose, unused wires." />
                          </div>
                        </div>
                        <br />
                        <div className="callout-block callout-info">
                          <div className="icon-holder">
                            <i className="fa fa-info-circle" />
                          </div>{/*//icon-holder*/}
                          <div className="content">
                            <h4 className="callout-title">Pro-tip-of-the-day:</h4>
                            <p>Position the wires in the DB37 when soldering, so the natural curl of the wires all go the same direction.  Take note the orentation of the connector itself between both connectors.  Taking a moment and doing this here when lead to a cleaner harness in the end.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
                      </div>{/*//section-block*/}

                      <div id="ecu_connector" className="section-block">
                        <h3 className="block-title">ECU Connector</h3>
                        <div className="content">
                          <p>If you are using a DIYBOB to build your harness, you can skip these steps and simply the wiring diagrams in the next section to build your harness.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step One</h6>
                            <p>Acquire an OEM ECU Harness connector.</p>
                            <ImageModal img="assets/images/ecu_connector.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Two</h6>
                            <p>Cut off the top pins so they are about 1/4{'"'} long (right at the bend).</p>
                            <ImageModal img="assets/images/ecu_connector_topcut.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div class="clearfix visible-xs visible-sm"></div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Three</h6>
                            <p>Bend up the lower row so they are flat (try to actually fold them back straight).</p>
                            <ImageModal img="assets/images/ecu_connector_bottomstraight.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div class="clearfix visible-md visible-lg visible-lg"></div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Four</h6>
                            <p>Cut the lower pins flush to the top row.</p>
                            <ImageModal img="assets/images/ecu_connector_bottomcut.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div class="clearfix visible-xs visible-sm"></div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Five</h6>
                            <p>Put a length of heatshrink on each of your wires and then pre-tin the wires and pins before you solder to the connector.</p>
                            <ImageModal img="assets/images/ecu_connector_firstwire.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Six</h6>
                            <p>Start by soldering the Mainboard DB37 wires (work left to right, lower-rows to top-rows).</p>
                            <ImageModal img="assets/images/ecu_connector_msdb37.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div class="clearfix visible-md visible-lg"></div>
                          <div class="clearfix visible-xs visible-sm"></div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Seven</h6>
                            <p>Orient the connectors and follow up with MS3 Expander wires.</p>
                            <ImageModal img="assets/images/ecu_connector_expander.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Eight</h6>
                            <p>Once complete, melt the heatshrink so you ensure no wires will make a connection.</p>
                            <ImageModal img="assets/images/ecu_connector_heatshrink.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                          <div class="clearfix visible-xs visible-sm"></div>
                          <div className="col-md-4 col-sm-6 col-xs-6 ">
                            <h6>Step Nine</h6>
                            <p>Follow up with hot-glue so the wires stay secure and are less prone to vibration & stress.</p>
                            <ImageModal img="assets/images/ecu_connector_glue.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 col-sm-8 col-xs-12">
                            <h6>Complete</h6>
                              <p>Finish this off with split-loom for the professional look. </p>
                            <ImageModal img="assets/images/ecu_connector_complete.jpg" title="OEM ECU Harness connector" caption="" />
                          </div>
                        </div>
                        <br />
                        <div className="callout-block callout-info">
                          <div className="icon-holder">
                            <i className="fa fa-info-circle" />
                          </div>{/*//icon-holder*/}
                          <div className="content">
                            <h4 className="callout-title">Pro-tip-of-the-day:</h4>
                            <p>You will notice the unpopulated center connector in the images above.  90-95 can utilize those pins along with the 16-pin pigtail mentioned in the Shopping List to put any extra inputs/outputs on.  This way if you ever need to unplug the harness, all you need to do is unplug the center connector and not cut wires, or use cheap radio shack connectors to splice into your nice new harness.</p>
                          </div>{/*//content*/}
                        </div>{/*//callout-block*/}
                      </div>{/*//section-block*/}

                      <div id="wiring" className="section-block">
                        <h3 className="block-title">Wiring Diagrams</h3>
                        <ConnectorBoard />
                      </div>{/*//section-block*/}

                    </section>{/*//doc-section*/}

                  </div>{/*//content-inner*/}
                </div>{/*//doc-content*/}

                <div className="doc-sidebar affix-top">
                  <nav id="nav-doc">
                    {AffixNav}
                  </nav>
                </div>{/*//doc-sidebar*/}

              </div>{/*//doc-body*/}
          </div>
        </div>
        </div>
    );

  }
}
