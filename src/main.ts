import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

const supportedLangs = ['pt', 'en-us'];
const path = window.location.pathname.toLowerCase();

const isLocalized = supportedLangs.some((lang) => path.startsWith(`/${lang}`));

if (!isLocalized) {
  const browserLang = navigator.language.toLowerCase();
  const lang = browserLang.startsWith('pt') ? 'pt' : 'en-US';

  window.location.replace(`/${lang}`);
} else {
  bootstrapApplication(AppComponent, appConfig).catch(console.error);
}
