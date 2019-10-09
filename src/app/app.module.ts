import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EJAngular2Module } from 'ej-angular2';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,EJAngular2Module.forRoot(),
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
