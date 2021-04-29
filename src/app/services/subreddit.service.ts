import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subreddit } from '../model/subreddit';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  subredditBaseUrl = 'http://localhost:8080/api/subreddits';
  constructor(private httpClient: HttpClient) { }

  getAllSubreddits(): Observable<Array<Subreddit>> {
    return this.httpClient.get<Array<Subreddit>>(this.subredditBaseUrl);
  }

  createSubreddit(subreddit: Subreddit) {
    subreddit.name = `r/${subreddit.name}`;
    return this.httpClient.post<String>(this.subredditBaseUrl, subreddit);
  }

}
