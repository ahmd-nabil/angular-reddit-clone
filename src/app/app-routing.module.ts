import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateSubredditComponent } from './create-subreddit/create-subreddit.component';
import { IndexComponent } from './index/index.component';
import { ListSubredditsComponent } from './list-subreddits/list-subreddits.component';

const routes: Routes = [
  {path:'subreddits', component: ListSubredditsComponent},
  {path:'create-post', component: CreatePostComponent},
  {path:'create-subreddit', component: CreateSubredditComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
