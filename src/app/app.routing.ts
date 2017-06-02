// base routing
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';

import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: GreetingsComponent },
  { path: 'form', loadChildren: './forms/form.module#FormModule' },
  { path: '**', component: NotFoundComponent } // not found path should always be at the last order
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
