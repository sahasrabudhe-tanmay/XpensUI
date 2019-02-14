import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XpDropdownComponent } from './components/base/xp-dropdown/xp-dropdown.component';
import { XpAccordionComponent } from './components/base/xp-accordion/xp-accordion.component';
import { XpButtonComponent } from './components/base/xp-button/xp-button.component';
import { XpModalComponent } from './components/base/xp-modal/xp-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    XpDropdownComponent,
    XpAccordionComponent,
    XpButtonComponent,
    XpModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
