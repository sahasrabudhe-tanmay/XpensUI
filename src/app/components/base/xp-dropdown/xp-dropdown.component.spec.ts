import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpDropdownComponent } from './xp-dropdown.component';

describe('XpDropdownComponent', () => {
  let component: XpDropdownComponent;
  let fixture: ComponentFixture<XpDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
