import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {StatisticsComponent} from '../statistics/statistics.component';
import {PlayersService} from '../../service/players.service';
import {PlayerInfo} from '../../../../share/models/player-info.model';
import {PlayerAvatarComponent} from '../../../../share/player-avatar/player-avatar.component';
import {ShortGameHistoryComponent} from '../game-history/short-game-history/short-game-history.component';
import {IconsComponent} from '../../../../share/icons/icons.component';
import {UserContextService} from '../../../../core/authorization/user-context.service';

@Component({
  selector: 'app-visit-player-profile',
    imports: [
        StatisticsComponent,
        PlayerAvatarComponent,
        ShortGameHistoryComponent,
        IconsComponent
    ],
  templateUrl: './visit-player-profile.component.html',
  styleUrl: './visit-player-profile.component.sass'
})
export class VisitPlayerProfileComponent implements OnInit {

    playerId: string | undefined;
    playerInfo: PlayerInfo | undefined;
    loading = false;
    sendingInvite = false;

    private readonly route = inject(ActivatedRoute);
    private readonly playersService = inject(PlayersService);
    private readonly userContextService = inject(UserContextService);

    constructor() {
        this.route.params.pipe(takeUntilDestroyed()).subscribe({
            next: params => {
                this.playerId = params['id'];
            }
        });
    }
    ngOnInit(): void {
        this.loading = true;
        this.playersService.getPlayerInfo(<string>this.playerId).subscribe({
            next: playerInfo => {
                this.playerInfo = playerInfo;
            },
            complete: () => {
                this.loading = false;
            }
        })
    }

    sendInvite(playerId: string): void {
        this.sendingInvite = true;
        this.playersService.sendPlayerInvite(<string> this.userContextService.userContext?.id, playerId).subscribe({
            next: value => () => {},
            complete: () => {
                this.sendingInvite = false;
            }
        })
    }


}
