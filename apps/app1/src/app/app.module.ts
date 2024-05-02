import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UilabBaseComponentsModule } from '@uilab/base-components-angular';
import { UilabAppBarModule, UilabNavRailModule } from '@uilab/core-angular';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    UilabAppBarModule,
    UilabNavRailModule,
    UilabBaseComponentsModule,
    MatCheckboxModule,
    MatProgressBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
