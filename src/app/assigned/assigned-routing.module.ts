import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedHomeComponent } from './assigned-home/assigned-home.component';

const routes: Routes = [
  {
    path: '',
    component: AssignedHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignedRoutingModule { }
