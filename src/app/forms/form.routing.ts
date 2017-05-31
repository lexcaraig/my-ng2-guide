import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSectionComponent } from './form-section.component';
import { FormsComponent } from './forms.component';
import { BasicFormValidationComponent } from './basic-form-validation/basic-form-validation.component';
import { FormRxjsComponent } from './form-rxjs.component';

const formRoutes: Routes = [
  {
    path: '',
    component: FormSectionComponent,
    children: [
      { path: '', component: FormsComponent },
      { path: 'basic-form-validation', component: BasicFormValidationComponent },
      { path: 'rxjs', component: FormRxjsComponent }
    ]
  }
]

export const formRouting: ModuleWithProviders = RouterModule.forChild(formRoutes);
