import { AvatarService } from './modules/shared/services/avatar.service';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { NotificationService } from './modules/shared/services/notification.service';
import { AuthService } from './modules/shared/services/authentication/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { UsersModule } from './modules/users/users.module'
import { PostsModule } from './modules/posts/posts.module'
import { SharedModule } from './modules/shared/shared.modules'

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component'

import { PreventUnsavedChangesGuardService } from './route-guards/prevent-unsaved-changes-guard.services'

@NgModule({
  imports: [
      UsersModule,
      UserProfileModule,
      PostsModule,
      SharedModule,
      BrowserModule,
      HttpModule,
      RouterModule
  ],
  declarations: [
      AppComponent,
      HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [
      PreventUnsavedChangesGuardService,
      AuthService,
      NotificationService,
      AvatarService
  ]

})
export class AppModule {

    constructor(private auth: AuthService){
        this.auth.handleAuthentication();
    }
 }
