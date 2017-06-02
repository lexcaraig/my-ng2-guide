import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSectionComponent } from './section/form-section.component';
import { FormsComponent } from './custom-validation/forms.component';
import { BasicFormValidationComponent } from './basic-form-validation/basic-form-validation.component';
import { FormRxjsComponent } from './rxjs/form-rxjs.component';

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
