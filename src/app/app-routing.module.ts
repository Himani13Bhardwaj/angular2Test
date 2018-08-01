import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
