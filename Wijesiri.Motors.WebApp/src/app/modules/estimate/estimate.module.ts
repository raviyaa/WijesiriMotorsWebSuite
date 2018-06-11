import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { EstimateRoutingModule } from './estimate-routing.module';
import { EstimateHomeComponent } from './estimate-home/estimate-home.component';


@NgModule({
  imports: [
    FormsModule,
    EstimateRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [EstimateHomeComponent]
})
export class EstimateModule { }
