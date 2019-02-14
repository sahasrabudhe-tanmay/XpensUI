import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpAccordionComponent } from './xp-accordion.component';

describe('XpAccordionComponent', () => {
  let component: XpAccordionComponent;
  let fixture: ComponentFixture<XpAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open closed accordion', () => {
    component.toggleAccordion();

    expect(component.isOpen).toBeTruthy();
  });

  it('should close opened accordion', () => {
    component.isOpen = true;

    component.toggleAccordion();

    expect(component.isOpen).toBeFalsy();
  });
});
