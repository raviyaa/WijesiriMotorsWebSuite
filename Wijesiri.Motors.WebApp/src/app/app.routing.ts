import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';
import { CustomPreloading } from './custom-preloading';


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
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        data: {preload: true}
      },
      {
        path: 'estimate',
        loadChildren: 'app/modules/estimate/estimate.module#EstimateModule',
        data: {preload: true}
      },
      {
        path: 'customer',
        loadChildren: 'app/modules/customer/customer.module#CustomerModule',
        data: {preload: true}
      },
      {
        path: 'vehicle',
        loadChildren: 'app/modules/vehicle/vehicle.module#VehicleModule',
        data: {preload: true}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloading })],
  exports: [RouterModule],
  providers: [
    CustomPreloading
  ]
})
export class AppRoutingModule { }

export const routedComponents = [
  DefaultLayoutComponent
];
