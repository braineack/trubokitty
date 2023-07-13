
import { EventEmitter } from "events";

class DiyPNPDiagram extends EventEmitter {
  constructor() {
    super()
    this.ninetythree = [
      {id:'AIT', pin:'4P'},
      {id:'CLT', pin:'4Q'},
      {id:'TPS', pin:'4L'},
      {id:'O2', pin:'4N'},
      {id:'VRplus', pin:''},
      {id:'VRminus', pin:''},
      {id:'OPTOplus', pin:''},
      {id:'OPTOminus', pin:'4E'},
      {id:'VR2', pin:'4G'},
      {id:'IAC', pin:'4W'},
      {id:'TACH', pin:'4I'},
      {id:'FUEL', pin:'4O'},
      {id:'INJ2', pin:'4U'},
      {id:'INJ1', pin:'4V'},
      {id:'12V', pin:'1B'},
      {id:'12V1', pin:''},
      {id:'12V2', pin:''},
      {id:'5VREF', pin:'1N'},
      {id:'5V', pin:''},
      {id:'SG', pin:'4C'},
      {id:'SG1', pin:'4D'},
      {id:'GND', pin:'4A'},
      {id:'GND1', pin:'4B'},
      {id:'GND2', pin:''},
      {id:'GND3', pin:''},
      {id:'IGN1', pin:'1G'},
      {id:'IGN2', pin:'1H'},
      {id:'WLED', pin:'1J'},
      {id:'ALED', pin:'1R'},
      {id:'INPUT1', pin:'', in:'1Q', out:'PE1'},
      {id:'INPUT2', pin:'', in:'1V', out:'FLEX'},
      {id:'BOOST', pin:'', in:'PAO', out:'4K'},
      {id:'SEQ', inj1:'4V', inj2:'DB15 (external)', inj3:'DB15 (external)', inj4:'4U',},
      {id:'NOTES', note:'This configuration pre-wires the DIYPNP for vTPS. You must DISCONNECT your OE TPS in this configuration, else the unit will not power up once installed. You should also install a 1K resistor between the TPS SIG (4L) and SGND (4C or 4D) to keep the TPS signal locked at 0%.  Without the resistor, your TPS input will slowly rise to 100% while driving. Once you perform the vTPS upgrade, you must remove the resistor. For information on the vTPS upgrade, view the installation section of this guide.',},
    ];
    this.ninetyfive = [
      {id:'AIT', pin:'4P'},
      {id:'CLT', pin:'4Q'},
      {id:'TPS', pin:'4M'},
      {id:'O2', pin:'4N'},
      {id:'VRplus', pin:''},
      {id:'VRminus', pin:''},
      {id:'OPTOplus', pin:''},
      {id:'OPTOminus', pin:'4E'},
      {id:'VR2', pin:'4G'},
      {id:'IAC', pin:'4W'},
      {id:'TACH', pin:'4I'},
      {id:'FUEL', pin:'4T'},
      {id:'INJ2', pin:'4Y, 4Z'},
      {id:'INJ1', pin:'4U, 4V'},
      {id:'12V', pin:'1B'},
      {id:'12V1', pin:''},
      {id:'12V2', pin:''},
      {id:'5VREF', pin:'4K'},
      {id:'5V', pin:''},
      {id:'SG', pin:'4C'},
      {id:'SG1', pin:'4D'},
      {id:'GND', pin:'4A'},
      {id:'GND1', pin:'4B'},
      {id:'GND2', pin:''},
      {id:'GND3', pin:''},
      {id:'IGN1', pin:'1G'},
      {id:'IGN2', pin:'1H'},
      {id:'WLED', pin:'1L'},
      {id:'ALED', pin:'1J, 4S'},
      {id:'INPUT1', pin:'', in:'1Q', out:'PE1'},
      {id:'INPUT2', pin:'', in:'1V', out:'FLEX'},
      {id:'BOOST', pin:'', in:'PAO', out:'4O'},
      {id:'SEQ', inj1:'4U', inj2:'4Y', inj3:'4Z', inj4:'4V',},
      {id:'NOTES', note:'',},
    ];
    this.ninetyseven = [
      {id:'AIT', pin:'3K'},
      {id:'CLT', pin:'3G'},
      {id:'TPS', pin:'3F'},
      {id:'O2', pin:'3C'},
      {id:'VRplus', pin:''},
      {id:'VRminus', pin:''},
      {id:'OPTOplus', pin:''},
      {id:'OPTOminus', pin:'4F'},
      {id:'VR2', pin:'4G'},
      {id:'IAC', pin:'4Q'},
      {id:'TACH', pin:'4L'},
      {id:'FUEL', pin:'1U'},
      {id:'INJ2', pin:'4U, 4W'},
      {id:'INJ1', pin:'4V, 4X'},
      {id:'12V', pin:'4B'},
      {id:'12V1', pin:''},
      {id:'12V2', pin:''},
      {id:'5VREF', pin:'3I'},
      {id:'5V', pin:''},
      {id:'SG', pin:'4A'},
      {id:'SG1', pin:'3O'},
      {id:'GND', pin:'4C'},
      {id:'GND1', pin:'4D'},
      {id:'GND2', pin:''},
      {id:'GND3', pin:''},
      {id:'IGN1', pin:'4N'},
      {id:'IGN2', pin:'4R'},
      {id:'WLED', pin:'1A'},
      {id:'ALED', pin:'1B, 1G'},
      {id:'INPUT1', pin:'', in:'1K', out:'PE1'},
      {id:'INPUT2', pin:'', in:'1L', out:'FLEX'},
      {id:'BOOST', pin:'', in:'PAO', out:'3B'},
      {id:'SEQ', inj1:'4U', inj2:'4V', inj3:'4W', inj4:'4X',},
      {id:'NOTES', note:'European models with immobilizers need to use (1V) for the fuel output pin.',},
    ];
  }

  get9093() {
    return this.ninetythree;
  }

  get9495() {
    return this.ninetyfive;
  }

  get9697() {
    return this.ninetyseven;
  }


}

const diyPNPDiagram = new DiyPNPDiagram;

export default diyPNPDiagram;
