import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  sections = [
    {
      background: 'assets/first.jpg',
      title: '',
      route: ''
    },
    {
      background: 'assets/second.jpg',
      title: 'artists',
      route: ''
    },
    {
      background: 'assets/third.jpg',
      title: 'albums',
      route: ''
    },
    {
      background: 'assets/fourth.jpg',
      title: 'content',
      route: ''
    }
  ]

  height: number;

  constructor() { }

  ngOnInit(): void {
    let screenHeight = window.screen.height;
    this.height = screenHeight - 55;
  }

}
