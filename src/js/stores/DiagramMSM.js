
import { EventEmitter } from "events";

class Connector0105 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'2A',wirecolor:'INJ A',function:'INJ A', mscolor:'W', pin:'X - 19', output:'(CLY 1)', squarecolor:'filled', fullfunction:'Injector A', fullcolor:'White'},
      {id:'2B',wirecolor:'MRELAY',function:'MRELAY', mscolor:'LTGRN', pin:'X - 24', output:'NTRS1', squarecolor:'LTGRN', fullfunction:'Main Relay Switch', fullcolor:'Lt Green'},
      {id:'2C',wirecolor:'A/CFAN',function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F', squarecolor:'filled', fullfunction:'A/C Fan Output', fullcolor:'White/Green'},
      {id:'2D',wirecolor:'INJ D',function:'INJ D', mscolor:'WP', pin:'X - 10', output:'(CLY 2)', squarecolor:'filled', fullfunction:'Injector D', fullcolor:'White/Pink'},
      {id:'2E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2F',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2G',wirecolor:'INJ B',function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)', squarecolor:'filled', fullfunction:'Injector B', fullcolor:'White/Orange'},
      {id:'2H',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2I',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2J',wirecolor:'INJ C',function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)', squarecolor:'filled', fullfunction:'Injector C', fullcolor:'White/Green'},
      {id:'2K',wirecolor:'A/COUT',function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H', squarecolor:'filled', fullfunction:'A/C Compressor Out', fullcolor:'White/Purple'},
      {id:'2M',wirecolor:'FUEL',function:'FUELP', mscolor:'V', pin:'MS - 37', output:'', squarecolor:'filled', fullfunction:'Fuel Pump Output', fullcolor:'Purple'},
      {id:'2N',wirecolor:'VTSC',function:'VTSC', mscolor:'LTGRNB', pin:'X - 25', output:'NTRS2', squarecolor:'filled', fullfunction:'Variable Tumble Control System (VTCS)', fullcolor:'Lt Green/Blue'},
      {id:'2O',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2P',wirecolor:'+12v',function:'+12v', mscolor:'R', pin:'MS - 29', output:'', squarecolor:'filled', fullfunction:'+12v Idle Valve Power', fullcolor:'Red'},
      {id:'2Q',wirecolor:'IDLE',function:'IDLE', mscolor:'GP', pin:'X - 9', output:'', squarecolor:'filled', fullfunction:'Idle Valve', fullcolor:'Green/Pink'},
      {id:'2R',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3A',wirecolor:'INJGND',function:'INJGND', mscolor:'B', pin:'X - 2&3', output:'', squarecolor:'filled', fullfunction:'Injector Grounds', fullcolor:'Black'},
      {id:'3B',wirecolor:'GND',function:'GND', mscolor:'B', pin:'MS - 8&9', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'3C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3D',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3F',wirecolor:'IGNA',function:'IGN A', mscolor:'Y', pin:'X - 14', output:'', squarecolor:'filled', fullfunction:'Spark A', fullcolor:'Yellow'},
      {id:'3H', wirecolor: 'FAN', function: 'FAN', mscolor: 'WB', pin: 'X - 1', output: 'INJ G', squarecolor: 'WB BTXT', fullfunction: 'Main Fan Output', fullcolor: 'White/Blue' },
      {id:'3I', wirecolor: 'INGB', function: 'IGN B', mscolor: 'YO', pin: 'X - 33', output: '', squarecolor: 'filled', fullfunction: 'Spark B', fullcolor: 'Yellow/Orange' },
      {id:'3J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3L',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3M',wirecolor:'ALTNTR',function:'ALTNTR', mscolor:'LTGRNGRN', pin:'X - 27', output:'VVT', squarecolor:'filled', fullfunction:'Alternator Output', fullcolor:'Lt Green/Green'},
      {id:'3N',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3O',wirecolor:'TACH',function:'TACH', mscolor:'GO', pin:'X - 26', output:'', squarecolor:'filled', fullfunction:'Tach Output', fullcolor:'Green/Orange'},
      {id:'3P',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3Q',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3T',wirecolor:'VSS',function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW', squarecolor:'filled', fullfunction:'Vehicle Speed Sensor', fullcolor:'Gray/Purple'},
      {id:'3U',wirecolor:'LOW BAT',function:'CHRG', mscolor:'WR', pin:'X - 7', output:'INJ E', squarecolor:'filled', fullfunction:'Low Battery Warning Light', fullcolor:'White/Red'},
      {id:'3V',wirecolor:'CAM IN',function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:'', squarecolor:'filled', fullfunction:'Cam Sensor Input', fullcolor:'Green'},
      {id:'3W',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3X',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3Y',wirecolor:'CRNKIN',function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:'', squarecolor:'filled', fullfunction:'Crank Sensor Input', fullcolor:'Black/White'},
      {id:'3Z',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4A',wirecolor:'GND',function:'GND', mscolor:'B', pin:'MS - 10', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'4B',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4D',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4F',wirecolor:'A/C IN',function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG', squarecolor:'filled', fullfunction:'A/C Switch Input', fullcolor:'Gray'},
      {id:'4H',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4I',wirecolor:'LAUNCH',function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN', squarecolor:'filled', fullfunction:'Clutch Switch Input', fullcolor:'Gray/Red'},
      {id:'4J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4L',wirecolor:'5VREF',function:'5VREF', mscolor:'G', pin:'MS - 26', output:'', squarecolor:'filled', fullfunction:'Clutch Switch Input', fullcolor:'Gray/Red'},
      {id:'4M',wirecolor:'KNOCK',function:'KNCK', mscolor:'OR', pin:'MS - 5', output:'SPR3', squarecolor:'filled', fullfunction:'Knock Sensor Input', fullcolor:'Orange/Red'},
      {id:'4N',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4O',wirecolor:'SGND',function:'SGND', mscolor:'B', pin:'MS - 1', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'4P',wirecolor:'CLT',function:'CLT', mscolor:'Y', pin:'MS - 21', output:'', squarecolor:'filled', fullfunction:'Coolant Temperature Sensor', fullcolor:'Yellow'},
      {id:'4R',wirecolor:'AIT',function:'AIT', mscolor:'O', pin:'MS - 20', output:'', squarecolor:'filled', fullfunction:'Air Intake Temperature Sensor', fullcolor:'Orange'},
      {id:'4S',wirecolor:'+12v',function:'+12v', mscolor:'R', pin:'MS - 28', output:'', squarecolor:'filled', fullfunction:'+12v Power', fullcolor:'Red'},
      {id:'4T',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4U',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4V',wirecolor:'TPS',function:'TPS', mscolor:'BL', pin:'MS - 22', output:'', squarecolor:'filled', fullfunction:'Throttle Position Sensor', fullcolor:'Light Blue'},
      {id:'4W',wirecolor:'NBO2',function:'NBO2', mscolor:'P', pin:'MS - 23', output:'', squarecolor:'filled', fullfunction:'OE Narrowband Input', fullcolor:'Pink'},
      {id:'4X',wirecolor:'EBC',function:'EBC', mscolor:'GRNR', pin:'X - 6', output:'', squarecolor:'filled', fullfunction:'Boost Control', fullcolor:'Green/Red'},
      {id:'4Y',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AA',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AB',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AC',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AD',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AE',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AF',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AG',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4AH',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector0105 = new Connector0105;

export default connector0105;
