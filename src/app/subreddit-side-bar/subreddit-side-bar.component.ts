import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { Subreddit } from '../model/subreddit';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent implements OnInit {
  subreddits !: Array<Subreddit>;
  displayViewAll !: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
