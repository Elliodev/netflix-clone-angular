import { Component, HostListener, inject } from '@angular/core';
import { Profile } from '../../services/profile';
import { Router } from '@angular/router';
import { Ui } from '../../services/ui';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);
  readonly serviceProfile = inject(Profile);
  readonly serviceUi = inject(Ui);

  isScrolled : boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 1) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  search(query: string) {
    if (this.router.url.includes('/search')) {
      this.router.navigate([], {
        queryParams: { q: query },
        replaceUrl: true
      });
    } else {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }

  toggleSearch() {
    this.serviceUi.toggleSearch();
  }
}
