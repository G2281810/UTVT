import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';
import { PostEmployeesComponent } from './components/post-employees/post-employees.component';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetEmployeesComponent,
    PostEmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
