import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule,NgbModule,     
      BrowserAnimationsModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(),withFetch()),
    provideRouter(routes, withPreloading(PreloadAllModules)) //, withDebugTracing())
  ]
};
