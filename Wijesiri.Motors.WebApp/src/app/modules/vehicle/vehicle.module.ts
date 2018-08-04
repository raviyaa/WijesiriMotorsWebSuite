import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleHomeComponent } from './vehicle-home/vehicle-home.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    VehicleRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
    VehicleHomeComponent,
    CreateVehicleComponent
  ],
  providers: [
    VehicleService
  ],
})
export class VehicleModule { }
