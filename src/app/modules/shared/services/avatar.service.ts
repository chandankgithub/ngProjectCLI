import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AvatarService {

    private _avatar = new Subject<string>();
    private avatar = this._avatar.asObservable();

    constructor() { }

    getAvatarUrl():Observable<string>{
        return this._avatar;
    }

    setAvatarUrl(url: string){
        this._avatar.next(url);
    }
}