/**
 * @author Mohit Agrawal<Mohit.Agrawal@mi-xlab.com>
 * @copyright Motherson Invenzen X-Lab Pvt.Ltd. 2017
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitconversion'
})
export class UnitConversionPipe implements PipeTransform {

  transform(value: any, args?: any): any 
  {
    let conversion = args;

    if(Array.isArray(args)) {
      conversion = args[0];
    }

    if(conversion == 'mtokm') {
      return this.convertMeterToKm(value);
    }

    if(conversion == 'millistominhr') {
      return this.convertMillisToMinHr(value);
    }

    if(conversion == 'timeago') {
      return this.convertTimestampToTimeago(value);
    }

    return value;
  }

  convertMeterToKm(value)
  {
    value = parseInt(value);

    if(value < 1000) {
      return (value) + ' m';
    }

    return (value/1000).toFixed(2) + ' km';
  }

  convertMillisToMinHr(value)
  {
    let value_sec = parseInt(value);
    
    value_sec = value_sec/1000;

    //1 min
    if(value_sec < 60) {
      return (value_sec%60).toFixed(0) + ' sec';
    }
    
    //1 hr
    if(value_sec < 3600) 
    {
      let value_min = (value_sec/60).toFixed(0);
      return value_min.toString()+ ' min';
    }

    if(value_sec < 86400) 
    {
      let value_hr = (value_sec/3600).toFixed(0);
      let value_min = ((value_sec%3600)/60).toFixed(0);

      return value_hr.toString()+ ' hr '+value_min.toString()+ ' min';
    }

    return (value_sec/86400).toFixed(0)+' day';
  }

  convertTimestampToTimeago(value)
  {
    let timestamp = parseInt(value);

    let current_time = Date.now();

    let remaining_time = current_time-timestamp;

    return this.convertMillisToMinHr(remaining_time)+' ago';
  }


}
