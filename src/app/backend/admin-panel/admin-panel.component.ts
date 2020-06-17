import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router: Router, private mainService: AdminService) { }

  ngOnInit(): void {
  }

  logout(){
    this.mainService.logout();
  }
}
