import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNgxWebstorage, withNgxWebstorageConfig, withLocalStorage, withSessionStorage} from 'ngx-webstorage';
import { TokenInterceptor } from '@http/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([TokenInterceptor])
    ),
    provideNgxWebstorage(
			withNgxWebstorageConfig({ separator: '', caseSensitive: true, prefix: '' }),
			withLocalStorage(),
			withSessionStorage()
		)
  ]
};
