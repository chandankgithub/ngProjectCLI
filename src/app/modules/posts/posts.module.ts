import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormBuilder, 
          FormsModule, 
          ReactiveFormsModule
        } from '@angular/forms'
import { SharedModule } from '../shared/shared.modules'

import { PostsComponent } from './posts.component'
import { PostService } from './post.service'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations:[
        PostsComponent
    ],
    providers:[
        PostService
    ],
    exports:[
        PostsComponent
    ]
})

export class PostsModule{

}