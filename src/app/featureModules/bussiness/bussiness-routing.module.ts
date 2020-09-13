import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BussinessListComponent } from './bussiness-list/bussiness-list.component';


const routes: Routes = [
  {path:'',component:BussinessListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessRoutingModule { }
