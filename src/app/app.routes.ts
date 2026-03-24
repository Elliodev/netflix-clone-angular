import { Routes } from '@angular/router';
import { Profiles } from './components/profiles/profiles';
import { Home } from './components/home/home';
import { Search } from './components/search/search';

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
    {
        path: 'search',
        component: Search,
    }
];
