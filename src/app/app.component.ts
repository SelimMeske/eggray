import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'eggray';

  constructor(private adminService: AdminService){}

  ngOnInit(){
    this.adminService.autoLogin();
  }

}