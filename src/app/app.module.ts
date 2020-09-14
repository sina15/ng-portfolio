import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import {CounterComponent} from './counter/counter.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ColorfyDirective } from './directives/colorfy.directive';
import { PricePipe } from './pipes/price.pipe';
// import { FiltersComponent } from './featureModules/bussiness/filters/filters.component';
// import { CategoriesComponent } from './featureModules/bussiness/categories/categories.component';

//import { EntryComponent } from './featureModules/bussiness/entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ColorfyDirective,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
