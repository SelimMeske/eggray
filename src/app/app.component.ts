import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from './services/admin.service';
import { Router, RouterEvent, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  @Output() adminName;

  title = 'eggray';

  inBackend: boolean = false;
  checkAdminListener = new Subscription;
  currentPathTrim: string;
  constructor(private adminService: AdminService, public router: Router){}

  ngOnInit(){

    this.checkAdminListener = this.adminService.getAdminUserName().subscribe(data => {
      this.adminName = data;
    });
    
    this.adminService.autoLogin();

    this.router.events.subscribe((event: RouterEvent) => {
      if(event instanceof NavigationEnd){
        this.currentPathTrim = event.url.replace('/', '').split('-')[0];
        
        if(this.currentPathTrim === 'admin'){
          this.inBackend = true;
        }else{
          this.inBackend = false;
        }
      }
    });

    
    
  }

}