import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subreddit } from '../model/subreddit';
import { PostService } from '../services/post.service';
import { SubredditService } from '../services/subreddit.service';
import { CreatePostRequest } from './create-post-request';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  createPostForm !: FormGroup;
  createPostRequest !: CreatePostRequest;
  subreddits !: Array<Subreddit>

  constructor(private subredditService: SubredditService,
              private postService: PostService,
              private router: Router) { 
    this.createPostRequest = {
      title: '',
      description: '',
      subredditId: 0
    }

    subredditService.getAllSubreddits().subscribe(subreddits => this.subreddits = subreddits);
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subredditId: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  createPost(){
    this.createPostRequest.title = this.createPostForm.get('title')?.value;
    this.createPostRequest.subredditId = this.createPostForm.get('subredditId')?.value;
    this.createPostRequest.description = this.createPostForm.get('description')?.value;

    this.postService.createPost(this.createPostRequest).subscribe(
      data => {
        this.router.navigateByUrl('/');
      },
      error => {
        throw(error);
      }
    )
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}
