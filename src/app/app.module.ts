import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GreetingsModalComponent } from './components/greetings-modal/greetings-modal.component';
import { NgbdModalComponent } from './components/ngbd-modal/ngbd-modal.component';
import { NgbdContentComponent } from './components/ngbd-content/ngbd-content.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsModalComponent,
    NgbdModalComponent,
    NgbdContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdContentComponent]
})
export class AppModule { }
