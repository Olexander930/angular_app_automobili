import { Routes } from '@angular/router';
import { AutoList } from './auto-list/auto-list';
import { AutoDetails } from './auto-details/auto-details';
import { AutoFormComponent } from './auto-form/auto-form';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: AutoList },
  { path: 'cars/:id', component: AutoDetails },
  { path: 'add-auto', component: AutoFormComponent }
];
