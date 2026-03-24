import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../services/profile';
import { IProfile } from '../../models/profile';

@Component({
  selector: 'app-profiles',
  imports: [],
  templateUrl: './profiles.html',
  styleUrl: './profiles.scss',
})
export class Profiles {
  profiles = [
    {
      name: 'Ellio',
      image: 'pp_raul_bautista_500x500.jpg'
    },
    {
      name: 'David',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    },
    {
      name: 'Nathan',
      image: 'https://occ-0-6689-56.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWeEck2tP_bTrnPi8hPjLDw0KRcK64CMnavOVgL5w4Hbk-CTB7CZTRTkSuudJV49iu4L5t91P3ENsG5uqJpPcpDAk0t1qMCowXtX.png?r=b39&quot'
    },
    {
      name: 'Thomas',
      image: 'https://occ-0-6689-56.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABZecwpHiFAnF33MERWWx_P74Rw93gKDYS8F_h5NwIqlovZva37elJRtBqbF9PmJxwZphichJh5eh_Y56mIZ3mlscOSPtyyzsz3o5.png?r=7c7&quot'
    },
    {
      name: 'Jeunesse',
      image: 'https://occ-0-6689-56.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABUXgBr1nNmPySTEdpO6P21qxT12c0mZ0FA1wEC87qvjWUYE6511g5xm92u-QiQb4dgzYnNucbG3xGsUWpDqTBRLbsgSjH9avim-3GdgDx5ejS9rC-JQbNRkcCieHHvClO7_OLkMB1JPfij_lr1E.png?r=181&quot'
    }
  ]

  private router = inject(Router);
  private serviceProfile = inject(Profile);

  goToHome(profile: IProfile) {
    this.serviceProfile.selectProfile(profile)

    this.router.navigate(['/home']);
  }
}
