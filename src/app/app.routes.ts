import { Routes } from '@angular/router';
import { Profiles } from './components/profiles/profiles';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profiles',
        pathMatch: 'full',
    },
    {
        path: 'profiles',
        component: Profiles,
    },
    {
        path: 'home',
        component: Home,
    },
];
