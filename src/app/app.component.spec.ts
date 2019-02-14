import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { XpButtonComponent } from './components/base/xp-button/xp-button.component';
import { XpAccordionComponent } from './components/base/xp-accordion/xp-accordion.component';
import { XpDropdownComponent } from './components/base/xp-dropdown/xp-dropdown.component';
import { XpModalComponent } from './components/base/xp-modal/xp-modal.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        XpButtonComponent,
        XpAccordionComponent,
        XpDropdownComponent,
        XpModalComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.openModal();

    expect(component.showModal).toBeTruthy();
  });

  it('should close modal', () => {
    component.showModal = true;

    component.closeModal();

    expect(component.showModal).toBeFalsy();
  });
});
