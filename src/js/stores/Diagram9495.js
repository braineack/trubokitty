
import { EventEmitter } from "events";

class Diagram9495 extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {id:'1A', wirecolor:'L/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1B',wirecolor:'W/R',function:'+12v', mscolor:'R', pin:'MS-28', output:'', squarecolor:'', fullfunction:'+12v Power', fullcolor:'Red'},
      {id:'1C',wirecolor:'V',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1D',wirecolor:'W/G',function:'', mscolor:'LR', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1E',wirecolor:'Y/B',function:'CEL', mscolor:'WR', pin:'MSX-7', output:'INJ E', squarecolor:'', fullfunction:'CEL Light', fullcolor:'White/Red'},
      {id:'1F',wirecolor:'*',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1G',wirecolor:'Y/BR',function:'IGN A', mscolor:'Y', pin:'MSX-13', squarecolor:'', fullfunction:'Spark A', fullcolor:'Yellow'},
      {id:'1H',wirecolor:'BR',function:'IGN B', mscolor:'YO',pin:'MSX-33', output:'', squarecolor:'', fullfunction:'Spark B', fullcolor:'Yellow/Orange'},
      {id:'1I',wirecolor:'L/W',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1J',wirecolor:'L/B',function:'A/C OUT', mscolor:'WV', pin:'MSX-20', output:'INJ H', squarecolor:'', fullfunction:'A/C Compressor Out', fullcolor:'White/Purple'},
      {id:'1K',wirecolor:'B/LG',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1L',wirecolor:'B/G',function:'FAN', mscolor:'WB',pin:'MSX-1', output:'INJ G', squarecolor:'', fullfunction:'Main Fan Output', fullcolor:'White/Blue'},
      {id:'1M',wirecolor:'R/G',function:'VSS IN', mscolor:'GB', pin:'MSX-28', output:'TBSWCH', squarecolor:'', fullfunction:'Vehicle Speed Sensor', fullcolor:'Green/Blue'},
      {id:'1N',wirecolor:'R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1O',wirecolor:'B/G',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1P',wirecolor:'L/Y',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1Q',wirecolor:'B/LG',function:'A/C IN', mscolor:'G', pin:'MSX-30', output:'DTALOG', squarecolor:'', fullfunction:'A/C Switch Input', fullcolor:'Gray'},
      {id:'1R',wirecolor:'Y',function:'KNOCK', mscolor:'OR', pin:'MS-5', output:'SPR 3', squarecolor:'', fullfunction:'Added Knock Sensor (via Purge Valve)', fullcolor:'Orange/Red'},
      {id:'1S',wirecolor:'L/O',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1T',wirecolor:'Y/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1U',wirecolor:'R/B',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'1V',wirecolor:'BR/W',function:'LAUNCH', mscolor:'GR', pin:'MSX-11', output:'LNCHIN', squarecolor:'', fullfunction:'Clutch Switch Input', fullcolor:'Gray/Red'},
      {id:'2A',wirecolor:'B',function:'GRND', mscolor:'B', pin:'MS-8&9', squarecolor:'', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'2B',wirecolor:'B',function:'GRND', mscolor:'B', pin:'MSX-2&3', squarecolor:'', fullfunction:'Chassis Ground', fullcolor:'Black'},
      {id:'2C',wirecolor:'B/LG',function:'SGND', mscolor:'B', pin:'MS-1', squarecolor:'', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'2D',wirecolor:'B/LG',function:'SGND', mscolor:'B', pin:'MS-2', squarecolor:'', fullfunction:'Sensor Ground', fullcolor:'Black'},
      {id:'2E',wirecolor:'W',function:'CRNK IN', mscolor:'BW', pin:'MS-24', squarecolor:'', fullfunction:'Crank Sensor Input', fullcolor:'Black/White'},
      {id:'2F',wirecolor:'B/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2G',wirecolor:'Y/L',function:'CAM IN', mscolor:'GRN', pin:'MSX-32', squarecolor:'', fullfunction:'Cam Sensor Input', fullcolor:'Green'},
      {id:'2H',wirecolor:'LG/Y',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2I',wirecolor:'B/W',function:'TACH', mscolor:'GO', pin:'MSX-26', squarecolor:'', fullfunction:'Tach Output', fullcolor:'Green/Orange'},
      {id:'2J',wirecolor:'LG/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2K',wirecolor:'LG/W',function:'5V REF', mscolor:'G', pin:'MS-26', squarecolor:'', fullfunction:'5v Reference', fullcolor:'Gray'},
      {id:'2L',wirecolor:'L/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2M',wirecolor:'R/B',function:'TPS', mscolor:'BL', pin:'MS-22', output:'', squarecolor:'', fullfunction:'Throttle Position Sensor', fullcolor:'Light Blue'},
      {id:'2N',wirecolor:'R/L',function:'NBO2', mscolor:'P', pin:'MS-23', output:'', squarecolor:'', fullfunction:'OE Narrowband Input', fullcolor:'Pink'},
      {id:'2O',wirecolor:'R/W',function:'EBC', mscolor:'GRNR', pin:'MS3X-6', output:'(MAF)', squarecolor:'', fullfunction:'Boost Control', fullcolor:'Green/Red'},
      {id:'2P',wirecolor:'R/B',function:'AIT', mscolor:'O', pin:'MS-20', output:'', squarecolor:'', fullfunction:'Air Intake Temperature Sensor', fullcolor:'Orange'},
      {id:'2Q',wirecolor:'L/W',function:'CLT', mscolor:'Y', pin:'MS-21', output:'', squarecolor:'', fullfunction:'Coolant Temperature Sensor', fullcolor:'Yellow'},
      {id:'2R',wirecolor:'Y/G',function:'VVT', mscolor:'LTGRN', pin:'MS3X-24', output:'(FPR)', squarecolor:'', fullfunction:'VVT Output (VVT Swaps Only)', fullcolor:'Light Green'},
      {id:'2S',wirecolor:'L/W',function:'A/C FAN', mscolor:'WG', pin:'MS3X-4', output:'INJ F', squarecolor:'', fullfunction:'A/C Fan Output', fullcolor:'White/Green'},
      {id:'2T',wirecolor:'LG',function:'FUELP', mscolor:'V', pin:'MS-37', output:'', squarecolor:'', fullfunction:'Fuel Pump Output', fullcolor:'Purple'},
      {id:'2U',wirecolor:'Y',function:'INJ A', mscolor:'W', pin:'MS3X-19', output:'(Cly 1)', squarecolor:'', fullfunction:'Injector A', fullcolor:'White'},
      {id:'2V',wirecolor:'Y/B',function:'INJ D', mscolor:'WP', pin:'MS3X-10', output:'(CLY 2)', squarecolor:'', fullfunction:'Injector D', fullcolor:'White/Pink'},
      {id:'2W',wirecolor:'L/O',function:'IDLE', mscolor:'GP', pin:'MS3X-9', output:'', squarecolor:'', fullfunction:'Idle Valve', fullcolor:'Green/Pink'},
      {id:'2X',wirecolor:'Y/R',function:'', mscolor:'', squarecolor:'', fullfunction:'', fullcolor:''},
      {id:'2Y',wirecolor:'G/W',function:'INJ B', mscolor:'WO', pin:'MS3X-16', output:'(Cly 3)', squarecolor:'', fullfunction:'Injector B', fullcolor:'White/Orange'},
      {id:'2Z',wirecolor:'G',function:'INJ C', mscolor:'WLTGRN', pin:'MS3X-13', output:'(Cly 4)', squarecolor:'', fullfunction:'Injector C', fullcolor:'White/Green'},
    ];
  }

  getAll() {
    return this.pages;
  }
}

const diagram9495 = new Diagram9495;

export default diagram9495;
