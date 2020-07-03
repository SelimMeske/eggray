import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationListener = new Subject<string>();

  constructor() { }

  listenForNotifications(){
    return this.notificationListener.asObservable();
  }

  pushNotification(message: string){
    this.notificationListener.next(message);
  }
}
