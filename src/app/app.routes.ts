import { Routes } from '@angular/router';
import {canActivateAuthRole} from './core/authorization/auth.guard';
import {ForbiddenComponent} from './components/forbidden/forbidden.component';


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: '/dashboard' },
    { path: 'forbidden', component: ForbiddenComponent},
    { path: 'dashboard', loadChildren: () => import('./components/player-dashboard/dashboard.routes').then(m => m.DashboardRoutes), canActivate: [canActivateAuthRole], data: { role: 'PLAYER' } },
];
