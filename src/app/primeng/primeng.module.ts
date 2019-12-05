import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MenuModule,
    InputTextModule,
    DropdownModule,
    VirtualScrollerModule,
    CalendarModule,
    InputTextareaModule
  ],
  exports:[
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MenuModule,
    InputTextModule,
    DropdownModule,
    VirtualScrollerModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class PrimengModule { }
