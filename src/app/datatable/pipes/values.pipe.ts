import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getjsonvalues' })
export class ValuesPipe implements PipeTransform {
  transform(value, args: string[]): any {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    // return Object.values(value);

    let keys = Object.keys(value);
    console.log(keys.map(k => value[k]));
    return keys.map(k => value[k]);
  }
}
