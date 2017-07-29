/**
 * Custom search filter pipe
 * 
 * Uses:
 * 
 * //If item is object
 * *ngFor="let item of items | searchfilter: searchText:'attribute_name'"
 * 
 * //If items is array of strings
 * *ngFor="let item of items | searchfilter: searchText"
 * 
 * @author Mohit Agrawal<Mohit.Agrawal@mi-xlab.com>
 * @copyright Motherson Invenzen X-Lab Pvt.Ltd. 2017
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: any[], ...args: any[]): any 
  {
    if (!items || !args) {  
        return items;  
    }

    let filter_query = args[0];
    let filter_param = args[1];

    if(!filter_query) {
      return items;
    }

    if(filter_param) 
    {
      let filtered = items.filter(item => {
        return item[filter_param].indexOf(filter_query) !== -1
      });
      return filtered;
    }

    return items.filter(item => item.indexOf(filter_query) !== -1);
  }
}
