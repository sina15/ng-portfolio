import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeaderComponent} from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //ViewEncapsulation:none -> use global css without any encapsulation
  //ViewEncapsulation:emulated: default one that encapsulate each component's css in itself
  //shadowDom: Keep its css,js and data in its shadow dom. main dom is not affected anyhow.
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements AfterViewInit,OnInit {

  title = 'Welcome Home!';

  @ViewChild(HeaderComponent) child ;

  constructor(private activeRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    //has Params and queryparams they are all behavior subjects
    this.activeRoute.paramMap.subscribe(params=>console.log(params))
    this.activeRoute.queryParams.subscribe(qp=>console.log(qp))
  }

  ngAfterViewInit(): void {
    this.title=this.child.appName
    console.log(this.title)
  }

  setAppName(name){
    this.title=name
  }
}
