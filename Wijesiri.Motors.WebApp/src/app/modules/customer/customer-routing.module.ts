import { NgModule } from '@angular/core';
import {  Routes,  RouterModule} from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerHomeComponent,
    data: {
      title: 'Customer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
