import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminService } from './admin.service';
import { Subject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  env = environment;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  addArtist(title: string, content: string, image: Blob, post_image: Blob, autor: string, draft: string){
    
    let artist = new FormData();

    artist.append('name', title);
    artist.append('content', content);
    artist.append('image', image, title);
    artist.append('image', post_image, 'Post image');
    artist.append('autor', autor);
    artist.append('draft', draft);
    this.http.post<{message: string}>(this.env.SERVER_URL + 'artists', artist).subscribe(data => {
      this.notificationService.pushNotification(data.message);
    });
  }

  getAllPosts(){
    return this.http.get(this.env.SERVER_URL + 'artists');
  }

  getSinglePost(id: number){
    return this.http.get(this.env.SERVER_URL + 'artists/' + id);
  }

  updatePost(id: Number, name: string, content: string, image: Blob | string, post_image: Blob | string, draft: string){
    
    let artist = new FormData();

    if(typeof image === 'object' && typeof post_image === 'object'){
      artist.append('image', image, name);
      artist.append('image', post_image, 'Post image');
    }else if(typeof image === 'object'){
      artist.append('image', image, name);
      artist.append('post_image', post_image);
    }else if(typeof post_image === 'object'){
      artist.append('image', post_image, 'Post image');
      artist.append('image', image);
    }else{
      artist.append('image', image);
      artist.append('post_image', post_image);
    }

    artist.append('name', name);
    artist.append('content', content);
    artist.append('draft', draft);

    this.http.put<{message: string}>(this.env.SERVER_URL + 'artists/'+ id, artist).subscribe(data => {
      this.notificationService.pushNotification(data.message);
    });
    
  }

  deletePost(id: number){
    let id_ = id;
    console.log(this.env.SERVER_URL + 'artists/'+ id_)
    this.http.delete<{message: string}>(this.env.SERVER_URL + 'artists/' + id_).subscribe(data => {
      this.notificationService.pushNotification(data.message);
    });
  }
}
