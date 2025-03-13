import {Component, inject, input} from '@angular/core';
import {PlayerInfoWithStatistics} from '../../../models/player-info-with-statistics.model';
import {PlayerAvatarComponent} from '../../../../../share/player-avatar/player-avatar.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leaderboard-element',
    imports: [
        PlayerAvatarComponent
    ],
  templateUrl: './leaderboard-element.component.html',
  styleUrl: './leaderboard-element.component.sass'
})
export class LeaderboardElementComponent {

    player = input.required<PlayerInfoWithStatistics>();

    private readonly router = inject(Router);

    goToPlayerProfile(playerId: string): void {
        this.router.navigate([`/dashboard/player/${playerId}`]);
    }

}
