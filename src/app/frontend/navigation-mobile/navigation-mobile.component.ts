import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.sass'],
  
})
export class NavigationMobileComponent implements OnInit {

  @Input() oc_menu: boolean = true;
  @Output() oc__menu = new EventEmitter<boolean>();

  menu_links: object = [
    {text: 'home', link: ''},
    {text: 'artists', link: '/artists'},
    {text: 'content', link: ''},
    {text: 'albums', link: ''},
    {text: 'about', link: ''}
  ]
  constructor() { }

  ngOnInit(): void {
  
  }

  openCloseToggle(){
    this.oc_menu = !this.oc_menu;
    this.oc__menu.emit(this.oc_menu);
  }

}
