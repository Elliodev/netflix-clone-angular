
import { Injectable, signal } from '@angular/core';
import { IProfile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  private _selectedProfile = signal<IProfile | null>(null);
  readonly selectedProfile = this._selectedProfile.asReadonly();

  selectProfile(profile: IProfile) {
    this._selectedProfile.set(profile);
  }
}
