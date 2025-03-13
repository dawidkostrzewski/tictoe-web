import {Component, inject, input, OnInit} from '@angular/core';
import {GameHistoryElementComponent} from "../game-history-element/game-history-element.component";
import {LoaderComponent} from "../../../../../share/loader/loader.component";
import {HistoricalGameEntry} from '../../../models/historical-game-entry.model';
import {GameService} from '../../../service/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'short-game-history',
	imports: [
		GameHistoryElementComponent,
		LoaderComponent
	],
  templateUrl: './short-game-history.component.html',
  styleUrl: './short-game-history.component.sass'
})
export class ShortGameHistoryComponent implements OnInit {

    playerId = input.required<string | undefined>();

    latestHistoricalGames: HistoricalGameEntry[] = [];
    loadingGames = false;

    private readonly gameService = inject(GameService);
    private readonly router = inject(Router);
    ngOnInit(): void {
        this.loadingGames =  true;
        this.gameService.getLatestGameHistory(<string>this.playerId()).subscribe({
            next: games => {
                this.latestHistoricalGames = games;
            },
            complete: () => {
                this.loadingGames = false;
            }
        });
    }

    redirectToGameHistory() {
        this.router.navigate(['/dashboard/games-history'])
    }
}
