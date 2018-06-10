import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: DashboardComponent }
];
