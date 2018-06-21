import { NgModule } from '@angular/core';
import {  Routes,  RouterModule} from '@angular/router';
import { VehicleHomeComponent } from './vehicle-home/vehicle-home.component';


const routes: Routes = [
  {
   path: '',
    component: VehicleHomeComponent,
    data: {
      title: 'Vehicle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
