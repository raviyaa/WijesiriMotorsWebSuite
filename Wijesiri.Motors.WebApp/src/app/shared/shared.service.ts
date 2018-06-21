import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SharedService {

  langUpdated: EventEmitter<any> = new EventEmitter();
  lang: any;

  constructor(
    private http: Http) { }

  setSelectedLanguage(lang) {
    this.lang = lang;
    this.langUpdated.emit(this.lang);
  }

  getSelectedLanguage(): any {
    return this.lang;
  }

}
