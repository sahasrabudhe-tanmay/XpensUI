import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { XpButtonComponent } from './components/base/xp-button/xp-button.component';
import { XpAccordionComponent } from './components/base/xp-accordion/xp-accordion.component';
import { XpDropdownComponent } from './components/base/xp-dropdown/xp-dropdown.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        XpButtonComponent,
        XpAccordionComponent,
        XpDropdownComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
