import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleHomeComponent } from './vehicle-home/vehicle-home.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';


@NgModule({
  imports: [
    FormsModule,
    VehicleRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    SharedModule.forRoot()
  ],
  declarations: [
    VehicleHomeComponent,
    CreateVehicleComponent
  ]
})
export class VehicleModule { }
