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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set type as "continue"', () => {
    component.btnType = 'continue';

    fixture.detectChanges();

    expect(component.typeClass["continue-btn"]).toBeTruthy();
    expect(component.typeClass["add-btn"]).toBeFalsy();
    expect(component.typeClass["cancel-btn"]).toBeFalsy();
    expect(component.typeClass["default-btn"]).toBeFalsy();
    expect(component.typeClass["save-btn"]).toBeFalsy();
  });

  it('should set type as "add"', () => {
    component.btnType = 'add';

    fixture.detectChanges();

    expect(component.typeClass["continue-btn"]).toBeFalsy();
    expect(component.typeClass["add-btn"]).toBeTruthy();
    expect(component.typeClass["cancel-btn"]).toBeFalsy();
    expect(component.typeClass["default-btn"]).toBeTruthy();
    expect(component.typeClass["save-btn"]).toBeFalsy();
  });

  it('should set type as "cancel"', () => {
    component.btnType = 'cancel';

    fixture.detectChanges();

    expect(component.typeClass["continue-btn"]).toBeFalsy();
    expect(component.typeClass["add-btn"]).toBeFalsy();
    expect(component.typeClass["cancel-btn"]).toBeTruthy();
    expect(component.typeClass["default-btn"]).toBeFalsy();
    expect(component.typeClass["save-btn"]).toBeFalsy();
  });

  it('should set type as "default"', () => {
    component.btnType = 'default';

    fixture.detectChanges();

    expect(component.typeClass["continue-btn"]).toBeFalsy();
    expect(component.typeClass["add-btn"]).toBeFalsy();
    expect(component.typeClass["cancel-btn"]).toBeFalsy();
    expect(component.typeClass["default-btn"]).toBeTruthy();
    expect(component.typeClass["save-btn"]).toBeFalsy();
  });

  it('should set type as "save"', () => {
    component.btnType = 'save';

    fixture.detectChanges();

    expect(component.typeClass["continue-btn"]).toBeFalsy();
    expect(component.typeClass["add-btn"]).toBeFalsy();
    expect(component.typeClass["cancel-btn"]).toBeFalsy();
    expect(component.typeClass["default-btn"]).toBeFalsy();
    expect(component.typeClass["save-btn"]).toBeTruthy();
  });
});
