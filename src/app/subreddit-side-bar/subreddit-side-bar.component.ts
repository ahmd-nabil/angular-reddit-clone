import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subreddit } from '../model/subreddit';
import { SubredditService } from '../services/subreddit.service';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit {
  
  subreddits !: Array<Subreddit>;
  displayViewMore !: boolean;
  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(
      data => {
        if(data.length <= 4) {
          this.subreddits = data;
        } else {
          this.subreddits = data.splice(0, 4);
          this.displayViewMore = true;
        }
         this.subreddits.map(subreddit => subreddit.name = `r/${subreddit.name}`);
      });
  }

}
