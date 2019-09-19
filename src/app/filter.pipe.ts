import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStirng: string, propName: string): any {
    if (value.length === 0) {
      return value;
    } else if (filterStirng) {
      const resultArray = [];
      for (const item of value) {
        if (item[propName] === filterStirng) {
          resultArray.push(item);
        }
      }
      return resultArray;
    } else {
      return value;
    }
  }

}
