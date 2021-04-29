import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id !: number;
  post !: Post;
  constructor(private postService : PostService,
              private activatedRoute: ActivatedRoute) {
                this.id = this.activatedRoute.snapshot.params.id;
              }

  ngOnInit(): void {
    this.postService.getPost(this.id).subscribe(
      data => {this.post = data;},
      error => {throw(error);}
    );
  }

}
