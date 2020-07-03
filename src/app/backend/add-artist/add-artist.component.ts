import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from '../mime-type.validator';
import { PostService } from 'src/app/services/post.service';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.sass']
})
export class AddArtistComponent implements OnInit {
  
  currentPostId: string;
  mainButtonText: string = 'Publish post';
  currentPost;
  mode: string = 'add';
  adminUserName: string;
  artistImagePreview;
  postImagePreview;
  artist_form: FormGroup;
  constructor(private postService: PostService, private adminService: AdminService, private router: ActivatedRoute, private router_: Router) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
  
    this.adminUserName = localStorage.getItem('user');

    this.artist_form = new FormGroup(
      {
      
      title: new FormControl(null, {validators: [Validators.required]}),
      content: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
      post_image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    })
    
    if(id){
      this.currentPostId = id;
      this.mode = 'edit';
      this.postService.getSinglePost(+id).subscribe(data => {
        this.currentPost = data;
        this.artist_form.setValue({title: this.currentPost.name, content: this.currentPost.content, image: this.currentPost.image, post_image: this.currentPost.post_image});
        this.artistImagePreview = this.currentPost.image;
        this.postImagePreview = this.currentPost.post_image;
      });
      
    }else{
      this.mode = 'add';
    }
  }

  onImageChange(event: Event){
    let image = (event.target as HTMLInputElement).files[0];
    this.artist_form.patchValue({image: image})
    this.artist_form.get('image').updateValueAndValidity();

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.artistImagePreview = reader.result as string;
    }
  }
  
  onPostImageChange(event: Event){
    let image = (event.target as HTMLInputElement).files[0];
    this.artist_form.patchValue({post_image: image});
    this.artist_form.get('post_image').updateValueAndValidity();

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.postImagePreview = reader.result;
    };
  }

  savePost(draft: string){
    let artist = {
      title: this.artist_form.value.title, 
      content: this.artist_form.value.content,
      image: this.artist_form.value.image,
      post_image: this.artist_form.value.post_image,
      autor: this.adminUserName,
      draft: draft
    }
    this.postService.addArtist(artist.title, artist.content, artist.image, artist.post_image, artist.autor, artist.draft);
    this.artist_form.reset();
  }

  updatePost(draft: string){
    let artist = {
      title: this.artist_form.value.title,
      content: this.artist_form.value.content,
      image: this.artist_form.value.image,
      post_image: this.artist_form.value.post_image,
      autor: this.adminUserName,
      draft: draft
    }
    this.postService.updatePost(+this.currentPostId, artist.title, artist.content, artist.image, artist.post_image, artist.draft);
  }

  deletePost(id: number){
    this.postService.deletePost(id);
    this.router_.navigate(['/admin-panel/all-posts']);
  }
}
