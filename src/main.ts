import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import startMirage from '../bigtest/network/start';

if (environment.production) {
  enableProdMode();
}

if (environment.MIRAGE_SCENARIO) {
  console.log('mirage scenario: ', environment.MIRAGE_SCENARIO);
  startMirage(environment.MIRAGE_SCENARIO.split(','));
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
