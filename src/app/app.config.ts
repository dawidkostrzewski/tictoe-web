import {
    ApplicationConfig,
    importProvidersFrom,
    inject,
    provideAppInitializer,
    provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {
    AutoRefreshTokenService, KEYCLOAK_EVENT_SIGNAL,
    provideKeycloak, UserActivityService, withAutoRefreshToken
} from 'keycloak-angular';
import {provideHttpClient} from '@angular/common/http';
import {UserContextService} from './core/authorization/user-context.service';
import Keycloak, {KeycloakAdapter, KeycloakConfig} from 'keycloak-js';
import {KeycloakUserInfo} from './core/authorization/models/keycloak-user-info.model';
import {firstValueFrom} from 'rxjs';

const keycloakConfig: KeycloakConfig = {
            url: 'https://192.168.100.237/',
            realm: 'tictoe',
            clientId: 'tictoe-web'
}
function initAppContext() {
    return provideKeycloak({
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
    });
}
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
        provideAppInitializer(async () => {
            const keycloak = new Keycloak(keycloakConfig);
            await keycloak.init();
            const userContextService = inject(UserContextService);
            userContextService.init(await keycloak.loadUserInfo() as KeycloakUserInfo);
        }),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient(),

    ]
}
