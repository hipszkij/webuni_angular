import { Component, OnInit } from '@angular/core';
import { Post } from 'src/interfaces/post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  deletePost(postId: number): void {
    this.postService.deletePost(postId).subscribe(() => {
      const index = this.posts!.findIndex(post => post.id === postId);
      this.posts!.splice(index, 1);
    });
  }
}
