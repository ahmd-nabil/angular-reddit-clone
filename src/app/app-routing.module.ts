import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateSubredditComponent } from './create-subreddit/create-subreddit.component';
import { IndexComponent } from './index/index.component';
import { ListSubredditsComponent } from './list-subreddits/list-subreddits.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'view-subreddit/:subredditId', component: IndexComponent},
  {path:'view-post/:id', component: ViewPostComponent},
  {path:'create-post', component: CreatePostComponent},
  {path:'subreddits', component: ListSubredditsComponent},
  {path:'create-subreddit', component: CreateSubredditComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
