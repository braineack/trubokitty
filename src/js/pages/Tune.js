import React from "react";
import HeaderPage from "../components/HeaderPage";
import ArticlesStore from "../stores/ArticlesStore";
import { Scrollspy } from 'react-scrollspy';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Scrollchor from "react-scrollchor";

export default class Tune extends React.Component {
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
    var btnColor = 'btn btn-' + info.color;
    var siteName = 'truboKitty.com -- '
    document.title = siteName + info.title;
    var folder = 'assets/tunes/'
    var ms3version = '1.5.1'
    var diypnpversion = '3.4.2'
    var msq9093ms3x = folder + 'ms3x_90-93_' + ms3version + '.msq';
    var msq9497ms3x = folder + 'ms3x_94-97_' + ms3version + '.msq';
    var msq9900ms3x = folder + 'ms3x_99-00_' + ms3version + '.msq';
    var msq0105ms3x = folder + 'ms3x_01-05_' + ms3version + '.msq';
     var msq0305ms3x = folder + 'ms3x_03-05_' + ms3version + '.msq';
    var msq0105ev14ms3x = folder + 'ms3x_01-05_ev14_' + ms3version + '.msq';
    var msq0305ev14ms3x = folder + 'ms3x_03-05_ev14_' + ms3version + '.msq';
    var msqmsmms3x = folder + 'ms3x_MSM_' + ms3version + '.msq';
    var msq9093diypnp = folder + 'DIYPNP_90-93_' + diypnpversion + '.msq';
    var msq9497diypnp = folder + 'DIYPNP_94-97_' + diypnpversion + '.msq';
    var ms3xfw = folder + 'ms3-release-'+ ms3version +'.zip';
    var diypnpfw = folder + 'ms2extra-release-'+ diypnpversion +'.zip';
    const AffixNav = (
      <AutoAffix viewportOffsetTop={20} container={this}>
        <Scrollspy items={ ['software', 'ms3firmware', 'ms3maps', 'ms2firmware', 'ms2maps', 'sensor'] } currentClassName="active" id="doc-menu" className="nav doc-menu hidden-sm hidden-xs">
            <li><Scrollchor to="#software">Tuning Softwares</Scrollchor></li>
            <li><Scrollchor to="#ms3firmware">Megasquirt-3 Firmware</Scrollchor></li>
            <li><Scrollchor to="#ms3maps">MS3x Basemaps</Scrollchor></li>
            <li><Scrollchor to="#ms2firmware">DIYPNP Firmware</Scrollchor></li>
            <li><Scrollchor to="#ms2maps">DIYPNP Basemaps</Scrollchor></li>
            <li><Scrollchor to="#sensor">Sensor Calibration</Scrollchor></li>
        </Scrollspy>
        </AutoAffix>
    );
    return (
        <div class={bodyColor}>
          <HeaderPage title={info.title} class={info.color} />
          <div class="doc-wrapper">
            <div class="container">
              <div id="doc-header" class="doc-header text-center">
                <h1 class="doc-title"><span aria-hidden="true" class={info.icon}></span> {info.title}</h1>
                <div class="meta"><i class="fa fa-clock-o"></i>
                 &nbsp; Last updated: Dec 13th, 2024
                </div>
              </div>
              <div className="doc-body">
                <div className="doc-content">
                  <div className="content-inner">

                    <section id="software" className="doc-section">
                      <h2 className="section-title">Tuning Software Downloads</h2>
                      <div className="section-block">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>Download ‘TunerStudioMS’ for tuning and ‘MegaLogViewer’ for datalog analysis from <a href="http://www.tunerstudio.com/index.php/downloads" target="_blank">EFI Analytics website</a>.</p>
                          </div>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="ms3firmware" className="doc-section">
                      <h2 className="section-title">Megasquirt-3 Firmware Downloads</h2>
                      <div className="section-block">
                        <p>All my MS3x basemaps are currently developed in {ms3version} release firmware.  This may not be the most current release of Megasquirt-3 firmware available. If you wish to use the most current release, please check the <a href="http://www.msextra.com/downloads/" target="_blank">msextra.com website</a> for the latest.</p>
                        <p><a href={ms3xfw} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download MS3 {ms3version} Release Firmware</a></p>
                        <div id="loadfirm" className="section-block">
                          <h3 className="block-title">Loading Megasquirt-3 Firmware</h3>
                          <p>The zip file above contains the utility for loading the firmware onto your MS3x.  Once extracted, double-click on ms3loader_win32.exe and follow the first three prompts.</p>
                          <p>Choose "1: Normal" for debug message level.</p>
                          <p>Choose whether you want the utility to scan for the MS3x, or specify the serial port assignment.</p>
                          <p>Click enter for default ms3.s19 firmware file.  Do <code>NOT</code> use the ms3-pro file.</p>
                          <p>The utility will now load the firmware to your ms3x.</p>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="ms3maps" className="doc-section">
                      <h2 className="section-title">MS3x Basemap Downloads</h2>
                      <div className="section-block">
                        <p>These basemaps have been developed and refined over the last 10 years since I started using, building, and tuning megasquirts on miatas.</p>
                        <p>They are specifically developed to work in conjunction with my specific documentation, so if you did not use the same inputs and outputs as outlined in my assembly documentation, then these maps won{"'"}t work out-of-the-box for you.</p>
                        <p>If you did follow my documentation, I still have to say: <code>Use at your own risk.</code></p>
                        <p>These maps are loaded with a safe spark and fuel map, and are designed to get your engine running and idling. They still must be fine-tuned for your specific application and setup, but most of the settings like a/c idle up, throttle enrichments, or VICS/VTCS/VVT have already been setup.</p>
                        <div className="row">
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>90-93 MS3x Basemap:</h6>
                            <p><a href={msq9093ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>94-97 MS3x Basemap:</h6>
                            <p><a href={msq9497ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>99-00 MS3x Basemap:</h6>
                            <p><a href={msq9900ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>01-05 MS3x Basemap:</h6>
                            <p><a href={msq0105ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                            <p><a href={msq0105ev14ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> EV14 Inj. Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>03-05 MS3x Basemap:</h6>
                            <p><a href={msq0305ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                            <p><a href={msq0305ev14ms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> EV14 Inj. Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>MSM MS3x Basemap:</h6>
                            <p><a href={msqmsmms3x} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="ms2firmware" className="doc-section">
                      <h2 className="section-title">DIYPNP (MS2) Firmware Downloads</h2>
                      <div className="section-block">
                        <p>All my DIYPNP basemaps are currently developed in {diypnpversion} release firmware.  This may not be the most current release of Megasquirt-2 firmware available. If you wish to use the most current release, please check the <a href="http://www.msextra.com/downloads/" target="_blank">msextra.com website</a> for the latest.</p>
                        <p><a href={diypnpfw} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download MS2 {diypnpversion} Release Firmware</a></p>
                        <div id="" className="section-block">
                          <h3 className="block-title">Loading Megasquirt-2 Firmware</h3>
                          <p>For loading firmware onto your DIYPNP, please refer to <a href="https://www.diyautotune.com/support/tech/hardware/diypnp/documentation/diypnp-v1-5/loading-firmware/" target="_blank">DIYAUTOTUNE.com website</a> and follow the proceedures outlined in their documentation.</p>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="ms2maps" className="doc-section">
                      <h2 className="section-title">DIYPNP Basemap Downloads</h2>
                      <div className="section-block">
                        <p>These basemaps have been developed and refined over the last 10 years since I started using, building, and tuning megasquirts on miatas.</p>
                        <p>They are specifically developed to work in conjunction with my specific documentation, so if you did not use the same inputs and outputs as outlined in my assembly documentation (e.g., using DIYAUTOTUNE{"'"}s pinout), then these maps won{"'"}t work out-of-the-box for you.</p>
                        <p>If you did follow my documentation, I still have to say: <code>Use at your own risk.</code></p>
                        <p>These maps are loaded with a safe spark and fuel map, and are designed to get your engine running and idling, but they still must be fine-tuned for your specific application and setup.</p>
                        <div className="row">
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>90-93 DIYPNP Basemap:</h6>
                            <p><a href={msq9093diypnp} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                          <div className="col-md-4 col-sm-6 col-xs-12">
                            <h6>94-97 DIYPNP Basemap:</h6>
                            <p><a href={msq9497diypnp} class={btnColor} target="_blank"><i class="fa fa-download"></i> Download Basemap</a></p>
                          </div>
                        </div>
                      </div>{/*//section-block*/}
                    </section>{/*//doc-section*/}

                    <section id="sensor" className="doc-section">
                      <h2 className="section-title">Sensor Calibration</h2>
                      <div className="section-block">
                        <p>After firmware is flashed to your ECU, and the basemap is loaded, you must perform sensor calibration.</p>
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <h6>TPS</h6>
                            <p>From the ‘Tools’ menu.  Choose ‘Calibrate TPS’.</p>
                            <ul>
                              <li>Make sure the engine is off, and the key is on.</li>
                              <li>With your foot off of the throttle, click the ‘Closed Throttle ADC Count – GET CURRENT’ Button.</li>
                              <li>Put the throttle to the floor.  With your foot fully depressing the throttle, click the ‘Full Throttle ADC Count – GET CURRENT’ Button.</li>
                              <li>Click Close.</li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <h6>CLT Sensor</h6>
                            <p>From the ‘Tools’ menu. Choose ‘Calibrate Thermistor Tables’. Make sure ‘Coolant Temperature Sensor’ is selected at the top.</p>
                            <ul>
                              <li><strong>For 90-97:</strong><br/>From ‘Common Sensor Values’, select: <strong>RX-7_CLT(S4 & S5)</strong>.</li>
                              <li><strong>For 99+:</strong><br/>
                                <div class="table-responsive">
                                    <table class="table">
                                      <tbody>
                                        <tr class="style12">
                                          <td class="style1"><strong>Temperature&nbsp;&nbsp;&nbsp; F / C</strong></td>
                                          <td class="style1"><strong>Resistance In Ohms</strong></td>
                                        </tr>
                                        <tr class="style12">
                                          <td class="style1">14 / -10</td>
                                          <td class="style1">9000</td>
                                        </tr>
                                        <tr class="style12">
                                          <td class="style1">68 / 20</td>
                                          <td class="style1">2500</td>
                                        </tr>
                                        <tr class="style12">
                                        <td class="style1">176 / 80</td>
                                        <td class="style1">320</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </li>
                              <li>Click ‘Write to Controller’ to load.</li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <h6>AIT Sensor</h6>
                            <p>From the ‘Tools’ menu. Choose ‘Calibrate Thermistor Tables’. Make sure ‘Air Temperature Sensor’ is selected at the top.</p>
                            <ul>
                              <li><strong>For GM AIT:</strong><br/>From ‘Common Sensor Values’, select: <strong>GM</strong>.</li>
                              <li><strong>For AFM/MAF AIT:</strong><br/>From ‘Common Sensor Values’, select: <strong>RX-7_AFM(S5 in AFM)</strong>.</li>
                              <li>Click ‘Write to Controller’.  Once finished writing, click ‘Close’.</li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <h6>AFR Sensor</h6>
                            <p>From the ‘Tools’ menu. Choose ‘Calibrate AFR Table’.</p>
                            <ul>
                              <li>Choose your O2 Sensor from the list.  Choose Narrowband for the stock O2 Sensor.  Or select your wideband and the proper configuration of said wideband from the drop-down list.</li>
                              <li>Click ‘Write to Controller’.  Once finished writing, click ‘Close’.</li>
                            </ul>
                          </div>
                        </div>
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

            </div> {/*//container*/}
          </div>{/*//doc-wrapper*/}
          <div id="promo-block" class="promo-block promo-block-2">
            <div class="container">
                <div class="promo-block-inner">
                    <h3 class="promo-title text-center">Like DIYAUTOTUNE says: You are responsible for your own results!</h3>
                    <div class="row">
                        <div class="figure-holder col-md-3 col-sm-4 col-xs-8">
                            <i class="fa fa-exclamation-triangle fa-5x pull-right"></i>
                        </div>
                        <div class="content-holder col-md-9 col-sm-8 col-xs-12">
                            <div class="content-holder-inner">
                                <div class="desc">
                                    <h4 class="content-title"><strong>I am only human</strong></h4>
                                    <p>While these are the actual basemaps I load onto Megasquirts I buillt myself, please use your best judgement when loading them. I know what I{"'"}m doing and know what to look for and change.</p>
                                    <p>I{"'"}m giving this my best attempt to disseminate all my knowledge for your assembly, installation, and tuning to go as smoothly as possible.</p>
                                    <p>Wrong settings can make things go boom; if you have questions, please ask.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>


        </div>
    );

  }
}
