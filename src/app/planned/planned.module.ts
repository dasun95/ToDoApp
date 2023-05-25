import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannedRoutingModule } from './planned-routing.module';
import { PlannedHomeComponent } from './planned-home/planned-home.component';


@NgModule({
  declarations: [
    PlannedHomeComponent
  ],
  imports: [
    CommonModule,
    PlannedRoutingModule
  ]
})
export class PlannedModule { }
