import { RouterModule } from '@angular/router'

import { HomeComponent } from './modules/home/home.component'

export const AppRouting = 
RouterModule.forRoot([
    { path: '**', component: HomeComponent}
])