import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DefaultLayoutComponent
  ],
  exports: [
    DefaultLayoutComponent
  ]
})
export class SharedModule { }
