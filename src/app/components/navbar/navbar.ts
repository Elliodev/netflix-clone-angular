import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled : boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 1) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
