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
  displayViewAll !: boolean;  // TODO View All button is not working yet
  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(
      data => {
        if(data.length <= 3) {
          this.subreddits = data;
        } else {
          this.subreddits = data.splice(0, 3);
          this.displayViewAll = true;
        }
         this.subreddits.map(subreddit => subreddit.name = `r/${subreddit.name}`);
      });
  }

}
