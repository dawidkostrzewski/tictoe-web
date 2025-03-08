import {Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import {UserContextService} from '../../../../core/authorization/user-context.service';
import {UserContext} from '../../../../share/models/user-context.model';
import {UpperCasePipe} from '@angular/common';
import Keycloak from 'keycloak-js';
import {DashboardService} from '../../service/dashboard.service';
import {LoaderComponent} from '../../../../share/loader/loader.component';

@Component({
  selector: 'player-profile',
    imports: [
        UpperCasePipe,
        LoaderComponent
    ],
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.sass'
})
export class PlayerProfileComponent implements OnInit {

    userContext: UserContext | null = null;
    logoutInProgress = false;
    playerProfileOpened = false;

    private elementRef = inject(ElementRef);
    private readonly userContextService = inject(UserContextService);
    private readonly keycloak = inject(Keycloak);
    private readonly service = inject(DashboardService);

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.playerProfileOpened = false;
        }
    }

    ngOnInit(): void {
        this.userContext = this.userContextService.userContext;
    }

    openPlayerProfileWindow(): void {
        this.playerProfileOpened = !this.playerProfileOpened;
    }

    openSettings(): void {

    }

    logout(): void {
        this.service.logoutPlayer(<string> this.userContext?.id).subscribe({
            next: () => {
                this.keycloak.logout();
            },
            error: err => {
                console.error(err);
            }
        })
    }




}
