import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './shared/default-layout/default-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
/*   {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  }, */
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'estimate',
        loadChildren: './modules/estimate/estimate.module#EstimateModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
