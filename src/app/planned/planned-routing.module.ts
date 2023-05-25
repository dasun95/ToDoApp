import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannedHomeComponent } from './planned-home/planned-home.component';

const routes: Routes = [  {
  path: '',
  component: PlannedHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannedRoutingModule { }
