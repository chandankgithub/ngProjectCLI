
// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from "auth0-js";

@Injectable()
export class AuthService {

  private auth0 = new auth0.WebAuth({
    clientID: 'JATZu4dFFAlKgFD0GhmdP4pjVDd57psQ',
    domain: 'chandank.auth0.com',
    responseType: 'token id_token',
    audience: 'https://chandank.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/',
    scope: 'openid profile'
  });

  public userProfile: any;

  constructor(public router: Router) {

  }

  public handleAuthentication(): void {
    this.auth0.parseHash(window.location.hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult?: any): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public getUserProfile(callback:any) {
    let token = localStorage.getItem('access_token');
    try {
      this.auth0.client.userInfo(token, (err, profile) => {
        this.userProfile = profile;
        callback(err, profile);
      })
    }
    catch (e) {
      console.log(e)
    }

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  public login(): void {
    this.auth0.authorize({});
  }
}