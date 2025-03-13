import {Component, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-forbidden',
  imports: [],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.sass'
})
export class ForbiddenComponent implements OnInit {

    //private readonly keycloak = inject(Keycloak);

    redirectToLogin() {

    }
    ngOnInit(): void {
        /*const keycloak = new Keycloak({
            url: 'https://192.168.100.237',
            realm: 'tictoe',
            clientId: 'tictoe-web'
        });

        keycloak.init({
            onLoad: 'login-required',
            redirectUri: window.location.origin, // Dynamically set the redirect URI
        }).then((authenticated) => {
            if (authenticated) {
                console.log('Authenticated');
            } else {
                console.warn('Not authenticated');
            }
        }).catch((error) => {
            console.error('Failed to initialize Keycloak', error);
        });*/
    }
}
