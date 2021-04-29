import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostRequest } from '../create-post/create-post-request';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>('http://localhost:8080/api/posts');
  }

  createPost(post: CreatePostRequest): Observable<String> {
    return this.httpClient.post<String>('http://localhost:8080/api/posts', post);
  }

  getPost(id: number): Observable<any> {
    return this.httpClient.get<Post>('http://localhost:8080/api/posts/'+id);
  }

  getPostsBySubredditId(id: number) : Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>('http://localhost:8080/api/posts/subreddit/'+id);
  }

  getPostsBySubredditName(name: string) : Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>('http://localhost:8080/api/posts/subreddit/'+name);
  }
}
