
import { EventEmitter } from "events";

class Connector0105 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'2A',wirecolor:'INJ A',function:'INJ A', mscolor:'W', pin:'X -19', output:'(CLY 1)', squarecolor:'filled'},
      {id:'2B',wirecolor:'FAN',function:'FAN', mscolor:'WB', pin:'X - 1', output:'INJ G', squarecolor:'WB BTXT'},
      {id:'2C',wirecolor:'A/CFAN',function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F', squarecolor:'filled'},
      {id:'2D',wirecolor:'INJ D',function:'INJ D', mscolor:'WP', pin:'X -10', output:'(CLY 2)', squarecolor:'filled'},
      {id:'2E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'2F',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'2G',wirecolor:'INJ B',function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)', squarecolor:'filled'},
      {id:'2H',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'2I',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'2J',wirecolor:'INJ C',function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)', squarecolor:'filled'},
      {id:'2K',wirecolor:'A/COUT',function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H', squarecolor:'filled'},
      {id:'2M',wirecolor:'FUEL',function:'FUELP', mscolor:'V', pin:'MS - 37', output:'', squarecolor:'filled'},
      {id:'2N',wirecolor:'VTSC',function:'VTSC', mscolor:'LTGRNB', pin:'X - 24', output:'NTRS2', squarecolor:'filled'},
      {id:'2O',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'2P',wirecolor:'+12v',function:'+12v', mscolor:'R', pin:'MS - 29', output:'', squarecolor:'filled'},
      {id:'2Q',wirecolor:'IDLE',function:'IDLE', mscolor:'GP', pin:'X - 9', output:'', squarecolor:'filled'},
      {id:'2R',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3A',wirecolor:'INJGND',function:'INJGND', mscolor:'B', pin:'X - 2&3', output:'', squarecolor:'filled'},
      {id:'3B',wirecolor:'GND',function:'GND', mscolor:'B', pin:'MS - 8&9', output:'', squarecolor:'filled'},
      {id:'3C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3D',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3F',wirecolor:'IGNA',function:'IGN A', mscolor:'Y', pin:'X - 14', output:'', squarecolor:'filled'},
      {id:'3H',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3I',wirecolor:'INGB',function:'IGN B', mscolor:'YO', pin:'X - 33', output:'', squarecolor:'filled'},
      {id:'3J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3L',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3M',wirecolor:'ALTNTR',function:'ALTNTR', mscolor:'LTGRNGRN', pin:'X - 27', output:'VVT', squarecolor:'filled'},
      {id:'3N',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3O',wirecolor:'TACH',function:'TACH', mscolor:'GO', pin:'X - 26', output:'', squarecolor:'filled'},
      {id:'3P',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3Q',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3T',wirecolor:'VSS',function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW', squarecolor:'filled'},
      {id:'3U',wirecolor:'LOW BAT',function:'CHRG', mscolor:'WR', pin:'X - 24', output:'INJ E', squarecolor:'filled'},
      {id:'3V',wirecolor:'CAM IN',function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:'', squarecolor:'filled'},
      {id:'3W',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3X',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3Y',wirecolor:'CRNKIN',function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:'', squarecolor:'filled'},
      {id:'3Z',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4A',wirecolor:'GND',function:'GND', mscolor:'B', pin:'MS - 10', output:'', squarecolor:'filled'},
      {id:'4B',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4D',wirecolor:'VVT PWR',function:'+12v', mscolor:'R', pin:'MS - 30', output:'', squarecolor:'filled'},
      {id:'4E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4F',wirecolor:'A/C IN',function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG', squarecolor:'filled'},
      {id:'4H',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4I',wirecolor:'LAUNCH',function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN', squarecolor:'filled'},
      {id:'4J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4L',wirecolor:'5VREF',function:'5VREF', mscolor:'G', pin:'MS - 26', output:'', squarecolor:'filled'},
      {id:'4M',wirecolor:'KNOCK',function:'KNCK', mscolor:'OR', pin:'MS - 5', output:'SPR3', squarecolor:'OR BTXT'},
      {id:'4N',wirecolor:'AIT',function:'AIT', mscolor:'O', pin:'MS - 20', output:'', squarecolor:'filled'},
      {id:'4O',wirecolor:'SGND',function:'SGND', mscolor:'B', pin:'MS - 1', output:'', squarecolor:'filled'},
      {id:'4P',wirecolor:'CLT',function:'CLT', mscolor:'Y', pin:'MS - 21', output:'', squarecolor:'filled'},
      {id:'4R',wirecolor:'VVT',function:'VVT', mscolor:'LTGRN', pin:'X - 24', output:'NTRS1', squarecolor:'filled'},
      {id:'4S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4T',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4U',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4V',wirecolor:'TPS',function:'TPS', mscolor:'BL', pin:'MS - 22', output:'', squarecolor:'filled'},
      {id:'4W',wirecolor:'NBO2',function:'NBO2', mscolor:'P', pin:'MS - 23', output:'', squarecolor:'filled'},
      {id:'4X',wirecolor:'EBC',function:'EBC', mscolor:'GRNR', pin:'X - 6', output:'', squarecolor:'filled'},
      {id:'4Y',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AA',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AB',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AC',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AD',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AE',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AF',wirecolor:'+12v',function:'+12v', mscolor:'R', pin:'MS - 28', output:'', squarecolor:'filled'},
      {id:'4AG',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4AH',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector0105 = new Connector0105;

export default connector0105;
