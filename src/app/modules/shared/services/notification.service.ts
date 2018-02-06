import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";



@Injectable()
export class NotificationService {

    _notificationCounter = new Subject<number>()
    notificationCounter = this._notificationCounter.asObservable();

    constructor() { 
        
    }

    getNotificationCounter():Observable<number> {
        return this._notificationCounter;
    }

    setNotificationCounter(val: number) {
        this._notificationCounter.next(val);
    }

}