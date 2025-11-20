import { Routes } from '@angular/router';
import { AutoList } from './auto-list/auto-list';
import { AutoDetails } from './auto-details/auto-details';
import { AutoFormComponent } from './auto-form/auto-form';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },

  { path: 'cars', component: AutoList },
  { path: 'cars/:id', component: AutoDetails },

  { path: 'add-auto', component: AutoFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AutoFormComponent, canActivate: [AuthGuard] },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: 'cars' }
];
