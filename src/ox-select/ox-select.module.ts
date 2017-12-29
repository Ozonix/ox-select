import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { OxSelectComponent } from './ox-select.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    OxSelectComponent
  ],
  declarations: [
    OxSelectComponent
  ],
  bootstrap: [OxSelectComponent]
})
export class OxSelectModule { }
