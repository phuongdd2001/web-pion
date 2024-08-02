import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../../pages/home/home.component').then(
                (m) => m.HomeComponent
            ),
        title: 'Home',
    },
    {
        path: 'chung-toi',
        loadComponent: () =>
            import('../../pages/teams/teams.component').then(
                (m) => m.TeamsComponent
            ),
        title: 'Teams',
    },
];

