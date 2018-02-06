import { FileUploaderComponent } from './component/file-uploader/file-uploader.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { UserProfileRouting } from './../user-profile/user-profile.routing';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainNavbarComponent } from './component/navbar/main-navbar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

import { AppRouting } from '../../app.routing'
import { HomeRouting } from '../home/home.routing'
import { UsersRouting } from '../users/users.routing'
import { PostsRouting } from '../posts/posts.routing'

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        //keep child routing above parent routing
        HomeRouting,
        PostsRouting,
        UsersRouting, 
        UserProfileRouting,
        AppRouting //parent routing
    ],
    declarations:[
        MainNavbarComponent,
        PaginationComponent,
        SpinnerComponent,
        AvatarComponent,
        FileUploaderComponent
    ],
    providers:[

    ],
    exports:[
        MainNavbarComponent,
        PaginationComponent,
        SpinnerComponent,
        AvatarComponent,
        FileUploaderComponent
    ]
})

export class SharedModule{

}