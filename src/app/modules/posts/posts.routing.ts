import { RouterModule } from '@angular/router'

import { PostsComponent } from './posts.component'

export const PostsRouting = 
RouterModule.forChild([
    { path: 'posts', component: PostsComponent}
])