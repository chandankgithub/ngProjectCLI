import { AvatarService } from './../shared/services/avatar.service';
import { AuthService } from './../shared/services/authentication/auth.service';
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
    constructor(    private _authService: AuthService,
                    private _avatarService: AvatarService){

    }

    ngOnInit(){
       if(this._authService.isAuthenticated()){
           if(this._authService.userProfile){
            console.log(this._authService.userProfile)
            console.log('dddd')
           }
           else {
                this._authService.getUserProfile((err:any, profile:any) => {
                    this._avatarService.setAvatarUrl(profile.picture)
                })
           }
       }
    }
}