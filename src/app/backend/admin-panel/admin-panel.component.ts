import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  currentToolbarOption: string;
  currentRoute: string;

  constructor(private mainService: AdminService, private router: Router) { }

  ngOnInit(): void {

    document.querySelectorAll('.main-sub-option').forEach(element => {

      element.addEventListener('click', () => {
        
        let toolbarParent = element.parentElement;
        
        if(toolbarParent.classList.contains('toggle-toolbar-options')){
          
          toolbarParent.classList.remove('toggle-toolbar-options')
        }else{
          this.closeUnactiveSubMenus();
          toolbarParent.classList.add('toggle-toolbar-options')
        }
      });
       
    });

    this.setCurrentToolbarNavi();
  
    this.router.events.subscribe((event: RouterEvent) => {
      
      if(event instanceof NavigationEnd){
        this.currentRoute = event.url.replace('/', '').replace('admin-panel', '').replace('/', '');
        this.setCurrentToolbarNavi();
      }
    });
  }

  logout(){
    this.mainService.logout();
  }

  closeUnactiveSubMenus(){
    document.querySelectorAll(".main-sub-option").forEach(element => {
      element.parentElement.classList.add('toggle-toolbar-options');
    });
  }

  setCurrentToolbarNavi(){
    document.querySelectorAll('.toolbar-option').forEach(element => {
      element.classList.remove('selected-option');
      (element.firstChild as HTMLParagraphElement).style.fontWeight = 'normal';
      
      let routerValue = element.getAttribute('routerLink');
      this.currentRoute = this.router.url.replace('/', '').replace('admin-panel', '').replace('/', '');

      if(this.currentRoute === routerValue){
        this.closeUnactiveSubMenus();
        element.classList.add('selected-option');
        (element.firstChild as HTMLParagraphElement).style.fontWeight = 'bold';
        (element.parentElement.firstChild as HTMLDivElement).classList.add('selected-option');
        if(element.parentElement.classList.contains('toggle-toolbar-options')){
          element.parentElement.classList.remove('toggle-toolbar-options')
        }
      }
    })
  }
}
