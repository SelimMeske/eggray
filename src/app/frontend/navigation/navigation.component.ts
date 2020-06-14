import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  menu_links: string[] = [
    'home',
    'artists',
    'content',
    'albums',
    'about'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
