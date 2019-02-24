import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpDayComponent } from './xp-day.component';

describe('XpDayComponent', () => {
  let component: XpDayComponent;
  let fixture: ComponentFixture<XpDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
