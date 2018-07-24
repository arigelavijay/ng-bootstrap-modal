import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsModalComponent } from './greetings-modal.component';

describe('GreetingsModalComponent', () => {
  let component: GreetingsModalComponent;
  let fixture: ComponentFixture<GreetingsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
