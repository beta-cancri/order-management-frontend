import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const AppConfig = {
  apiUrl: 'http://localhost:8080/api'  // Backend API URL
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'APP_CONFIG', useValue: AppConfig }  // Make AppConfig injectable
  ]
};
