import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.sass']
})
export class SinglePostComponent implements OnInit {

  id;
  post;
  constructor(private postService: PostService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.postService.getSinglePost(this.id).subscribe(data => {
      this.post = data;
      console.log(this.post)
    });

    
  }

}
