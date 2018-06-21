import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule
} from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DefaultLayoutComponent } from '../../shared/components/default-layout/default-layout.component';
import { TileMenuComponent } from '../../shared/components/tile-menu/tile-menu.component';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];


@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    SharedModule.forRoot(),
    CustomerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    materialModules,
    ButtonsModule.forRoot()
  ],
  declarations: [
    CustomerHomeComponent,
    CreateCustomerComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class CustomerModule { }
