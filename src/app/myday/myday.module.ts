import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydayRoutingModule } from './myday-routing.module';
import { MydayHomeComponent } from './myday-home/myday-home.component';


@NgModule({
  declarations: [
    MydayHomeComponent
  ],
  imports: [
    CommonModule,
    MydayRoutingModule
  ]
})
export class MydayModule { }
