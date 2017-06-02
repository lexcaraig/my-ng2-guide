import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormSectionComponent } from './section/form-section.component';
import { FormsComponent } from './custom-validation/forms.component';
import { BasicFormValidationComponent } from './basic-form-validation/basic-form-validation.component';
import { FormRxjsComponent } from './rxjs/form-rxjs.component';

import { formRouting } from './form.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    formRouting
  ],
  declarations: [
    FormSectionComponent,
    FormsComponent,
    BasicFormValidationComponent,
    FormRxjsComponent
  ],
  providers: [

  ]
})
export class FormModule {}
