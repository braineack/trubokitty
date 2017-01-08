
import { EventEmitter } from "events";

class Connector9697 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'1A',wirecolor:'B/G',function:'FAN', mscolor:'WB', pin:'X - 1', output:'INJ G', squarecolor:''},
      {id:'1B',wirecolor:'BLU/W',function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F', squarecolor:''},
      {id:'1C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1D',wirecolor:'WHT/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1E',wirecolor:'Y/B',function:'CEL', mscolor:'WR', pin:'X - 7', output:'INJ E', squarecolor:''},
      {id:'1F',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1G',wirecolor:'BLU/B',function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H', squarecolor:''},
      {id:'1H',wirecolor:'R/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1I',wirecolor:'LTG/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1K',wirecolor:'LTG/B',function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG', squarecolor:''},
      {id:'1L',wirecolor:'BRN/W',function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN', squarecolor:''},
      {id:'1M',wirecolor:'GRN/R',function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW', squarecolor:''},
      {id:'1N',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1O',wirecolor:'B/LTG',function:'SGND', mscolor:'B', pin:'M - 7', output:'', squarecolor:''},
      {id:'1P',wirecolor:'B/O',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1Q',wirecolor:'GRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1R',wirecolor:'GRN',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1T',wirecolor:'GN/BL',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'1U',wirecolor:'LTG',function:'FUELP', mscolor:'V', pin:'MS - 37', output:'', squarecolor:''},
      {id:'1V',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3A',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3B',wirecolor:'R/W',function:'EBC', mscolor:'GRNR', pin:'X - 6', output:'', squarecolor:''},
      {id:'3C',wirecolor:'BLU/R',function:'NBO2', mscolor:'P', pin:'MS - 23', output:'', squarecolor:''},
      {id:'3D',wirecolor:'R/BLU',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3F',wirecolor:'R/B',function:'TPS', mscolor:'BL', pin:'M - 22', output:'', squarecolor:''},
      {id:'3G',wirecolor:'BLU/W',function:'CLT', mscolor:'Y', pin:'MS - 21', output:'', squarecolor:''},
      {id:'3H',wirecolor:'BRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3I',wirecolor:'LTG/W',function:'5VREF', mscolor:'G', pin:'MS - 26', output:'', squarecolor:''},
      {id:'3J',wirecolor:'LTG/R',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3K',wirecolor:'R/B',function:'AIT', mscolor:'O', pin:'MS - 20', output:'', squarecolor:''},
      {id:'3L',wirecolor:'R',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3M',wirecolor:'R/W',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3N',wirecolor:'B/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'3O',wirecolor:'B/BLU',function:'SGND', mscolor:'B', pin:'M - 2', output:'', squarecolor:''},
      {id:'3P',wirecolor:'BLU/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4A',wirecolor:'B/LGN',function:'SGND', mscolor:'B', pin:'MS - 2', output:'', squarecolor:''},
      {id:'4B',wirecolor:'W/R',function:'+12v', mscolor:'R', pin:'MS - 28', output:'', squarecolor:''},
      {id:'4C',wirecolor:'B',function:'GRND', mscolor:'B', pin:'MS - 9-10', output:'', squarecolor:''},
      {id:'4D',wirecolor:'B',function:'GRND', mscolor:'B', pin:'X - 2&3', output:'', squarecolor:''},
      {id:'4E',wirecolor:'GRN/O',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4F',wirecolor:'W',function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:'', squarecolor:''},
      {id:'4G',wirecolor:'Y/BLU',function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:'', squarecolor:''},
      {id:'4H',wirecolor:'GRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4I',wirecolor:'BLU/R',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4J',wirecolor:'Y/GRN',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4L',wirecolor:'BLK/W',function:'TACH', mscolor:'GO', pin:'X - 26', squarecolor:''},
      {id:'4M',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4N',wirecolor:'BRN/Y',function:'IGN A', mscolor:'Y', pin:'X - 13', output:'', squarecolor:''},
      {id:'4O',wirecolor:'Y',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4P',wirecolor:'Y/W',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4Q',wirecolor:'BLU/O',function:'IDLE', mscolor:'GP', pin:'X - 9', output:'', squarecolor:''},
      {id:'4R',wirecolor:'BRN',function:'IGN B', mscolor:'YO', pin:'X - 33', output:'', squarecolor:''},
      {id:'4S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4T',wirecolor:'Y/R',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4U',wirecolor:'GRN/W',function:'INJ A', mscolor:'W', pin:'X -19', output:'(CLY 1)', squarecolor:''},
      {id:'4V',wirecolor:'GRN',function:'INJ D', mscolor:'WP', pin:'X -10', output:'(CLY 2)', squarecolor:''},
      {id:'4W',wirecolor:'BLY/Y',function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)', squarecolor:''},
      {id:'4X',wirecolor:'V',function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)', squarecolor:''},
      {id:'4Y',wirecolor:'Y',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
      {id:'4Z',wirecolor:'Y/B',function:'', mscolor:'', pin:'', output:'', squarecolor:''},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector9697 = new Connector9697;

export default connector9697;
