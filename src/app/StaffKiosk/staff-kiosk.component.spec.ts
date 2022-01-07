import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffKioskComponent } from './staff-kiosk.component';

describe('StaffKioskComponent', () => {
  let component: StaffKioskComponent;
  let fixture: ComponentFixture<StaffKioskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffKioskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
