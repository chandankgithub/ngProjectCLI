import { NotificationService } from './../shared/services/notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'

import { IFormComponent } from '../../common-lib/IFormComponent'
import { User, UserAddress } from './User'
import { UserFormValidator } from './user-form.validator'
import { UserService } from './user.service'

@Component({
    selector: 'new-user',
    templateUrl:'./new.user.component.html'
})
export class NewUserComponent implements 
                                            OnInit, IFormComponent,
                                            OnDestroy{
    _signupform: FormGroup;
    private _emailexpression: "/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm"
    private _params:any
    private _id: number
    private _formPuropse:string = 'Add'
    private _user:User;
    private errorCodes={
        NOT_FOUND: 404
    }
    
    constructor(private _service: UserService,
                private _notificationService: NotificationService,
                private _router: Router,
                private _route: ActivatedRoute){
        
        this._user = new User();

        this._signupform= new FormGroup({
                name: new FormControl(this._user.name, Validators.required),
                email: new FormControl(this._user.email, Validators.compose([Validators.required, 
                                                        UserFormValidator.validateEmail]) ),
                phone: new FormControl(this._user.phone),
                address: new FormGroup({
                    street: new FormControl(this._user.address.street),
                    suite: new FormControl(this._user.address.suite),
                    city: new FormControl(this._user.address.city),
                    zipcode: new FormControl(this._user.address.zipcode)

                })
        });
       
    }

    ngOnInit(){
        this._params = this._route.params
                            .subscribe(p => {
                                                this.readRouteParams(p);
                                                this.getUser();
                                            })
    }

    signup() {
        if(this._user && this._user.id){
            //edit user
            this.editUser();
        }
        else {
            // add user
            this.addUser();
        }
        
    }

    isFormDirty(): boolean{
        return this._signupform.dirty
    }

    readRouteParams(param:any){
        this._id= +param['id'];
        if(this._id > 0){
            this._formPuropse="Edit"
        }
    }

    getUser(){
        if(this._id > 0) {
            this._service.getUser(this._id)
                .subscribe(u => this.populateUser(u),
                (err) => {this.onError(err)})
        }
    }

    populateUser(user:User){
        this._user=user;
    }

    addUser(){
        this._notificationService.setNotificationCounter(1);
        this._service.addUser(this._user)
                    .subscribe(u => {
                        this._signupform.reset()
                        this._router.navigate(['users']);
                        this._notificationService.setNotificationCounter(1);
            })
    }

    editUser(){

        if(this._user){
            this._service.editUser(this._user)
                .subscribe( u => {
                        this._signupform.reset();
                        this._router.navigate(['users']);
                        this._notificationService.setNotificationCounter(1);
            })
        }
                    
    }

    onError(err:any){
        if(err.status === this.errorCodes.NOT_FOUND){
            this._router.navigate(['notfound'])
        }
    }
    ngOnDestroy(){
        this._params.unsubscribe();
    }
}