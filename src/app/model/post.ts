import { logging } from "selenium-webdriver";

export class Post  {
    id !: number;
    subredditName !: string;
    username !: string;
    title !: string;
    description !: string;
    url !: string;
    createdTime !: string
    timeAgo !: string;
    commentsCount !: number;
    votesCount !: number;
  }