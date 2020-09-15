import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  src:string = "./assets/icons/in.png"
  constructor() { }

  @ViewChild('a2hs') a2hs:ElementRef;

  ngOnInit(): void {
    console.log(this.a2hs)
  }

}
