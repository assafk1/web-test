import { Component, HostListener } from '@angular/core';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web-test';
  showMenu: boolean = false;
  classTest: String = 'hideMenu';
  screenWidth: number;

  menuItems: MenuItem[] = [
    { title: "Home", link: 'home' },
    { title: "Content", link: 'content' },
    { title: "About", link: 'about' },
    { title: "Contact Us", link: 'contact-us' }
  ];

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    console.log("this.screenWidth " + this.screenWidth);
  }

  menu() {
    if (this.screenWidth < 500) {
      this.showMenu = !this.showMenu;
      this.classTest = this.showMenu ? 'showMenuAnim' : 'hideMenuAnim';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
}
