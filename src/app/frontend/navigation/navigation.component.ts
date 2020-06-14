import { Component, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventEmitter } from 'events';


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
  
  
  
  menu_links: string[] = [
    'home',
    'artists',
    'content',
    'albums',
    'about'
  ]

  oc_menu: boolean = false;
  @Output() oc_menu_output = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle_mobile_menu(){
    this.oc_menu = !this.oc_menu;
    this. oc_menu_output = this.oc_menu;
  }

}
