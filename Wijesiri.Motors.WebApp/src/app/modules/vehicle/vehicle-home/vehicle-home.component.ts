import { PreloaderService } from './../../../shared/components/preloader/preloader.service';
import { VehicleService } from './../vehicle.service';
import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-vehicle-home',
  templateUrl: './vehicle-home.component.html',
  styleUrls: ['./vehicle-home.component.scss']
})
export class VehicleHomeComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle: String = 'Vehicles';
  vehicles: any;

  constructor(
    private vehicleService: VehicleService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit() {
    this.loadInitData();
  }

  loadInitData() {
    this.vehicleService.getListOfVehicles()
      .subscribe(
        (data) => {
          this.vehicles = data.result;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  vehicleEditClick(item) {
    console.log(item);
  }
  vehicleItemDeleteClick(item) {
    console.log(item);
  }
}
