import { RouterModule} from '@angular/router'

import { HomeComponent } from './home.component'

export const HomeRouting = RouterModule.forChild([
    {   path:'home', component: HomeComponent },
])