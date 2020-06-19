import { Component, OnInit, Output, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventEmitter } from 'events';
import { AdminService } from 'src/app/services/admin.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({   
        opacity: 0,
        transform: 'translateX(-600px)'
      })),
      transition('open => closed', [
        animate('0.4s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  
  @Input() adminName;
  
  menu_links: string[] = [
    'home',
    'artists',
    'content',
    'albums',
    'about'
  ]

  sticky_nav = false;
  oc_menu: boolean = false;
  @Output() oc_menu_output = false;
  constructor() { }

  ngOnInit(): void {
    
    window.addEventListener('scroll', () => {
      if(window.scrollY <= 55){
        this.sticky_nav = false;
      }else{
        this.sticky_nav = true;
      }
    });
    
  }
  
  toggle_mobile_menu(){
    this.oc_menu = !this.oc_menu;
    this. oc_menu_output = this.oc_menu;
  }
  
}
