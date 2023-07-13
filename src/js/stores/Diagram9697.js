
import { EventEmitter } from "events";

class Connector9697 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'1A',wirecolor:'B/G',function:'FAN', mscolor:'WB', pin:'X - 1', output:'INJ G', squarecolor:'filled', fullfunction:'Main Fan Output', fullcolor:'White/Blue'},
      {id:'1B',wirecolor:'BLU/W',function:'A/C FAN', mscolor:'WG', pin:'X - 4', output:'INJ F', squarecolor:'filled', fullfunction:'A/C Fan Output', fullcolor:'White/Green'},
      {id:'1C',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1D',wirecolor:'WHT/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1E',wirecolor:'Y/B',function:'CEL', mscolor:'WR', pin:'X - 7', output:'INJ E', squarecolor:'filled', fullfunction:'CEL Light', fullcolor:'White/Red'},
      {id:'1F',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1G',wirecolor:'BLU/B',function:'A/C OUT', mscolor:'WV', pin:'X - 20', output:'INJ H', squarecolor:'filled', fullfunction:'A/C Compressor Out', fullcolor:'White/Purple'},
      {id:'1H',wirecolor:'R/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1I',wirecolor:'LTG/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1J',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1K',wirecolor:'LTG/B',function:'A/C IN', mscolor:'G', pin:'X - 30', output:'DTALOG', squarecolor:'filled', fullfunction:'A/C Switch Input', fullcolor:'Gray'},
      {id:'1L',wirecolor:'BRN/W',function:'LAUNCH', mscolor:'GR', pin:'X - 11', output:'LNCHIN', squarecolor:'filled', fullfunction:'Clutch Switch Input', fullcolor:'Gray/Red'},
      {id:'1M',wirecolor:'GRN/R',function:'VSS', mscolor:'GV', pin:'X - 28', output:'TBLSW', squarecolor:'filled', fullfunction:'Vehicle Speed Sensor', fullcolor:'Gray/Purple'},
      {id:'1N',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1O',wirecolor:'B/LTG',function:'SGND', mscolor:'B', pin:'MS - 7', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'1P',wirecolor:'B/O',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1Q',wirecolor:'GRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1R',wirecolor:'GRN',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1T',wirecolor:'GN/BL',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1U',wirecolor:'LTG',function:'FUELP', mscolor:'V', pin:'MS - 37', output:'', squarecolor:'filled', fullfunction:'Fuel Pump Output', fullcolor:'Purple'},
      {id:'1V',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3A',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3B',wirecolor:'R/W',function:'EBC', mscolor:'GRNR', pin:'X - 6', output:'', squarecolor:'filled', fullfunction:'Boost Control', fullcolor:'Green/Red'},
      {id:'3C',wirecolor:'BLU/R',function:'NBO2', mscolor:'P', pin:'MS - 23', output:'', squarecolor:'filled', fullfunction:'OE Narrowband Input', fullcolor:'Pink'},
      {id:'3D',wirecolor:'R/BLU',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3E',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3F',wirecolor:'R/B',function:'TPS', mscolor:'BL', pin:'MS - 22', output:'', squarecolor:'filled', fullfunction:'Throttle Position Sensor', fullcolor:'Light Blue'},
      {id:'3G',wirecolor:'BLU/W',function:'CLT', mscolor:'Y', pin:'MS - 21', output:'', squarecolor:'filled', fullfunction:'Coolant Temperature Sensor', fullcolor:'Yellow'},
      {id:'3H',wirecolor:'BRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3I',wirecolor:'LTG/W',function:'5VREF', mscolor:'G', pin:'MS - 26', output:'', squarecolor:'filled', fullfunction:'5v Reference', fullcolor:'Gray'},
      {id:'3J',wirecolor:'LTG/R',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3K',wirecolor:'R/B',function:'AIT', mscolor:'O', pin:'MS - 20', output:'', squarecolor:'filled', fullfunction:'Air Intake Temperature Sensor', fullcolor:'Orange'},
      {id:'3L',wirecolor:'R',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3M',wirecolor:'R/W',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3N',wirecolor:'B/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'3O',wirecolor:'B/BLU',function:'SGND', mscolor:'B', pin:'MS - 2', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'3P',wirecolor:'BLU/Y',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4A',wirecolor:'B/LGN',function:'SGND', mscolor:'B', pin:'MS - 1', output:'', squarecolor:'filled', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'4B',wirecolor:'W/R',function:'+12v', mscolor:'R', pin:'MS - 28', output:'', squarecolor:'filled', fullfunction:'+12v Power', fullcolor:'Red'},
      {id:'4C',wirecolor:'B',function:'GRND', mscolor:'B', pin:'MS - 9-10', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'4D',wirecolor:'B',function:'GRND', mscolor:'B', pin:'X - 2&3', output:'', squarecolor:'filled', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'4E',wirecolor:'GRN/O',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4F',wirecolor:'W',function:'CRNK IN', mscolor:'WB', pin:'MS - 24', output:'', squarecolor:'filled', fullfunction:'Crank Sensor Input', fullcolor:'Black/White'},
      {id:'4G',wirecolor:'Y/BLU',function:'CAM IN', mscolor:'GRN', pin:'X - 32', output:'', squarecolor:'filled', fullfunction:'Cam Sensor Input', fullcolor:'Green'},
      {id:'4H',wirecolor:'GRN/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4I',wirecolor:'BLU/R',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4J',wirecolor:'Y/GRN',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4K',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4L',wirecolor:'BLK/W',function:'TACH', mscolor:'GO', pin:'X - 26', squarecolor:'filled', fullfunction:'Tach Output', fullcolor:'Green/Orange'},
      {id:'4M',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4N',wirecolor:'BRN/Y',function:'IGN A', mscolor:'Y', pin:'X - 14', output:'', squarecolor:'filled', fullfunction:'Spark A', fullcolor:'Yellow'},
      {id:'4O',wirecolor:'Y',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4P',wirecolor:'Y/W',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4Q',wirecolor:'BLU/O',function:'IDLE', mscolor:'GP', pin:'X - 9', output:'', squarecolor:'filled', fullfunction:'Idle Valve', fullcolor:'Green/Pink'},
      {id:'4R',wirecolor:'BRN',function:'IGN B', mscolor:'YO', pin:'X - 33', output:'', squarecolor:'filled', fullfunction:'Spark B', fullcolor:'Yellow/Orange'},
      {id:'4S',wirecolor:'',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4T',wirecolor:'Y/R',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4U',wirecolor:'GRN/W',function:'INJ A', mscolor:'W', pin:'X -19', output:'(CLY 1)', squarecolor:'filled', fullfunction:'Injector A', fullcolor:'White'},
      {id:'4V',wirecolor:'GRN',function:'INJ D', mscolor:'WP', pin:'X -10', output:'(CLY 2)', squarecolor:'filled', fullfunction:'Injector D', fullcolor:'White/Pink'},
      {id:'4W',wirecolor:'BLY/Y',function:'INJ B', mscolor:'WO', pin:'X - 16', output:'(CLY 3)', squarecolor:'filled', fullfunction:'Injector B', fullcolor:'White/Orange'},
      {id:'4X',wirecolor:'V',function:'INJ C', mscolor:'WLTGRN', pin:'X - 13', output:'(CLY 4)', squarecolor:'filled', fullfunction:'Injector C', fullcolor:'White/Green'},
      {id:'4Y',wirecolor:'Y',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'4Z',wirecolor:'Y/B',function:'', mscolor:'', pin:'', output:'', squarecolor:'', fullfunction:'', fullcolor:''},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const connector9697 = new Connector9697;

export default connector9697;
