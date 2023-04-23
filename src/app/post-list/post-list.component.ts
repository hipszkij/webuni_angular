import { Component, OnInit } from '@angular/core';
import { Post } from 'src/interfaces/post';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private postListService: PostListService) { }

  ngOnInit(): void {
    this.postListService.getPosts().subscribe(postList => {
      this.posts = postList;
    });
  }

  deletePost(postId: number): void {
    this.postListService.deletePost(postId).subscribe(() => {
      const index = this.posts!.findIndex(post => post.id === postId);
      this.posts!.splice(index, 1);
    });
  }
}
