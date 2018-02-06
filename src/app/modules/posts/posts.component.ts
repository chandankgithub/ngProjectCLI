import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/skip'
import 'rxjs/add/operator/take'
import 'rxjs/add/observable/from';
import { Post } from './post'
import { PostComment } from './post-comment'
import { PostService } from './post.service'
import { UserService } from '../users/user.service'
import { User } from '../users/User'

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styles:[
        `
           .posts	li	{	cursor:	pointer;	}
            .posts	li:hover	{	background:	#ecf0f1;	}	
            .list-group-item.active,	
            .list-group-item.active:hover,	
            .list-group-item.active:focus	{	
                background-color:	#ecf0f1;
                border-color:	#ecf0f1;	
                color:	#2c3e50;
            } 
        `
    ]
})
export class PostsComponent implements OnInit{
    private _posts:Post[];
    private _networkDown:boolean=false;
    private _postsLoading: boolean=true;
    private _isCommentLoading:boolean=true;
    private _selectedIndex: number;
    private _postTitle: string;
    private _postBody: string;
    private _showPostDetail:boolean = false;
    private _comments: PostComment[]
    private _users:User[]
    private _isUserPostsLoading:boolean= false;
    private _pageSize: number=10;

    private _allPosts: Post[]

    constructor(private _postService: PostService,
                private _userService: UserService){
        
    }

    ngOnInit(){
        this.getUsers();
        this.getAllPosts();
        
    }

    private getAllPosts() {
        this._postService.getPosts()
            .delay(2000) //Dummy. To show only loading icon
            .subscribe(p => this.bindPosts(p),
            (err) => {
                this.bindDefaultPosts();
            },
            () => {
                // this._postsLoading=false;
                // this._isUserPostsLoading=false;
            } )
    }

    private bindPosts(posts: Post[]){
        this._posts = posts;
        this._allPosts=posts;
        this._postsLoading=false;
        this._isUserPostsLoading=false;
    }

    private getPostsByUser(userId:number){
        this._postService.getPostsByUser(userId)
                    .delay(200)
                    .subscribe(posts => this.bindPostsByUser(posts))
    }

    private bindPostsByUser(posts: Post[]){
        this._isUserPostsLoading=false;
        this._posts = posts
    }
    private bindDefaultPosts(){
        this._networkDown= true;
        this._postsLoading=false
        this._isUserPostsLoading=false;
        this._posts = this._postService.getDefaultPosts();
        this._allPosts=this._posts;
        this.loadPostsByPageNumber();
    }

    private selectPostItem(post:Post, index:number){
        this._selectedIndex=index;
        this._postTitle=post.title;
        this._postBody=post.body;
        this._showPostDetail=true;

        this.getComments(post);
    }

    private getComments(post:Post){
        this._isCommentLoading=true;
        this._comments=[];
        this._postService.getPostCommentsById(post)
        .delay(500)
            .subscribe(comments => this.bindPostComments(comments),
            (err) => console.log(err))
    }

    private bindPostComments(comments: PostComment[]){
        this._isCommentLoading=false;
        this._comments = comments;
    }

    private getUsers(){
        this._userService.getUsers()
        .subscribe(u => this.bindUsers(u),
                (err) => this.onUserListGetException())
    }

    private bindUsers(users: User[]){
        this._users = users;
        let user = new User();
        user.id=0;
        user.name='Select User ...'
        this._users.unshift(user)
    }

    private userChanged(userId: number){
        this._posts = null
        this._isUserPostsLoading = true;
        this._showPostDetail=false;
        if(userId > 0){
            this.getPostsByUser(userId);
        }
        else {
            this.getAllPosts()
        }
    }
    private onUserListGetException(){
        this._users = this._userService.getDefaultUsers();
        let user = new User();
        user.id=-1;
        user.name='Select User ...'
        this._users.unshift(user)
    }

    private loadPostsByPageNumber(pageNo?: number){
        this._showPostDetail=false;
        pageNo = pageNo? pageNo: 1;
        let posts:Post[]=[]
        let skip = this._pageSize*(pageNo - 1);
        
        Observable.from(this._allPosts).skip(skip).take(this._pageSize)
        .subscribe(x => posts.push(x))
        this._posts=posts;
    }
   
}