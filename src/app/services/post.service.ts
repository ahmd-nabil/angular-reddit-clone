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
}
