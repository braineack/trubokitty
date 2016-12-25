import React from "react";;
import { Scrollspy } from 'react-scrollspy';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Scrollchor from "react-scrollchor";

import HeaderPage from "../components/HeaderPage";
import ArticlesStore from "../stores/ArticlesStore"

export default class Installation extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: ArticlesStore.getAll(),
    };
  }
  render() {
    const AffixNav = (
      <AutoAffix viewportOffsetTop={20} container={this}>
        <Scrollspy items={ ['components', 'connecting-ms', 'wiring-peripherals', 'nuances'] } currentClassName="active" id="doc-menu" className="nav doc-menu hidden-xs">
            <li><Scrollchor to="#components">Required Tools</Scrollchor></li>
            <li><Scrollchor to="#connecting-ms">Connecting the Megasquirt</Scrollchor></li>
            <li><Scrollchor to="#wiring-peripherals">Wiring the Peripherals</Scrollchor>
              <Scrollspy items={ ['ait', 'fuelpump', 'ebc-power', 'ebc-plumbing', 'map'] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#ait">Air Intake Temp (AIT) Sensor</Scrollchor></li>
                <li><Scrollchor to="#fuelpump">90-93 Fuel Pump</Scrollchor></li>
                <li><Scrollchor to="#ebc-power">EBC Power</Scrollchor></li>
                <li><Scrollchor to="#ebc-plumbing">EBC Plumbing</Scrollchor></li>
                <li><Scrollchor to="#map">MAP Sensor</Scrollchor></li>
              </Scrollspy>
            </li>
            <li><Scrollchor to="#nuances">Nuances</Scrollchor>
              <Scrollspy items={ ['tps', 'tach', 'seq'] } currentClassName="active" className="nav doc-sub-menu">
                <li><Scrollchor to="#tps">90-93 TPS</Scrollchor></li>
                <li><Scrollchor to="#tach">90-95 Tach Signal</Scrollchor></li>
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
                <h1 class="doc-title">
                  <span aria-hidden="true" class={info.icon}></span> {info.title}
                </h1>
                <div class="meta"><i class="fa fa-clock-o"></i>
                  &nbsp; Last updated: Dec 24th, 2016
                </div>
              </div>

              <div className="doc-body">
                      <div className="doc-content">
                        <div className="content-inner">
                          <section id="components" className="doc-section">
                            <h2 className="section-title">Required Components &amp; Tools</h2>
                            <div className="section-block">
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <ul>
                                    <li>Newly asssembled MS (and PnP Harness if applicable)</li>
                                    <li>AIT sensor</li>
                                    <li>About 6’ of vacuum line</li>
                                    <li>A vacuum tee</li>
                                    <li>A timing light</li>
                                    <li>10mm socket/wrench, screwdriver, and pliers</li>
                                    <li>Razor/scissors</li>
                                    <li>USB cable (A to B) or Serial cable</li>
                                    <li>Your Tuning Laptop with the latest verison of <a href="http://www.tunerstudio.com/index.php/tuner-studio">EFI Analytics TunerStudio</a> installed</li>
                                  </ul>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <div className="screenshot-holder">
                                    <a href="assets/images/ms3x_assembled_parts.jpg" data-title="MS3x Parts Ready For Installation" data-toggle="lightbox"><img className="img-responsive" src="assets/images/ms3x_assembled_parts.jpg" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/ms3x_assembled_parts.jpg" data-title="MS3x Parts Ready For Installation" data-toggle="lightbox"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="callout-block callout-danger">
                                <div className="icon-holder">
                                  <i className="fa fa-exclamation-triangle" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Word of Caution:</h4>
                                  <p>It is <strong>highly</strong> recommended you install a WBo2 with your MS.  Tuning on a narrowband sensor is proven to be a fool{"'"}s errand.  Do <strong>NOT</strong> attempt to boost your motor without the installation of one. </p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                              <div className="callout-block callout-success">
                                <div className="icon-holder">
                                  <i className="fa fa-thumbs-up" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Useful Tip:</h4>
                                  <p>I <strong>strongly</strong> reccomend the <a href="http://www.good-win-racing.com/Mazda-Performance-Part/61-1587.html">Singular Motorsports Miata ECU Mounting Bracket</a> for all NB installations (99-05). Otherwise, the ECU must be secured, under the dash, by DIY methods (i.e., zip tips).</p>
                                </div>{/*//content*/}
                              </div>
                            </div>{/*//section-block*/}
                          </section>{/*//doc-section*/}
                          <section id="connecting-ms" className="doc-section">
                            <h2 className="section-title">Connecting the Megasquirt</h2>
                            <div id="projects" className="section-block">
                              <h3 className="block-title">Installing the MS ECU</h3>
                              <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>90-93</h6>
                                  <p>Your ECU is located <strong>under</strong> the passenger foot rest.  Remove the passenger door-sill with a Phillips head screw driver and pull the carpet down. The ECU kick-plate can be lifted off after removing (5) 10mm nuts.</p>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/oe_ecu_9093.png" alt="screenshot" />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>94-97</h6>
                                  <p>Your ECU is located <strong>behind</strong> the passenger seat.  Remove the passenger door-sill with a Phillips head screw driver and pull the carpet down off the ECU. The ECU can be lifted off after removing (3) 10mm nuts.</p>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/oe_ecu_9497.png" alt="screenshot" />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>99-05</h6>
                                  <p>Your ECU is <strong>under</strong> the dash next to the steering column. The Singular Motorsports mounting bracket is recommended for NB MS3x installations, the DIYPNP can ziptie to the OE bracket like shown.</p>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/99_miata_diypnp_mounted.jpg" alt="screenshot" />
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <br />
                              <p>Remove the OEM ECU, then plug the OEM connectors into your new harness [or DIYPNP] and attach the DB37 connector to your MS (<i>please be certain they are firmly connected and securely screw in the connectors</i>).</p>
                              <p>Securely mount the ECU as you please. On 95-97 installs, the MS3x can still mount and fit behind the seat.</p>
                              <div className="callout-block callout-info">
                                <div className="icon-holder">
                                  <i className="fa fa-info-circle" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Pro-tip-of-the-day:</h4>
                                  <p>The ECU connectors are much easier to remove if you press the tabs down with a flat-head screwdriver, then wiggle them carefully from the ECU. Try pulling from the base of the connector; it is possible to pull the wires out of the connector if you pull directly on them.</p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                            </div>{/*//section-block*/}
                          </section>
                          <section id="wiring-peripherals" className="doc-section">
                            <h2 className="section-title">Wiring the Peripherals</h2>
                            <div id="ait" className="section-block">
                              <h3 className="block-title">Air Intake Temp (AIT) Sensor / Fuel Pump / EBC solenoid</h3>
                              <p>Especially in boosted applications, we must install an open-element AIT sensor to get a more accurate on-the-fly reading of intake temperatures.  While the OEM AIT sensors will suffice for Normally Aspirated (N/A) installations, it{"'"}s still wise to go ahead to upgrade to the open-element. Because we utilize this non-OE AIT sensor, this is also your chance to remove the AFM/MAF completely which is just an intake restriction at this point.</p>
                              <p>The MS harness is wired so hooking up the AIT sensor, activating the fuel pump (90-93 only), and plumbing the EBC soleniod is very easy and without the need to cut and damage the OEM wiring harness.</p>
                              <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                  <h6 id="fuelpump">90-93 (NA) Air Flow Meter (AFM) Connector</h6>
                                  <p>Using a small length of wire leftover from the installation kit, jump the two pins for the fuel pump. This connects the MS to the fuel pump relay so it can control the fuel pump properly.</p>
                                  <p>The EBC solenoid must be connected to a switched power supply inside the engine bay. The blue power connector near the driver{"'"}s headlight is the ideal choice.</p>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/AFM_Fuel_Jumpers.png" data-title="90-93 AFM Connector" data-toggle="lightbox"><img className="img-responsive" src="assets/images/AFM_Fuel_Jumpers_thumb.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/AFM_Fuel_Jumpers.png" data-title="90-93 AFM Connector" data-toggle="lightbox"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                  <h6>94-97 (NA) Mass Air Flow (MAF) Connector</h6>
                                  <p>Because the MAF connector already has a switched 12v location, we can wire the EBC solenoid directly into it.</p>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/MAF_Jumpers.png" data-title="94-97 MAF Connector" data-toggle="lightbox"><img className="img-responsive" src="assets/images/MAF_Jumpers_thumb.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/MAF_Jumpers.png" data-title="94-97 MAF Connector" data-toggle="lightbox"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                  <h6>99-05 (NB/NB2) Mass Air Flow (MAF) Connector</h6>
                                  <p>Only the EBC solenoid gets wired to the NB/NB2 MAF connector.</p>
                                  <p>The AIT sensor is located just behind the MAF directly on the intake pipe, unplug it and use that connector in the same fashion as the above.</p>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/NB2_MAF.png" data-title="99-05 MAF Connector" data-toggle="lightbox"><img className="img-responsive" src="assets/images/NB2_MAF_thumb.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/NB2_MAF.png" data-title="99-05 MAF Connector" data-toggle="lightbox"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <p>With the provided wire and contacts in the AIT sensor bundle, wire your new GM AIT sensor by pushing the spade connectors installed on the end of the wires directly into the AFM/MAF harness using the Pin locations below; polarity doesn’t matter.</p>
                              <div className="callout-block callout-success">
                                <div className="icon-holder">
                                  <i className="fa fa-thumbs-up" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Useful Tip:</h4>
                                  <p>Fold the wires over the side of the connector and then wrap it a few times with electrical tape to prevent them from pulling out; tuck away under the brake booster.</p>
                                </div>{/*//content*/}
                              </div>
                              <div className="callout-block callout-info">
                                <div className="icon-holder">
                                  <i className="fa fa-info-circle" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Pro-tip-of-the-day:</h4>
                                  <p>For boosted applications where an intercooler (IC) is installed, it{"'"}s best-practice to install physically the AIT sensor bung on the IC endtake or on the charge pipe just after it. When installed inside the engine bay, near the throttle body (TB) the elevated temperatures from the engine and radiator can heatsoak the sensor and cause tuning issues down the road.  Installing just after the IC ensures the MS is reading the most accurate depiction of the charge temps before it reaches the engine.</p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                            </div>{/*//section-block*/}
                            <div id="ebc-power" className="section-block">
                              <h3 className="block-title">Powering an EBC solenoid (90-93 only)</h3>
                              <p>Connect one wire of the solenoid to the little blue +12v connector near the driver headlight (it has a cap on it, when you pull it off it’s just a little spade), or any or other switched/fused +12volt power source in the engine bay (white/red).</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Blue Power Connector </h6>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/blue_power_connector.png" alt="screenshot" />
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <p>The Blue Power Connector is the easiest switched source to use, and it also happens to be close the the AFM you wired the MS to, as well as the most likely location to mount the solenoid itself.</p>
                            </div>{/*//section-block*/}
                            <div id="ebc-plumbing" className="section-block">
                              <h3 className="block-title">Plumbing an EBC solenoid</h3>
                              <p>If you purchased your EBC solenoid from <a href="http://www.diyautotune.com">DIYAUTOTUNE</a>, the boost source goes into the lower port on the side with two ports.  The outlet to the wastegate is on the side with only one port; this should be labeled.</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>EBC solenoid plumbing</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/EBC_Plumbing.png" data-toggle="lightbox" data-title="EBC solenoid plumbing"><img className="img-responsive" src="assets/images/EBC_Plumbing_thumb.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/EBC_Plumbing.png" data-toggle="lightbox" data-title="EBC solenoid plumbing"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <p>The best boost source would be <strong>between</strong> the intercooler and throttle body.  It is not recommended to source boost from the intake manifold (IM) because vacuum from the IM could potential damage the wastegate or cause issues.</p>
                              <p>However, sourcing boost directly from the turbo is the easiest (since it does not require adding in a source on your charge pipes) but it could potentially lead to sluggish boost reponse, as well as require extra tuning to hold boost towards redline.</p>
                            </div>{/*//section-block*/}
                            <div id="map" className="section-block">
                              <h3 className="block-title">Plumbing the Manifold Absolute Pressure (MAP) sensor</h3>
                              <p>You must run a vacuum line from your intake manifold to the on-board MAP sensor built inside the MS. The ideal spot is teeing off the Fuel Pressure Regulator (FPR) vacuum line. This provides a clean, noise-free, location to source vacuum/boost.</p>
                              <p>To get the vacuum line through the firewall into the cabin, there is a grommet located behind the washer fluid reservoir/ABS module on the firewall you can pass the vacuum line through. Using a flathead screwdriver to pop it out, you can then drill a hole in the middle to fit the vacuum line through, and start feeding it in.</p>
                              <p>Inside the cabin, you’ll need to reach up behind the insulation and glove box to find it.  It's further up than you'd imagine from the inside.</p>
                              <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>Grommet on Firewall</h6>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/firewall_grommet.png" alt="screenshot" />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>Vacuum line pressed through grommet</h6>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/firewall_grommet_vacuum.png" alt="screenshot" />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                  <h6>Reaching it from the cabin</h6>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/firewall_grommet_cabin.png" alt="screenshot" />
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <div className="callout-block callout-danger">
                                <div className="icon-holder">
                                  <i className="fa fa-exclamation-triangle" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Word of Caution:</h4>
                                  <p>Do <strong>NOT</strong> plumb the vacuum line to the ports on top of the TB or the empty port on the very back of the IM. These locations are great for vacuum solenoids, but the MAP signal on these locations tends to be <i>very</i> noisey causing all sorts of MAPDot tuning issues.</p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                            </div>{/*//section-block*/}
                          </section>
                          <section id="nuances" className="doc-section">
                            <h3 className="section-title">Nuances</h3>
                            <div id="tps" className="section-block">
                              <h3 className="block-title">90-93 Throttle Position Sensor (TPS)</h3>
                              <div className="callout-block callout-warning">
                                <div className="icon-holder">
                                  <i className="fa fa-bug" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Word to the wise</h4>
                                  <p>90-93 installations <strong>must</strong> <code>DISCONNECT</code> your stock TPS connector if you followed my wiring instructions for vTPS.</p>
                                  <p>Failure to disconnect the TPS will result in being unable to connect your laptop to the MS and even start the car.</p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                              <p>The stock TPS sensor is just an On/Off switch and the MS cannot do anything usful with the signal.</p>
                              <p>So with that in mind, your harness is prewired to work in conjunction with a vTPS (like the Wells TPS201 mod as outlined on miatatubo.net) or automatic throttle body. Wiring it this way gives you an easy upgrade opportunity: allowing you to use TPSdot enrichments instead of MAPdot. MAPdot enrichments are more reactive, where TPSdot is "proactive" -- or at least reacting at the same time.</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Wiring</h6>
                                  <p>To wire a vTPS simply connect to the stock TPS harness as follows:</p>
                                  <div className="table-responsive">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th>Function</th>
                                          <th>OE Wire Color</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">TPS Signal</th>
                                          <td>Lt. Green / White</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Ground</th>
                                          <td>Black / Green</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">5vref</th>
                                          <td>Red</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>{/*//table-responsive*/}
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>1.8L engine swaps</h6>
                                  <p>Use the folowing diagram for wiring a 1.8L throttle body (or alike) to the 1.6L harness:</p>
                                  <div className="screenshot-holder">
                                    <img className="img-responsive" src="assets/images/1_8L_to_1_6L_vTPS.png" alt="screenshot" />
                                  </div>
                                </div>
                              </div>{/*//row*/}
                            </div>{/*//section-block*/}
                            <div id="tach" className="section-block">
                              <h3 className="block-title">90-95 Tach Signal</h3>
                              <p>On 90-95 (yes, 1995) model years, the signal that drives the tach on your dash comes directly from the coils.  Part of the magic that makes this happen is that the OE ECU provides positive voltage on a particular wire in the harness.</p>
                              <p>Instead of replicating this, I{"'"}ve opted to prewire harnesses allowing the ECU the ability to output the tach signal to utilize in future Coil On Plug (COP) upgrades.</p>
                              <p>To save extra work/effort, there is a very simple solution to restore the positive voltage on the tach signal without having to modify the harness/ECU. </p>
                              <p>Using a spare 1K resistor from your assembly kit and jump IG- and B+ in your diagnostics box (located near the driver shock tower). Shape the resistor into a wide “U” and trim the legs down so it fits inside the cover. Make sure it doesn’t touch any other pins -- B+ connects directly to the battery.</p>
                              <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-6">
                                  <h6>Diagnostics Connector</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/tach_resistor.png" data-toggle="lightbox" data-title="Diagnostics Connector"><img className="img-responsive" src="assets/images/tach_resistor_thumb.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/tach_resistor.png" data-toggle="lightbox" data-title="Diagnostics Connector"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                              </div>{/*//row*/}
                            </div>{/*//section-block*/}
                            <div id="seq" className="section-block">
                              <h3 className="block-title">90-93 Sequential Fueling</h3>
                              <p>The 90-93 1.6L Fuel Injector Harness is wired in batches: Injectors (1 &amp; 3) are paired and Injectors (2 &amp; 4) are paired together respectively. </p>
                              <p>Your MS3x supports sequential fueling, however, your 1.6L injector harness needs to be modified in order to run it. This will allow you to drive each injector individually instead of firing two at a time.  This upgrade increases mpg efficiency, increases power output, and allows easier control of larger sized injectors.</p>
                              <p>To perform this upgrade, you will need to modify your injector harness as seen below to remove the batched pairings and run an output to each individual injector.  Two new wires from INJ C and INJ D from the harness must be run into the engine bay (from your I/O Pigtail) and two wires on the DB37 must be swapped around to ensure the correct outputs go to the correct cylinder.</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Normal MS3x Installation</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/oe_1_6L_harness.png" data-toggle="lightbox" data-title="Normal MS3x Installation"><img className="img-responsive" src="assets/images/oe_1_6L_harness.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/oe_1_6L_harness.png" data-toggle="lightbox" data-title="Normal MS3x Installation"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Seq. Fueling Modified MS3x Installation</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/seq_1_6L_harness.png" data-toggle="lightbox" data-title="Seq. Fueling Modified MS3x Installation"><img className="img-responsive" src="assets/images/seq_1_6L_harness.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/seq_1_6L_harness.png" data-toggle="lightbox" data-title="Seq. Fueling Modified MS3x Installation"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Normal DIYPNP Installation</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/oe_1_6L_harness_diypnp.png" data-toggle="lightbox" data-title="Normal DIYPNP Installation"><img className="img-responsive" src="assets/images/oe_1_6L_harness_diypnp.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/oe_1_6L_harness_diypnp.png" data-toggle="lightbox" data-title="Normal DIYPNP Installation"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                  <h6>Seq. Fueling Modified DIYPNP Installation</h6>
                                  <div className="screenshot-holder">
                                    <a href="assets/images/seq_1_6L_harness_diypnp.png" data-toggle="lightbox" data-title="Seq. Fueling Modified DIYPNP Installation"><img className="img-responsive" src="assets/images/seq_1_6L_harness_diypnp.png" alt="screenshot" /></a>
                                    <a className="mask" href="assets/images/seq_1_6L_harness_diypnp.png" data-toggle="lightbox" data-title="Seq. Fueling Modified DIYPNP Installation"><i className="icon fa fa-search-plus" /></a>
                                  </div>
                                </div>
                              </div>{/*//row*/}
                              <div className="callout-block callout-success">
                                <div className="icon-holder">
                                  <i className="fa fa-thumbs-up" />
                                </div>{/*//icon-holder*/}
                                <div className="content">
                                  <h4 className="callout-title">Useful DIYPNP Tip:</h4>
                                  <p>Two additional fuel injector drivers must be installed in the proto area of the DIYPNP for this upgrade to work.  More informaiton on this modification can be <a href="#">found here</a>.</p>
                                </div>{/*//content*/}
                              </div>{/*//callout-block*/}
                              <h6>Firing Order</h6>
                              <pre className=" language-php"><code className=" language-php">You must wire <span className="token constant">INJ</span> A<span className="token punctuation">,</span> B<span className="token punctuation">,</span> C<span className="token punctuation">,</span> <span className="token operator">&amp;</span> D in the firing order<span className="token punctuation">:</span> <span className="token number">1</span><span className="token punctuation">,</span><span className="token number">3</span><span className="token punctuation">,</span><span className="token number">4</span><span className="token punctuation">,</span><span className="token number">2</span><span className="token punctuation">.</span>{"\n"}<span className="token constant">INJ</span> A – Cylinder <span className="token number">1</span>{"\n"}<span className="token constant">INJ</span> B – Cylinder <span className="token number">3</span>{"\n"}<span className="token constant">INJ</span> C – Cylinder <span className="token number">4</span>{"\n"}<span className="token constant">INJ</span> D – Cylinder <span className="token number">2</span>{"\n"}</code></pre>
                            </div>{/*//section-block*/}
                          </section>{/*//doc-section*/}
                        </div>{/*//content-inner*/}
                      </div>{/*//doc-content*/}
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
