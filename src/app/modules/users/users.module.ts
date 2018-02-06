import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormBuilder, 
          FormsModule, 
          ReactiveFormsModule
        } from '@angular/forms'
import { SharedModule } from '../shared/shared.modules'

import { NewUserComponent } from './new.user.component'
import { UsersComponent } from './users.component'
import { NotFoundComponent } from '../../not-found.component'
import { UserService } from './user.service'

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations:[
        NewUserComponent,
        UsersComponent,
        NotFoundComponent
    ],
    providers:[
        FormBuilder,
        UserService
    ],
    exports:[
        NewUserComponent,
        UsersComponent,
        NotFoundComponent
    ]
})

export class UsersModule{

}