import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';

export const UserProfileRouting = RouterModule.forChild([
    {   path: 'userprofile', component: UserProfileComponent}
])