import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.sass'],
  
})
export class NavigationMobileComponent implements OnInit {

  @Input() oc_menu: boolean = false;

  menu_links: string[] = [
    'home',
    'artists',
    'content',
    'albums',
    'about'
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.oc_menu)
  }

}
