import { Component, OnInit } from '@angular/core'

import {User} from './User'
import { UserService } from './user.service'

import 'rxjs/add/operator/delay'

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UserService],
    styles:[
        `
            a{
                cursor:pointer;
            }
        `
    ]
})
export class UsersComponent implements OnInit{
    users:User[];
    networkException:boolean=false;
    private _isLoading:boolean=true;

    constructor(private _service: UserService){

    }
    
    ngOnInit(){
        this._service.getUsers()
                        .delay(2000)
                        .subscribe( users => {
                                                this.bindUser(users)
                                            },
                                    (err) => this.bindDefaultUsers()
                                    )
    }

    bindUser(users:User[]){
        this.users=users;
        this._isLoading=false;
    }

    bindDefaultUsers(){
        //this._isLoading=false;
        setTimeout(function() {
            this._isLoading=true;
        }, 2000);
        this.networkException=true;
        
        this.users = this._service.getDefaultUsers()
    }

    deleteUser(user: User){
        /**
         * Optimistic approach. First update the view then call deleteUser
         * If delete is unsuccessful then undo the delete 
         */
        console.log(user);
        let actualUsers = this.users
        this.users = this.users.filter(x => x.id !== user.id)
        this._service.deleteUser(user)
                .subscribe(u => {
                    console.log(u);
                },
                (err) => this.users = actualUsers)
    }
}