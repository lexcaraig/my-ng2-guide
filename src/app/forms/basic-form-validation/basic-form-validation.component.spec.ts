import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormValidationComponent } from './basic-form-validation.component';

describe('BasicFormValidationComponent', () => {
  let component: BasicFormValidationComponent;
  let fixture: ComponentFixture<BasicFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
