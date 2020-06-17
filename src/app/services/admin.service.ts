import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  env = environment;
  userAuthorised: boolean = false;
  userAuthStatus = new Subject<boolean>();
  userToken: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(name: string, password: string){

    let user = {
      name: name,
      password: password
    }

    this.http.post<{message:string, token:string, expiresIn: string}>(this.env.SERVER_URL + '/login', user).subscribe(response => {
      if(response){
        this.userAuthorised = true;
        this.userAuthStatus.next(true);
        let current_time = new Date().getTime() + (+response.expiresIn * 1000);
        let timeoutTime = current_time - new Date().getTime();
        this.tokenTimer(timeoutTime);
        this.saveToLocal(response.token, new Date(current_time));
        this.router.navigate(['/admin-panel']);
      }
    });
  }
  
  createUser(name: string, password: string){

    this.http.post(this.env.SERVER_URL, {name: name, password: password}).subscribe(response => {
      console.log(response);
    }); 
  }

  tokenTimer(time){
    console.log(time)
    setTimeout(() => {
      this.logout();
    }, time);
  }

  logout(){
    console.log('Logout')
    this.userAuthorised = false;
    this.clearFromLocal();
    this.router.navigate(['/admin']);
  }

  saveToLocal(token: string, time: Date){
    localStorage.setItem('token', token);
    localStorage.setItem('date', time.toISOString());
  }

  clearFromLocal(){
    localStorage.removeItem('token');
    localStorage.removeItem('date');
  }

  autoLogin(){

    let token = this.getLocalStorage().token;
    let inFuture = new Date(this.getLocalStorage().date).getTime() - new Date().getTime();
    console.log('is in future ' + inFuture)

    if(!token){
      return;
    }

    if(inFuture > 0){

      this.userAuthStatus.next(true);
      this.userAuthorised = true;
      this.tokenTimer(inFuture);

    }else{
      console.log('loggged')
      this.logout();
      this.clearFromLocal();

    }   
  }

  listenUserAuthStatus(){
    return this.userAuthStatus.asObservable();
  }

  getUserAuthStatus(){
    return this.userAuthorised;
  }

  getLocalStorage() {
    return {
      token: localStorage.getItem('token'),
      date: localStorage.getItem('date')
    }
  }
}
