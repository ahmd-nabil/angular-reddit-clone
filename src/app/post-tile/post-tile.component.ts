import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { SubredditService } from '../services/subreddit.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})

export class PostTileComponent implements OnInit {
  faComments = faComments;

  posts$ : Array<Post> = [];
  subredditId !: number;

  constructor(private postService: PostService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private subredditService: SubredditService) { 
    console.log(this.activatedRoute)
    this.subredditId = this.activatedRoute.snapshot.params.subredditId;
  }

  ngOnInit(): void {
    console.log(this.subredditId);
    if(this.subredditId !== undefined) {
      this.postService.getPostsBySubredditId(this.subredditId).subscribe(data => this.posts$ = data);
    } else {
      this.postService.getAllPosts().subscribe(data => this.posts$ = data);
    }
  }


  goToPost(id : number) {
    this.router.navigateByUrl(`view-post/${id}`);
  }
}
