import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import {BusinessDataService} from './business-data.service';
import { InputComponent } from './input/input.component'




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BusinessDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
