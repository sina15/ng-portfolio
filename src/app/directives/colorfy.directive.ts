import { Directive, ElementRef, Host, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorfy]'
})
export class ColorfyDirective implements OnInit{

  @Input() defaultColor:string ='black'
  @Input() highlitColor:string = 'red'

  constructor(el:ElementRef) { 
    el.nativeElement.style.display = 'none'
  }
  ngOnInit(): void {
    this.color =this.defaultColor
  }

  @HostBinding('style.color') color:string;

  @HostListener('mouseover') mouseOver(event){
    this.color = this.highlitColor
  }

  @HostListener('mouseleave') mouseLeave(event){
    this.color = this.defaultColor
  }

  @HostListener('click') click(){
    alert('clicked')
  }

}
