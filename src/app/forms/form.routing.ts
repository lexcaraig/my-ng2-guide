import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSectionComponent } from './form-section.component';
import { FormsComponent } from './forms.component';
import { FormRxjsComponent } from './form-rxjs.component';

const formRoutes: Routes = [
  {
    path: '',
    component: FormSectionComponent,
    children: [
      { path: '', component: FormsComponent },
      { path: 'rxjs', component: FormRxjsComponent }
    ]
  }
]

export const formRouting: ModuleWithProviders = RouterModule.forChild(formRoutes);
