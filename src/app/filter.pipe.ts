import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, keyword: any): any {
    if (keyword == undefined) return items;

    return items.filter(function(item){
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

}
