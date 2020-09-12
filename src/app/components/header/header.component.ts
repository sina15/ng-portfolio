import { Component, OnInit } from '@angular/core';
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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(nav){
    this.router.navigate([`/${nav.url}`])
  }

}
