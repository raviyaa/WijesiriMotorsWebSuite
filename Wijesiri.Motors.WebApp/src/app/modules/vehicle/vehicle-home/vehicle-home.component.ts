import { PreloaderService } from './../../../shared/components/preloader/preloader.service';
import { VehicleService } from './../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vehicle-home',
  templateUrl: './vehicle-home.component.html',
  styleUrls: ['./vehicle-home.component.scss']
})
export class VehicleHomeComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit() {
    this.preloaderService.showPreloader();
   /*  this.vehicleService.getListOfVehicles()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      ); */
  }

}
