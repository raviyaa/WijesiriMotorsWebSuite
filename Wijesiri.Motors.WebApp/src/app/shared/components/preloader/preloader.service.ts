import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PreloaderService {
    startPreloder: EventEmitter<any> = new EventEmitter<any>();
    stopPreloder: EventEmitter<any> = new EventEmitter<any>();

    showPreloader(): void {
        this.startPreloder.emit(null);
    }

    hidePreloader(): void {
        this.stopPreloder.emit(null);
    }
}


