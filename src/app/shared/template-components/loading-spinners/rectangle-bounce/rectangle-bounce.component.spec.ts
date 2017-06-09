import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleBounceComponent } from './rectangle-bounce.component';

describe('RectangleBounceComponent', () => {
  let component: RectangleBounceComponent;
  let fixture: ComponentFixture<RectangleBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
