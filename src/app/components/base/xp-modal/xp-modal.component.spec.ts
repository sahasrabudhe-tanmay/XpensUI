import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpModalComponent } from './xp-modal.component';

describe('XpModalComponent', () => {
  let component: XpModalComponent;
  let fixture: ComponentFixture<XpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();

    component.closed.subscribe(event =>{
      expect(event).toBeFalsy();
    });
  });
});
