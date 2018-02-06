import { AvatarService } from './../../services/avatar.service';
import { NotificationService } from './../../services/notification.service';
import { AuthService } from './../../services/authentication/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'main-navbar',
    templateUrl:'./main-navbar.component.html'
})

export class MainNavbarComponent{
    private _notifcationCounter: number;
    private _avatar:string ;

    constructor(    private auth:AuthService,
                    private notificationService: NotificationService,
                    private avatarService: AvatarService){

            this.notificationService.getNotificationCounter()
            .subscribe( n => {
                this._notifcationCounter = n
            })

            this.avatarService.getAvatarUrl()
            .subscribe( url => {
                this._avatar=url;
            })
            
    }
}