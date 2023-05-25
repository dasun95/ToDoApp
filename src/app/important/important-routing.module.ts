import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportantHomeComponent } from './important-home/important-home.component';

const routes: Routes = [
  {
    path: '',
    component: ImportantHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportantRoutingModule { }
