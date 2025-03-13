import {Component, inject, OnInit} from '@angular/core';
import {LeaderboardService} from '../../service/leaderboard.service';
import {PlayerInfo} from '../../../../share/models/player-info.model';
import {LeaderboardElementComponent} from './leaderboard-element/leaderboard-element.component';
import {PlayerInfoWithStatistics} from '../../models/player-info-with-statistics.model';
import {LoaderComponent} from '../../../../share/loader/loader.component';

@Component({
  selector: 'leaderboard',
    imports: [
        LeaderboardElementComponent,
        LoaderComponent
    ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.sass'
})
export class LeaderboardComponent implements OnInit {

    players: PlayerInfoWithStatistics[] = [];
    loading = false;
    page = 0;
    pageSize = 15;

    private readonly service = inject(LeaderboardService);

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.loading = true;
        this.service.getLeaderboardPlayers(this.page, this.pageSize).subscribe({
            next: response => {
                this.players = response.content;
            },
            complete: () => {
                this.page++;
                this.loading = false;
            }
        });
    }

}
