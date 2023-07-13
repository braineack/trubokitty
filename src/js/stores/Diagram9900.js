
import { EventEmitter } from "events";

class Connector9900 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'1A',wirecolor:'BLU/R', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1B',wirecolor:'W/R', function:'+12v', mscolor:'R', pin:'MS - 28', output:'', squarecolor:'filled', fullfunction:'+12v Power', fullcolor:'Red'},
      {id:'1C',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1D',wirecolor:'GRN/W', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1E',wirecolor:'W/BLU', function:'CEL', mscolor:'LTGRNB', pin:'X - 25', output:'NTRS2', squarecolor:'filled', fullfunction:'CEL Light', fullcolor:'Lt Green/Blue'},
      {id:'1F',wirecolor:'GRN', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1G',wirecolor:'BRN', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1H',wirecolor:'GRN/R', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1I',wirecolor:'BLU/W', function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F', squarecolor:'filled', fullfunction:'A/C Fan Output', fullcolor:'White/Green'},
      {id:'1J',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1K',wirecolor:'W/GRN', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1L',wirecolor:'BRN/Y', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1M',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1N',wirecolor:'P/B', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1O',wirecolor:'GRY/R', function:'ALTNTR', mscolor:'LTGRNGRN', pin:'X - 27', output:'VVT', squarecolor:'filled', fullfunction:'Alternator Output', fullcolor:'Lt Green/Green'},
      {id:'1P',wirecolor:'LTG/B', function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG', squarecolor:'filled', fullfunction:'A/C Switch Input', fullcolor:'Gray'},
      {id:'1Q',wirecolor:'BRN/R', function:'CHRG', mscolor:'WR', pin:'X - 7', output:'INJ E', squarecolor:'filled', fullfunction:'Low Battery Warning Light', fullcolor:'White/Red'},
      {id:'1R',wirecolor:'R/GRN', function:'FAN', mscolor:'WB', pin:'X - 1', output:'INJ G', squarecolor:'filled', fullfunction:'Main Fan Output', fullcolor:'White/Blue'},
      {id:'1S',wirecolor:'BLU/B', function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H', squarecolor:'filled', fullfunction:'A/C Compressor Out', fullcolor:'White/Purple'},
      {id:'1T',wirecolor:'GRY', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1U',wirecolor:'V/Y', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1V',wirecolor:'V', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2A',wirecolor:'R/GRN', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2B',wirecolor:'P/BLU', function:'AIT', mscolor:'O', pin:'MS - 20', output:'', squarecolor:'filled', fullfunction:'Air Intake Temperature Sensor', fullcolor:'Orange'},
      {id:'2C',wirecolor:'BLU', function:'NBO2', mscolor:'P', pin:'MS - 23', output:'', squarecolor:'filled', fullfunction:'OE Narrowband Input', fullcolor:'Pink'},
      {id:'2D',wirecolor:'W/B', function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW', squarecolor:'filled', fullfunction:'Vehicle Speed Sensor', fullcolor:'Gray/Purple'},
      {id:'2E',wirecolor:'R/BLU', function:'CLT', mscolor:'Y', pin:'MS - 21', output:'', squarecolor:'filled', fullfunction:'Coolant Temperature Sensor', fullcolor:'Yellow'},
      {id:'2F',wirecolor:'W', function:'KNOCK', mscolor:'OR', pin:'MS - 5', output:'SPR3', squarecolor:'filled', fullfunction:'Knock Sensor Input', fullcolor:'Orange/Red'},
      {id:'2G',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2H',wirecolor:'GRY/BL', function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:'', squarecolor: 'filled', fullfunction:'Cam Sensor Input', fullcolor:'Green'},
      {id:'2I',wirecolor:'LTG/R', function:'5VREF', mscolor:'G', pin:'MS - 26', output:'', squarecolor:'filled', fullfunction:'5v Reference', fullcolor:'Gray'},
      {id:'2J',wirecolor:'GRY/R', function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:'', squarecolor:'filled', fullfunction:'Crank Sensor Input', fullcolor:'Black/White'},
      {id:'2K',wirecolor:'GRN/O', function:'TACH', mscolor:'GO', pin:'X - 26', output:'', squarecolor:'filled', fullfunction:'Tach Output', fullcolor:'Green/Orange'},
      {id:'2L',wirecolor:'LTG/B', function:'EBC', mscolor:'GRNR', pin:'X - 6', output:'', squarecolor:'filled', fullfunction:'Boost Control', fullcolor:'Green/Red'},
      {id:'2M',wirecolor:'V', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2N',wirecolor:'W/GRN', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2O',wirecolor:'P/B', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2P',wirecolor:'P', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3A',wirecolor:'B/Y', function:'GRND', mscolor:'B', pin:'X - 2&3', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'3B',wirecolor:'B/Y', function:'GRND', mscolor:'B', pin:'MS - 9-10', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'3C',wirecolor:'B/BLU', function:'SGND', mscolor:'B', pin:'MS - 2', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'3D',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3E',wirecolor:'GRN/B', function:'TPS', mscolor:'BL', pin:'MS -  22', output:'', squarecolor:'filled', fullfunction:'Throttle Position Sensor', fullcolor:'Light Blue'},
      {id:'3F',wirecolor:'B/R', function:'SGND', mscolor:'B', pin:'MS -  1', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'3G',wirecolor:'BRN/Y', function:'IGN A', mscolor:'Y', pin:'X - 14', output:'', squarecolor:'filled', fullfunction:'Spark A', fullcolor:'Yellow'},
      {id:'3H',wirecolor:'BRN', function:'IGN B', mscolor:'YO', pin:'X - 33', output:'', squarecolor:'filled', fullfunction:'Spark B', fullcolor:'Yellow/Orange'},
      {id:'3I',wirecolor:'BRN/W', function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN', squarecolor:'filled', fullfunction:'Clutch Switch Input', fullcolor:'Gray/Red'},
      {id:'3J',wirecolor:'R', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3K',wirecolor:'BRN/B', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3L',wirecolor:'BRN/R', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3M',wirecolor:'O', function:'IDLE', mscolor:'GP', pin:'X - 9', output:'', squarecolor:'filled', fullfunction:'Idle Valve', fullcolor:'Green/Pink'},
      {id:'3N',wirecolor:'LTG', function:'FUELP', mscolor:'V', pin:'MS - 37', output:'', squarecolor:'filled', fullfunction:'Fuel Pump Output', fullcolor:'Purple'},
      {id:'3O',wirecolor:'V/R', function:'+12v', mscolor:'R', pin:'MS - 29', output:'', squarecolor:'filled', fullfunction:'+12v Idle Valve Power', fullcolor:'Red'},
      {id:'3P',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3Q',wirecolor:'W/BLU', function:'VICS', mscolor:'LTGRN', pin:'X - 24', output:'NTRS1', squarecolor:'filled', fullfunction:'Variable Inerita Charging System (VICS)', fullcolor:'Lt Green'},
      {id:'3R',wirecolor:'', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3S',wirecolor:'GRY', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3T',wirecolor:'GRY/B', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3U',wirecolor:'BLU/O', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3V',wirecolor:'R/Y', function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3W',wirecolor:'Y/B', function:'INJ A', mscolor:'W', pin:'X - 19', output:'(CLY 1)', squarecolor:'filled', fullfunction:'Injector A', fullcolor:'White'},
      {id:'3X',wirecolor:'V/GRN', function:'INJ D', mscolor:'WP', pin:'X - 10', output:'(CLY 2)', squarecolor:'filled', fullfunction:'Injector D', fullcolor:'White/Pink'},
      {id:'3Y',wirecolor:'Y/R', function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)', squarecolor:'filled', fullfunction:'Injector B', fullcolor:'White/Orange'},
      {id:'3Z',wirecolor:'Y/GRN', function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)', squarecolor:'filled', fullfunction:'Injector C', fullcolor:'White/Green'},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector9900 = new Connector9900;

export default connector9900;
