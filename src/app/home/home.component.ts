import { Component, OnInit } from '@angular/core';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts = [];
  public errorMsg;
  constructor(private _postsService: PostsService ) { }

  ngOnInit(){
    this._postsService.getPosts()
    .subscribe(data => this.posts = data,
               error => this.errorMsg = error);
  }

}
