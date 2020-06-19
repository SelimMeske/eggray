import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  env = environment;

  constructor(private http: HttpClient) { }

  addArtist(title: string, content: string, image: Blob){
    
    let artist = new FormData();

    artist.append('name', title);
    artist.append('content', content);
    artist.append('image', image, title);
    console.log(title, content, image)
    this.http.post(this.env.SERVER_URL + 'artists', artist).subscribe(data => {

    });
  }
}
