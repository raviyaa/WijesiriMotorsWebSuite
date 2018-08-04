import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Http } from '@angular/http';
import { APP_SERVICE_CONFIG, HttpConfig } from '../../app-config/app-serviceurl-config';


@Injectable()
export class VehicleService {

    constructor(private http: Http) { }

    addVehicle(vehicle) {
        return this.http.post(APP_SERVICE_CONFIG.VEHICLE_SERVICE_URL + 'addVehicle', vehicle, HttpConfig.requestOptions())
            .pipe(map((res) => res.json()));
    }

    getListOfVehicles() {
        return this.http.get(APP_SERVICE_CONFIG.VEHICLE_SERVICE_URL + 'getListOfVehicles', HttpConfig.requestOptions())
            .pipe(map((res) => res.json()));
    }

    errorhandler(error: Response) {
        return Observable.throw(error || 'Server Error');
    }
}
