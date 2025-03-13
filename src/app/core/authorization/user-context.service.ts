import {effect, inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Keycloak from 'keycloak-js';
import {KEYCLOAK_EVENT_SIGNAL, KeycloakEventType} from 'keycloak-angular';
import {Subject} from 'rxjs';
import {KeycloakUserInfo} from './models/keycloak-user-info.model';
import {UserContext} from '../../share/models/user-context.model';

@Injectable({
    providedIn: "root"
})
export class UserContextService {

    public userContextLoaded = new Subject<void>();

    private readonly http = inject(HttpClient);
    private _userContext: UserContext | null = null;

    get userContext(): UserContext | null {
        return this._userContext;
    }

    constructor(private readonly keycloak: Keycloak) {
        console.log("User context service constructor");
        const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

        /*effect(() => {
            const keycloakEvent = keycloakSignal();
            if (keycloakEvent.type === KeycloakEventType.Ready) {
                this.keycloak.loadUserInfo().then( userInfo => {
                    this._userContext = new UserContext(userInfo as KeycloakUserInfo);
                    this.http.post('/tictoe-backend/userContext', { userId: this.userContext?.id}).subscribe({
                        next: () => {
                            this.userContextLoaded.next();
                        },
                        error: err => {
                            console.error(err);
                        }
                    });
                });
            }

            if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
                this._userContext = null;
            }
        });*/
    }

    init(userInfo: KeycloakUserInfo) {
        console.log('user service init', userInfo)
        this._userContext = new UserContext(userInfo);
    }
}
