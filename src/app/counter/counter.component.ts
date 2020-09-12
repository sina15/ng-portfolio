import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter:number = 0;
  @Input() showText:boolean = true

  increment(){
      this.counter+=1
  }

  decrement(){
      this.counter-=1
  }

  toggleText(){
    this.showText=!this.showText
  }
}