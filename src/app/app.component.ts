import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'eggray';

  inBackend: boolean = false;

  constructor(private adminService: AdminService, public router: Router){}

  ngOnInit(){
    
    this.adminService.autoLogin();
    let currentPath = window.location.pathname;
    let currentPathTrim = currentPath.replace('/', '').split('-')[0];

    if(currentPathTrim === 'admin'){
      this.inBackend = true;
    }
  }

}