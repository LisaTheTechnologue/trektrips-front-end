import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, RouterModule, RouterOutlet, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './MaterialModule';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, MaterialModule,
      
      BrowserAnimationsModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi(),withFetch()),
    provideRouter(routes, withPreloading(PreloadAllModules)) //, withDebugTracing())
  ]
};
