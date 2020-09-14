import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList = [
    {name:"HOME",url:''},
    {name:'BUSINESS',url:'businesses'},
    {name:'EVENTS',url:'events'},
    {name:'MY TODO',url:'todo'},
    {name:'LOGIN',url:'login'},
    {name:'SIGNUP',url:'signup'}
  ]

  appName='IwacuFood'

  @Output() setAppText = new EventEmitter<string>()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(nav){
    this.router.navigate([`/${nav.url}`])
    this.setAppText.emit(`${this.appName} -> ${nav.url}`);
  }

}
