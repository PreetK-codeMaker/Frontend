import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCompletionDialogComponent } from './event-completion-dialog.component';

describe('EventCompletionDialogComponent', () => {
  let component: EventCompletionDialogComponent;
  let fixture: ComponentFixture<EventCompletionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCompletionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCompletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
