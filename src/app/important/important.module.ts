import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportantRoutingModule } from './important-routing.module';
import { ImportantHomeComponent } from './important-home/important-home.component';


@NgModule({
  declarations: [
    ImportantHomeComponent
  ],
  imports: [
    CommonModule,
    ImportantRoutingModule
  ]
})
export class ImportantModule { }
