import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-artist-posts',
  templateUrl: './all-artist-posts.component.html',
  styleUrls: ['./all-artist-posts.component.sass']
})
export class AllArtistPostsComponent implements OnInit {

  posts;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
    
  }
}
