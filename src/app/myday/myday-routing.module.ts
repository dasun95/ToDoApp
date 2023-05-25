import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MydayHomeComponent } from './myday-home/myday-home.component';

const routes: Routes = [
  {
    path: '',
    component: MydayHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MydayRoutingModule { }
