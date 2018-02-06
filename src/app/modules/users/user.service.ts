import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'


import { User, DefaultUsers } from './User'

@Injectable()
export class UserService{
    private _api_users_url="http://localhost:8000/api/users";
    _url:string = "https://jsonplaceholder.typicode.com/users"
    _postUrl:string ="http://jsonplaceholder.typicode.com/posts"
    
    constructor(private _http: Http){

    }
    
    getUsers(): Observable<User[]>{
        // return this._http.get(this._url)
        // .map(res => <User[]> res.json())
        return this._http.get(this._api_users_url)
        .map(res => <User[]> res.json())
    }

    addUser(user:any):Observable<User>{
        // return this._http.post(this._postUrl, JSON.stringify(user))
		// 	.map(res => <User> res.json());
        return this._http.post(this._api_users_url, JSON.stringify(user))
			.map(res => <User> res.json());
    }
    
    editUser(user:User): Observable<User>{
        // return this._http.put(this._postUrl + '/' + user.id, JSON.stringify(user))
        //     .map(response => <User>response.json());
        // return this._http.put(this._api_users_url, JSON.stringify(user))
        //     .map(response => <User>response.json());

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._api_users_url, body, options)
            .map(response => <User>response.json());
    }

    /**deleteUser will return nothing */
    deleteUser(user:User) {
        // return this._http.delete(this._postUrl + '/' + user.id)
        //             .map(response =>  response.json())
        console.log(this._api_users_url + '/' + user.id)
        return this._http.delete(this._api_users_url + '/' + user.id)
                     .map(response =>  response.json())
    }

    getUser(id:number): Observable<User>{
        // return this._http.get(this._url + '/' + id)
        //         .map( response => <User> response.json())
        return this._http.get(this._api_users_url + '/' + id)
                .map( response => <User> response.json())
    }

    getDefaultUsers(){
         return new DefaultUsers().getDefaultUserList();
    }
}