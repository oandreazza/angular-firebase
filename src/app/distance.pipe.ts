import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value === 0)
      return "--"

    return value.toFixed(3)+" Km";
  }

}
