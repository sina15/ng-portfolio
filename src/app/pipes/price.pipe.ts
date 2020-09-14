import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args)
    return args[0]?`${value}${args[0]}`:`${value}$`;
  }

}
