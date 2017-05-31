import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import {  LIST_OF_CUSTOM_MESSAGES } from '../utils/constants/form-custom-validation-messages';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  formErrors = {
    name: '',
    email: ''
  };
  validationMessage = {
    name: {
      required: LIST_OF_CUSTOM_MESSAGES.NAME_REQUIRED
    },
    email: {
      required: LIST_OF_CUSTOM_MESSAGES.EMAIL_REQUIRED,
      pattern: LIST_OF_CUSTOM_MESSAGES.EMAIL_INVALID
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // build the data from our form
    this.buildForm();
  }

  buildForm() {
    // initialize regex patterns
    const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    // build our form
    this.form = this.fb.group({
      name: ['', [Validators.required, this.validateName.bind(this)]],
      email: ['', [Validators.required, Validators.pattern(email)]]
    });

    // watch for changes and validate
    this.form.valueChanges.subscribe(date => this.validateForm());
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }

  validateName(ctrl: AbstractControl): ValidationErrors | null {
    return ctrl.value === 'Lex' ? null : { lex: { expected: 'Lex', actual: ctrl.value }}
  }

  validateForm() {
    for(let field in this.formErrors) {
      // clean that input field errors
      this.formErrors[field] = '';
      // grab an input field by name
      let input = this.form.get(field);
      // figure out the type of errors
      if(input.invalid && input.dirty) {
        // loop over the formErrors field names
        for(let error in input.errors) {
          // assign that type of error message to a variable
          this.formErrors[field] = this.validationMessage[field][error];
        }
      }
    }
  }

  processForm() {
    console.log(this.form.value);
  }

}
