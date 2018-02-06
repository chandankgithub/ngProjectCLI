import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'avatar',
    template:`
        <img class="img-circle" width="25px" href="" src="{{url}}">
    `
})

export class AvatarComponent implements OnInit {
    @Input() url:string ="https://i1.wp.com/cdn.auth0.com/avatars/ch.png?ssl=1";
    constructor() { }

    ngOnInit() { }

}