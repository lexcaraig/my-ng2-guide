import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePulseComponent } from './circle-pulse.component';

describe('CirclePulseComponent', () => {
  let component: CirclePulseComponent;
  let fixture: ComponentFixture<CirclePulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclePulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
