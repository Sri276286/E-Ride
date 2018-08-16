import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRideComponent } from './share-ride.component';

describe('ShareRideComponent', () => {
  let component: ShareRideComponent;
  let fixture: ComponentFixture<ShareRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
