import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Subreddit } from '../model/subreddit';
import { SubredditService } from '../services/subreddit.service';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {
  
  subreddits !: Array<Subreddit>;
  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
      this.subreddits.map(subreddit => subreddit.name = `r/${subreddit.name}`);
    }, error => {
      throwError(error);
    })
  }

}
