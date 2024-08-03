import { Routes } from '@angular/router';
import { PageErrorComponent } from '@pages/error/page-error.component';

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
    {
        path: 'tuyen-dung',
        loadComponent: () =>
            import('../../pages/recruit/recruit.component').then(
                (m) => m.RecruitComponent
            ),
        title: 'Tuyển dụng',
    },
    {
        path: 'tuyen-dung/:slug',
        loadComponent: () =>
            import(
                '../../pages/recruit/components/recruit-detail/recruit-detail.component'
            ).then((m) => m.RecruitDetailComponent),
    },
    {
        path: 'lien-he',
        loadComponent: () =>
            import('../../pages/contact/contact.component').then(
                (m) => m.ContactComponent
            ),
        title: 'Liên hệ',
    },
    {
        path: 'het-han',
        loadComponent: () =>
            import('../../pages/error/page-expired.component').then(
                (m) => m.PageExpiredComponent
            ),
        title: 'Trang hết hạn',
    },
    {
        path: '**',
        component: PageErrorComponent,
    },
];