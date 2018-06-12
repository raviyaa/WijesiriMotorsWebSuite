import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

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
  ],
  providers: [
    AuthenticationService
    ]
})
export class SharedModule { }
