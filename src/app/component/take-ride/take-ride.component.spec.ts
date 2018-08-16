import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeRideComponent } from './take-ride.component';

describe('TakeRideComponent', () => {
  let component: TakeRideComponent;
  let fixture: ComponentFixture<TakeRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
