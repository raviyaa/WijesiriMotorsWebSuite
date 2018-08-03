import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelect, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { TileMenuComponent } from './components/tile-menu/tile-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatSelectModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [
    CommonModule,
   // materialModules,
   TranslateModule,
    RouterModule
  ],
  declarations: [
    TileMenuComponent
  ],
  exports: [
    materialModules,
    TileMenuComponent,
    TranslateModule
  ],
  providers: [
    AuthenticationService,
    SharedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
