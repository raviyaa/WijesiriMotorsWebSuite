import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Http } from '@angular/http';
import { APP_SERVICE_CONFIG, HttpConfig } from '../app-config/app-serviceurl-config';


@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(user) {
    return this.http.post(APP_SERVICE_CONFIG.AUTHENTICATION_SERVICE_URL + 'login', user, HttpConfig.requestOptions())
      .pipe(map((res) => res.json()));
  }

  errorhandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
