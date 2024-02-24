import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'organizacao-financeira',
                loadComponent: () => import('./modules/organizacao-financeira/organizacao-financeira.component').then(c => c.OrganizacaoFinanceiraComponent)
            },
            {
                path: '',
                redirectTo: 'organizacao-financeira',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
