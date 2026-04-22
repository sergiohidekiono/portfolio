import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

const savedLang = localStorage.getItem('lang');
const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en-US';
const lang = savedLang || browserLang;

const path = window.location.pathname;

if (path === '/' || path === '') {
  window.location.replace(`/${lang}`);
} else {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
}
