import { NgModule } from '@angular/core';
import {  Routes,  RouterModule} from '@angular/router';
import { VehicleHomeComponent } from './vehicle-home/vehicle-home.component';
import { TileMenuComponent } from '../../shared/components/tile-menu/tile-menu.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';


const routes: Routes = [
  {
   path: '',
    component: TileMenuComponent,
    data: {
      title: 'Vehicle'
    },
    children: [
      {
        path: '',
        component: VehicleHomeComponent,
        data: {
          title: ''
        },
      },
      {
        path: 'create-vehicle',
        component: CreateVehicleComponent,
        data: {
          title: 'create-vehicle'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
