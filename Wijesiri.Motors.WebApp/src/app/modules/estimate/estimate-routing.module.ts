import { CreateEstimateComponent } from './create-estimate/create-estimate.component';
import { NgModule } from '@angular/core';
import {  Routes,  RouterModule} from '@angular/router';
import { EstimateHomeComponent } from './estimate-home/estimate-home.component';
import { TileMenuComponent } from '../../shared/components/tile-menu/tile-menu.component';


const routes: Routes = [
  {
    path: '',
    component: TileMenuComponent,
    data: {
      title: 'Estimate'
    },
    children: [
      {
        path: '',
        component: EstimateHomeComponent,
        data: {
          title: ''
        },
      },
      {
        path: 'create-estimate',
        component: CreateEstimateComponent,
        data: {
          title: 'create-estimate'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
