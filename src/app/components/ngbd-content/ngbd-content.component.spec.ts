import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdContentComponent } from './ngbd-content.component';

describe('NgbdContentComponent', () => {
  let component: NgbdContentComponent;
  let fixture: ComponentFixture<NgbdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
