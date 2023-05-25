import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./myday/myday.module').then((m) => m.MydayModule) },
  { path: 'planned', loadChildren: () => import('./planned/planned.module').then((m) => m.PlannedModule) },
  { path: 'assigned', loadChildren: () => import('./assigned/assigned.module').then((m) => m.AssignedModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule) },
  { path: 'important', loadChildren: () => import('./important/important.module').then((m) => m.ImportantModule) },
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
