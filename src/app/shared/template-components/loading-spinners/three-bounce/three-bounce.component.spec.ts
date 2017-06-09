import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBounceComponent } from './three-bounce.component';

describe('ThreeBounceComponent', () => {
  let component: ThreeBounceComponent;
  let fixture: ComponentFixture<ThreeBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
