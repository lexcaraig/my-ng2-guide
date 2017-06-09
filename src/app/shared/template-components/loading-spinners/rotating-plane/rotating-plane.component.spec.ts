import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingPlaneComponent } from './rotating-plane.component';

describe('RotatingPlaneComponent', () => {
  let component: RotatingPlaneComponent;
  let fixture: ComponentFixture<RotatingPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
