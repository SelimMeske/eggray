import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent implements OnInit, OnDestroy {

  authListenerSubscription = new Subscription;
  userAuthorized: boolean = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.userAuthorized = this.adminService.getUserAuthStatus();

    this.authListenerSubscription = this.adminService.listenUserAuthStatus().subscribe(data => {
      this.userAuthorized = data;
    });

    if(this.userAuthorized){
      this.router.navigate(['/admin-panel']);
    }
  }

  login(form: NgForm){
    if(form.invalid){
      return
    }
    let user = {
      name: form.value.name,
      password: form.value.password
    }

    this.adminService.login(user.name, user.password);
  }

  ngOnDestroy(){
    this.authListenerSubscription.unsubscribe();
  }
}
