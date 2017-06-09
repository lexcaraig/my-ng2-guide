import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBounceComponent } from './double-bounce.component';

describe('DoubleBounceComponent', () => {
  let component: DoubleBounceComponent;
  let fixture: ComponentFixture<DoubleBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
