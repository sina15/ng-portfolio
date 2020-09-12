import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LoginComponent} from "./components/login/login.component"
import {SignupComponent} from './components/signup/signup.component'
import {NotFound404Component} from './components/not-found404/not-found404.component'
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component'
import { TodoComponent } from './components/todo/todo/todo.component';

const routes: Routes = [

  {path:'businesses', loadChildren:()=>import('./featureModules/bussiness/bussiness.module').then(b=>b.BussinessModule)},
  {path:'events',loadChildren:()=>import('./featureModules/events/events.module').then(e=>e.EventsModule)},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'todo',component:TodoComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
