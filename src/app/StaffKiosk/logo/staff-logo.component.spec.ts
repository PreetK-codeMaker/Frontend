import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLogoComponent } from './staff-logo.component';

describe('LogoComponent', () => {
  let component: StaffLogoComponent;
  let fixture: ComponentFixture<StaffLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
