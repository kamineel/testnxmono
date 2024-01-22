import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElement as uilabIconDCE } from '@uilab/icon/components/uilab-icon';

import { AppModule } from './app/app.module';

uilabIconDCE();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
