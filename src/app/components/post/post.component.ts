import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/Post';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  @Output()
  bubbleUpPost = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  getPost(post: Post): void{
    this.bubbleUpPost.emit(post);
  }
}
