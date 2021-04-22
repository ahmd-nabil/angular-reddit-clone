import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts$ : Array<Post> = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log("index called");
    this.postService.getAllPosts().subscribe(data => this.posts$ = data);
  }

  upvotePost() {

  }

  downvotePost() {

  }

}
