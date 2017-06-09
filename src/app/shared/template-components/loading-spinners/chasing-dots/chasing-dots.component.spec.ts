import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasingDotsComponent } from './chasing-dots.component';

describe('ChasingDotsComponent', () => {
  let component: ChasingDotsComponent;
  let fixture: ComponentFixture<ChasingDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChasingDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChasingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
