
import { EventEmitter } from "events";

class Connector9900 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'1A',wirecolor:'BLU/R',function:'', mscolor:'', pin:'', output:''},
      {id:'1B',wirecolor:'W/R',function:'+12v', mscolor:'R', pin:'MS - 28', output:''},
      {id:'1C',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'1D',wirecolor:'GRN/W',function:'', mscolor:'', pin:'', output:''},
      {id:'1E',wirecolor:'W/BLU',function:'CEL', mscolor:'LTGRNB', pin:'X - 24', output:'NTRS2'},
      {id:'1F',wirecolor:'GRN',function:'', mscolor:'', pin:'', output:''},
      {id:'1G',wirecolor:'BRN',function:'', mscolor:'', pin:'', output:''},
      {id:'1H',wirecolor:'GRN/R',function:'', mscolor:'', pin:'', output:''},
      {id:'1I',wirecolor:'BLU/W',function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F'},
      {id:'1J',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'1K',wirecolor:'W/GRN',function:'', mscolor:'', pin:'', output:''},
      {id:'1L',wirecolor:'BRN/Y',function:'', mscolor:'', pin:'', output:''},
      {id:'1M',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'1N',wirecolor:'P/B',function:'', mscolor:'', pin:'', output:''},
      {id:'1O',wirecolor:'GRY/R',function:'ALTNTR', mscolor:'LTGRNGRN', pin:'X - 27', output:'VVT'},
      {id:'1P',wirecolor:'LTG/B',function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG'},
      {id:'1Q',wirecolor:'BRN/R',function:'CHRG', mscolor:'WR', pin:'X - 24', output:'INJ E'},
      {id:'1R',wirecolor:'R/GRN',function:'FAN', mscolor:'WB', pin:'X - 1', output:'INJ G'},
      {id:'1S',wirecolor:'BLU/B',function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H'},
      {id:'1T',wirecolor:'GRY',function:'', mscolor:'', pin:'', output:''},
      {id:'1U',wirecolor:'V/Y',function:'', mscolor:'', pin:'', output:''},
      {id:'1V',wirecolor:'V',function:'', mscolor:'', pin:'', output:''},
      {id:'2A',wirecolor:'R/GRN',function:'', mscolor:'', pin:'', output:''},
      {id:'2B',wirecolor:'P/BLU',function:'AIT', mscolor:'O', pin:'MS - 20', output:''},
      {id:'2C',wirecolor:'BLU',function:'NBO2', mscolor:'P', pin:'MS - 23', output:''},
      {id:'2D',wirecolor:'W/B',function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW'},
      {id:'2E',wirecolor:'R/BLU',function:'CLT', mscolor:'Y', pin:'MS - 21', output:''},
      {id:'2F',wirecolor:'W',function:'KNOCK', mscolor:'OR', pin:'MS - 5', output:'SPR3'},
      {id:'2G',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'2H',wirecolor:'GRY/BL',function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:''},
      {id:'2I',wirecolor:'LTG/R',function:'5VREF', mscolor:'G', pin:'MS - 26', output:''},
      {id:'2J',wirecolor:'GRY/R',function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:''},
      {id:'2K',wirecolor:'GRN/O',function:'TACH', mscolor:'GO', pin:'X - 26', output:''},
      {id:'2L',wirecolor:'LTG/B',function:'EBC', mscolor:'GRNR', pin:'X - 6', output:''},
      {id:'2M',wirecolor:'V',function:'', mscolor:'', pin:'', output:''},
      {id:'2N',wirecolor:'W/GRN',function:'', mscolor:'', pin:'', output:''},
      {id:'2O',wirecolor:'P/B',function:'', mscolor:'', pin:'', output:''},
      {id:'2P',wirecolor:'P',function:'', mscolor:'', pin:'', output:''},
      {id:'3A',wirecolor:'B/Y',function:'GRND', mscolor:'B', pin:'X - 2&3', output:''},
      {id:'3B',wirecolor:'B/Y',function:'GRND', mscolor:'B', pin:'MS - 9-10', output:''},
      {id:'3C',wirecolor:'B/BLU',function:'SGND', mscolor:'B', pin:'MS - 2', output:''},
      {id:'3D',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'3E',wirecolor:'GRN/B',function:'TPS', mscolor:'BL', pin:'M - 22', output:''},
      {id:'3F',wirecolor:'B/R',function:'SGND', mscolor:'B', pin:'M - 1', output:''},
      {id:'3G',wirecolor:'BRN/Y',function:'IGN A', mscolor:'Y', pin:'X - 14', output:''},
      {id:'3H',wirecolor:'BRN',function:'IGN B', mscolor:'YO', pin:'X - 33', output:''},
      {id:'3I',wirecolor:'BRN/W',function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN'},
      {id:'3J',wirecolor:'R',function:'', mscolor:'', pin:'', output:''},
      {id:'3K',wirecolor:'BRN/B',function:'', mscolor:'', pin:'', output:''},
      {id:'3L',wirecolor:'BRN/R',function:'', mscolor:'', pin:'', output:''},
      {id:'3M',wirecolor:'O',function:'IDLE', mscolor:'GP', pin:'X - 9', output:''},
      {id:'3N',wirecolor:'LTG',function:'FUELP', mscolor:'V', pin:'MS - 37', output:''},
      {id:'3O',wirecolor:'V/R',function:'+12v', mscolor:'R', pin:'MS - 28', output:''},
      {id:'3P',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'3Q',wirecolor:'W/BLU',function:'VICS', mscolor:'LTGRN', pin:'X - 24', output:'NTRS1'},
      {id:'3R',wirecolor:'',function:'', mscolor:'', pin:'', output:''},
      {id:'3S',wirecolor:'GRY',function:'', mscolor:'', pin:'', output:''},
      {id:'3T',wirecolor:'GRY/B',function:'', mscolor:'', pin:'', output:''},
      {id:'3U',wirecolor:'BLU/O',function:'', mscolor:'', pin:'', output:''},
      {id:'3V',wirecolor:'R/Y',function:'', mscolor:'', pin:'', output:''},
      {id:'3W',wirecolor:'Y/B',function:'INJ A', mscolor:'W', pin:'X -19', output:'(CLY 1)'},
      {id:'3X',wirecolor:'V/GRN',function:'INJ D', mscolor:'WP', pin:'X -10', output:'(CLY 2)'},
      {id:'3Y',wirecolor:'Y/R',function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)'},
      {id:'3Z',wirecolor:'Y/GRN',function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)'},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector9900 = new Connector9900;

export default connector9900;
