import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //ViewEncapsulation:none -> use global css without any encapsulation
  //ViewEncapsulation:emulated: default one that encapsulate each component's css in itself
  //shadowDom: Keep its css,js and data in its shadow dom. main dom is not affected anyhow.
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements AfterViewInit,OnInit ,AfterViewChecked{

  title = 'Welcome Home!';

  @ViewChild(HeaderComponent) child ;
  @ViewChild(FooterComponent) footerChild;

  constructor(private activeRoute:ActivatedRoute){}
  
  ngAfterViewChecked(): void {
    let deferredPrompt;
    let addBtn = this.footerChild.a2hs.nativeElement;
    addBtn.style.display = 'none'
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';
    
      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });
    });
  }
  
  ngOnInit(): void {
    //has Params and queryparams they are all behavior subjects

    this.activeRoute.paramMap.subscribe(params=>console.log(params))
    this.activeRoute.queryParams.subscribe(qp=>console.log(qp))
    
  }


  addToHome(e){

  }
  

  ngAfterViewInit(): void {
    this.title=this.child.appName
  }

  setAppName(name){
    this.title=name
  }
}
