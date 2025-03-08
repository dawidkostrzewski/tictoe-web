import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {
    AutoRefreshTokenService,
    provideKeycloak, UserActivityService, withAutoRefreshToken
} from 'keycloak-angular';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideKeycloak({
            config: {
                url: 'https://192.168.100.237/',
                realm: 'tictoe',
                clientId: 'tictoe-web'
            },
            initOptions: {
                checkLoginIframe: false, // może pomóc, jeśli Keycloak używa iframe
                onLoad: 'login-required'
            },
            features: [
                withAutoRefreshToken({
                    onInactivityTimeout: 'logout',
                    sessionTimeout: 60000
                })
            ],
            providers: [AutoRefreshTokenService, UserActivityService]
        }),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient()
    ]
}
