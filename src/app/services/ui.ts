import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ui {
  private _isSearchOpen = signal(false);
  readonly isSearchOpen = this._isSearchOpen.asReadonly();

  toggleSearch() {
    this._isSearchOpen.update(value => !value);
  }
}
