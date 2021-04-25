import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subreddit } from '../model/subreddit';
import { SubredditService } from '../services/subreddit.service';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {

  createSubredditForm !: FormGroup;
  subreddit !: Subreddit;

  constructor(private router: Router, private subRedditService: SubredditService) { 
    this.subreddit = new Subreddit();
    this.createSubredditForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.noWhiteSpacesValidator]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  createSubreddit() {
    console.log("in create component");
    this.subreddit.name = this.createSubredditForm.get('name')?.value;
    this.subreddit.description = this.createSubredditForm.get('description')?.value;
    this.subRedditService.createSubreddit(this.subreddit).subscribe(response => {
      if(response == null)
        this.router.navigateByUrl('/subreddits');
    });
  }

  discard() {

  }

  public noWhiteSpacesValidator(control: FormControl) {
    const isValid = control.value.replace(/\s/g, "").length === control.value.length;
    return isValid ? null : { 'whitespace': true };
  }
}
