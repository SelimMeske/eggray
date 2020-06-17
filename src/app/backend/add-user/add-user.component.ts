import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  addUser(form: NgForm){
    if(form.invalid){
      return
    }
    
    let user = { 
      name: form.value.name,
      password: form.value.password
    }
    console.log(user)

    this.adminService.createUser(user.name, user.password);
  }

}
