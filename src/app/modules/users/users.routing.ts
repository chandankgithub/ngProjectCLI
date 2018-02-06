import { RouterModule } from '@angular/router'

import { NewUserComponent } from './new.user.component'
import { NotFoundComponent } from '../../not-found.component'
import { PreventUnsavedChangesGuardService } from '../../route-guards/prevent-unsaved-changes-guard.services'
import { UsersComponent } from './users.component'


export const UsersRouting = 
RouterModule.forChild([
    { path: 'users', component: UsersComponent},
    { path: 'users/new', 
        component: NewUserComponent, 
        canDeactivate:[ PreventUnsavedChangesGuardService ]
    },
    {
        path:'users/:id',
        component: NewUserComponent
    },
    {
        path: 'notfound',
        component:NotFoundComponent
    }
])