import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  chosenOne: Post;

  constructor(private PostSevice: PostService ) {
  }

  ngOnInit(): void {
    this.PostSevice.getAllPosts().subscribe(value => this.posts = value);
  }
  getBubblePost(post):void {
    console.log(post);
    this.chosenOne = post;
  }

}
