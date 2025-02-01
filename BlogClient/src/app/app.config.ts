import { 
  ApplicationConfig, 
  provideZoneChangeDetection 
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideAnimationsAsync(),
      providePrimeNG({
        // ripple: true,
        theme: {
          preset: Aura,
          options: {
            prefix: 'p',
            // https://primeng.org/theming customization
            darkModeSelector: '.my-app-dark',
            cssLayer: {
              name: 'primeng',
              order: 'app-styles, primeng, another-css-library'
            }
          }
        }
      }),

    ]
};
