import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpExpenseTypeComponent } from './xp-expense-type.component';

describe('XpExpenseTypeComponent', () => {
  let component: XpExpenseTypeComponent;
  let fixture: ComponentFixture<XpExpenseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpExpenseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpExpenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
