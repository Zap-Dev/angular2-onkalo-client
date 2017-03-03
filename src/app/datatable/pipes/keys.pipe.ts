import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'getjsoncolkeys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {

    let tes=Object.keys(value);
    return Object.keys(value);
  }


}
