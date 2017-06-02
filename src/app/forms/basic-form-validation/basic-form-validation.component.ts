import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
}                            from '@angular/forms';

@Component({
  selector: 'app-basic-form-validation',
  templateUrl: './basic-form-validation.component.html',
  styleUrls: ['./basic-form-validation.component.css']
})
export class BasicFormValidationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // build the data from our form
    this.buildForm();
  }

  buildForm() {
    // build our form
    this.form = this.fb.group({
      name: ['', [Validators.required, this.validateName.bind(this)]]
    });
  }

  get name() { return this.form.get('name'); }

  validateName(ctrl: AbstractControl): ValidationErrors | null {
    return ctrl.value === 'condition' ? null : { customError: { expected: 'condition', actual: ctrl.value }}
  }

  processForm() {
    console.log(this.form.value);
  }
}
