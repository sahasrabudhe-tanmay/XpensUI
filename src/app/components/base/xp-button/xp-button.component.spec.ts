import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpButtonComponent } from './xp-button.component';

describe('XpButtonComponent', () => {
  let component: XpButtonComponent;
  let fixture: ComponentFixture<XpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
