import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { BussinessListComponent } from './bussiness-list/bussiness-list.component';
import {FiltersComponent} from './filters/filters.component'
import {CategoriesComponent} from './categories/categories.component'


@NgModule({
  declarations: [BussinessListComponent,    FiltersComponent,CategoriesComponent],
  imports: [
    CommonModule,
    BussinessRoutingModule,
  ]
})
export class BussinessModule { }
