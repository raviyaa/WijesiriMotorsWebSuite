import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'estimate',
        loadChildren: 'app/modules/estimate/estimate.module#EstimateModule'
      },
      {
        path: 'customer',
        loadChildren: 'app/modules/customer/customer.module#CustomerModule'
      },
      {
        path: 'vehicle',
        loadChildren: 'app/modules/vehicle/vehicle.module#VehicleModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DefaultLayoutComponent
];
