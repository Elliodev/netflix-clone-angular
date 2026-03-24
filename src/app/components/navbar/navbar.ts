import { Component, HostListener, inject } from '@angular/core';
import { Profile } from '../../services/profile';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly serviceProfile = inject(Profile);

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
