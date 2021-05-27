import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Post } from '../model/post';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { CommentPayload } from './comment-payload';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  
  id !: number;
  post !: Post;
  // comments section
  commentForm !: FormGroup;
  commentPayload !: CommentPayload;
  comments !: CommentPayload[];

  constructor(private postService : PostService,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
              private router: Router) {
                this.id = this.activatedRoute.snapshot.params.id;
                this.commentForm = new FormGroup({
                  text: new FormControl('', Validators.required)
                });
                this.commentPayload = {
                  text: '',
                  postId: this.id
                };
              }

  ngOnInit(): void {
    this.postService.getPost(this.id).subscribe(
      data => {
        this.post = data;
        this.getCommentsForPost();
      },
      error => {throw(error);}
    );
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text')?.value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text')?.setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    })
  }

  private getPostById() {
    this.postService.getPost(this.id).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.id).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

}
