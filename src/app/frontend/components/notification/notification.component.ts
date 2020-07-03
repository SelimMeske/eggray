import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  message: string;
  messagesSubscription = new Subscription;
  notificationList: string[] = [];

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.messagesSubscription = this.notificationService.listenForNotifications().subscribe(data => {
      this.message = data;
      this.notificationList.push(this.message);
      this.cleanNotifications();
    });
  }

  cleanNotifications(){
    setTimeout(() => {
      this.notificationList.shift();
    }, 4000)
  }

}
