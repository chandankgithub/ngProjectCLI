import { Injectable } from '@angular/core'
import { Http }  from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import { Post, DefaultPosts } from './post'
import { PostComment } from './post-comment'

@Injectable()
export class PostService{
    private _getUrl:string= 'https://jsonplaceholder.typicode.com/posts'
    private _postUrl: string = "https://jsonplaceholder.typicode.com/post"

    constructor(private _http:Http){

    }
    
    getPosts(): Observable<Post[]>{
        return this._http.get(this._getUrl)
                .map(response => <Post[]> response.json())
    }

    getPostsByUser(id: number): Observable<Post[]>{
        let userPostUrl=this._getUrl + '?userId=' + id;
        return this._http.get(userPostUrl)
        .map(response => {
                    return <Post[]> response.json()
                })
    }
    getDefaultPosts(): Post[]{
        return new DefaultPosts().getDefaultPosts()
    }

    getPostCommentsById(post:Post):Observable<PostComment[]>{
        let commentUrl = this._postUrl + '/' + post.id + '/comments';
        return this._http.get(commentUrl)
        .map(response => {
            
            return <PostComment[]> response.json()
        })
    }
}