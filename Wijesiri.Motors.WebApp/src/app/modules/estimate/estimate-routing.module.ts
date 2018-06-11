import { NgModule } from '@angular/core';
import {  Routes,  RouterModule} from '@angular/router';
import { EstimateHomeComponent } from './estimate-home/estimate-home.component';


const routes: Routes = [
  {
    path: '',
    component: EstimateHomeComponent,
    data: {
      title: 'Estimate'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
