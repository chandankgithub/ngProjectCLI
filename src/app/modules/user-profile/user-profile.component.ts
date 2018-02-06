import { AuthService } from './../shared/services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styles:[
        `   
            .profile-area img {
            max-width: 150px;
            margin-bottom: 20px;
            }

            .panel-body h3 {
            margin-top: 0;
            }
        `
    ]
})

export class UserProfileComponent implements OnInit {
    private profile: any;
    private showUploader:boolean=false;

    constructor(private _authService: AuthService) { }

    ngOnInit() {
        if(this._authService.userProfile){
            this.profile=this._authService.userProfile;
            console.log(this.profile)
        }
        else{
            this.profile = this._authService.getUserProfile((err:any, profile:any) => {
                this.profile=profile;
                console.log(this.profile)
            })
        }
     }

     userProfileCallback(err:any, profile:any){
        this.profile=profile;
        console.log(this.profile)
     }

     toggleUploader(){
         this.showUploader = !this.showUploader;
     }
}