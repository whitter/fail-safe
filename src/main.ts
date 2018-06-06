import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {faBed, faUserMd, faCalendarAlt} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(faBed, faUserMd, faCalendarAlt);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
