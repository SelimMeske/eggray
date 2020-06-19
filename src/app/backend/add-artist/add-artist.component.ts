import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from '../mime-type.validator';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.sass']
})
export class AddArtistComponent implements OnInit {

  image_preview;
  artist_form: FormGroup;
  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.artist_form = new FormGroup(
      {
      
      title: new FormControl(null, {validators: [Validators.required]}),
      content: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    })

  }

  onImageChange(event: Event){
    let image = (event.target as HTMLInputElement).files[0];
    this.artist_form.patchValue({image: image})
    this.artist_form.get('image').updateValueAndValidity();

    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.image_preview = reader.result as string;
    }
  }
  
  save_post(){
    let artist = {
      title: this.artist_form.value.title, 
      content: this.artist_form.value.content,
      image: this.artist_form.value.image
    }
    console.log(artist)
    this.postService.addArtist(artist.title, artist.content, artist.image);
  }
}
