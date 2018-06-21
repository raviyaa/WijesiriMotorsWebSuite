import { DefaultLayoutComponent } from './../../shared/components/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { TileMenuComponent } from '../../shared/components/tile-menu/tile-menu.component';


const routes: Routes = [

  {
    path: '',
    component: TileMenuComponent,
    data: {
      title: 'Customer'
    },
    children: [
      {
        path: '',
        component: CustomerHomeComponent,
        data: {
          title: ''
        },
      },
      {
        path: 'create-customer',
        component: CreateCustomerComponent,
        data: {
          title: 'create-customer'
        },
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
