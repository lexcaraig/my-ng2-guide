import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanderingCubesComponent } from './wandering-cubes.component';

describe('WanderingCubesComponent', () => {
  let component: WanderingCubesComponent;
  let fixture: ComponentFixture<WanderingCubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanderingCubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanderingCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
