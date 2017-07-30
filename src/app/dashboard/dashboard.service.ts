import { Injectable } from '@angular/core';
import { HttpUtil } from '../utils/http-request'


@Injectable()
export class DashboardService 
{
  constructor(private _utils: HttpUtil) { }

  
  getDevices(offset, limit):any
  {
    //Right now dummy data is created, we can also fetch it from api

    let records = [];
    for(let i=offset; i<(offset+limit); i++)
    {
      records.push({
        serial_number: '160016001600160'+i,
        last_communication : Date.now(),
        stock_status_value : 'sold',
        stock_status_timestamp : Date.now(),
        status : 'online'
      });
    }

    return new Promise((resolve, reject) => {
      return resolve(records);
    });
  }

}
