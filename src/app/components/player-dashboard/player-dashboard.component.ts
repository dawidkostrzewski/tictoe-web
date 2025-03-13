import {
    Component, DoCheck,
    inject
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {UserContext} from '../../share/models/user-context.model';
import {UserContextService} from '../../core/authorization/user-context.service';
import {PlayerProfileComponent} from './components/player-profile/player-profile.component';
import {FriendsListComponent} from './components/friends-list/friends-list.component';
import {ConversationsComponent} from './components/conversations/conversations.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {IconsComponent} from '../../share/icons/icons.component';

@Component({
    selector: 'app-player-dashboard',
    imports: [
        PlayerProfileComponent,
        FriendsListComponent,
        ConversationsComponent,
        RouterLink,
        RouterOutlet,
        RouterLinkActive,
        IconsComponent
    ],
    templateUrl: './player-dashboard.component.html',
    styleUrl: './player-dashboard.component.sass'
})
export class PlayerDashboardComponent implements DoCheck {

    public userContextReady = false;
    public userContext: UserContext | null = null;

    private readonly userContextService = inject(UserContextService);

    constructor() {
        this.userContextService.userContextLoaded.pipe(takeUntilDestroyed()).subscribe(() => {
            this.userContext = this.userContextService.userContext;
            this.userContextReady = true;
        });
    }

    ngDoCheck(): void {
    }
}
