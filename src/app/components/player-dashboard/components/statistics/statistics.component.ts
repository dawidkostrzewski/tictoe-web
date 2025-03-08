import {Component, inject, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
import {PlayerStats} from '../../models/player-stats.model';
import {LoaderComponent} from '../../../../share/loader/loader.component';

@Component({
    selector: 'player-statistics',
    imports: [
        LoaderComponent
    ],
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.sass'
})
export class StatisticsComponent implements OnChanges {

    playerId = input.required<string | undefined>();

    private readonly service = inject(DashboardService);

    playerStats: PlayerStats | undefined;
    loading = false;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['playerId'] && changes['playerId'].currentValue) {
            this.loading = true;
            this.service.getPlayerStats(<string> this.playerId()).subscribe({
                next: stats => {
                    this.playerStats = stats;
                },
                complete: () => {
                    this.loading = false;
                }
            })
        }
    }

}
